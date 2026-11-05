import os
import sys

# Ensure UTF-8 output on Windows consoles
if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
from PIL import Image, ImageFilter, ImageEnhance

SRC_DIR = "backup_original_photos"
DST_DIR = "public/images/sarees"

TARGET_WIDTH = 1200
TARGET_HEIGHT = 1600
TARGET_RATIO = TARGET_WIDTH / TARGET_HEIGHT  # 0.75 (3:4)

CATEGORIES = [
    "chandra-pattu",
    "magic-silk",
    "pasta-crush",
    "sukriti",
    "wamika",
]

def process_image(src_path, dst_path, is_pc004=False):
    with Image.open(src_path) as img:
        img = img.convert("RGB")
        orig_w, orig_h = img.size
        orig_size_kb = os.path.getsize(src_path) / 1024
        actions = []

        # 1. Orientation check & correction
        if is_pc004:
            # PC004 was captured 90 degrees clockwise; rotate 90 CCW to straighten
            img = img.transpose(Image.Transpose.ROTATE_90)
            actions.append("Rotated 90° CCW (landscape to portrait)")
        
        cur_w, cur_h = img.size

        # 2. Aspect ratio enforcement (3:4)
        cur_ratio = cur_w / cur_h
        if abs(cur_ratio - TARGET_RATIO) > 0.005:
            # Crop to exact 3:4 centered
            if cur_ratio > TARGET_RATIO:
                # Too wide -> crop sides
                new_w = int(cur_h * TARGET_RATIO)
                left = (cur_w - new_w) // 2
                img = img.crop((left, 0, left + new_w, cur_h))
                actions.append(f"Centered crop width {cur_w}->{new_w}")
            else:
                # Too tall -> crop top/bottom
                new_h = int(cur_w / TARGET_RATIO)
                top = (cur_h - new_h) // 2
                img = img.crop((0, top, cur_w, top + new_h))
                actions.append(f"Centered crop height {cur_h}->{new_h}")

        # 3. High quality Lanczos resize to 1200x1600
        if img.size != (TARGET_WIDTH, TARGET_HEIGHT):
            img = img.resize((TARGET_WIDTH, TARGET_HEIGHT), Image.Resampling.LANCZOS)
            actions.append(f"Lanczos resize to {TARGET_WIDTH}x{TARGET_HEIGHT}")

        # 4. Subtle contrast & tonal enhancement (preserves authentic colors)
        img = ImageEnhance.Contrast(img).enhance(1.025)
        actions.append("Gentle contrast tuning (+2.5%)")

        # 5. Moderate unsharp mask for fabric clarity & weave sharpness
        img = img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=110, threshold=3))
        actions.append("Unsharp mask (r=1.2, p=110%, th=3)")

        # 6. Save optimized progressive JPEG
        os.makedirs(os.path.dirname(dst_path), exist_ok=True)
        img.save(
            dst_path,
            format="JPEG",
            quality=90,
            progressive=True,
            optimize=True,
            subsampling=0,
        )

        final_size_kb = os.path.getsize(dst_path) / 1024
        return {
            "file": os.path.basename(dst_path),
            "category": os.path.basename(os.path.dirname(dst_path)),
            "orig_size": f"{orig_w}x{orig_h}",
            "orig_kb": f"{orig_size_kb:.1f} KB",
            "new_size": f"{TARGET_WIDTH}x{TARGET_HEIGHT}",
            "new_kb": f"{final_size_kb:.1f} KB",
            "actions": "; ".join(actions),
        }

def main():
    print(f"Starting Saree Image Processing...")
    print(f"Source: {SRC_DIR}")
    print(f"Destination: {DST_DIR}")
    print(f"Target: {TARGET_WIDTH}x{TARGET_HEIGHT} (3:4 ratio), Progressive JPEG Q90 4:4:4\n")

    results = []
    for cat in CATEGORIES:
        src_cat_dir = os.path.join(SRC_DIR, cat)
        dst_cat_dir = os.path.join(DST_DIR, cat)
        if not os.path.exists(src_cat_dir):
            print(f"WARNING: Category directory not found: {src_cat_dir}")
            continue

        for filename in sorted(os.listdir(src_cat_dir)):
            if not filename.lower().endswith((".jpeg", ".jpg", ".png", ".webp")):
                continue
            src_file = os.path.join(src_cat_dir, filename)
            dst_file = os.path.join(dst_cat_dir, filename)
            is_pc004 = (cat == "pasta-crush" and filename == "PC004.jpeg")
            
            res = process_image(src_file, dst_file, is_pc004=is_pc004)
            results.append(res)
            print(f"✓ [{res['category']}] {res['file']} | {res['orig_size']} ({res['orig_kb']}) -> {res['new_size']} ({res['new_kb']}) | {res['actions']}")

    print(f"\n==========================================")
    print(f"Total Photographs Processed: {len(results)} / 18")
    print(f"==========================================")

if __name__ == "__main__":
    main()
