/**
 * శ్రీ Collections - Centralized Product Data Architecture
 * 
 * Supports multiple individual saree colour variations per saree type.
 * Each saree type contains at least 11 individual colour combinations.
 * 
 * Uploaded Batches:
 * - Chandra Pattu (CP): CP001.jpeg, CP002.jpeg (2 uploaded)
 * - Magic Silk (MS): MS001.jpeg to MS006.jpeg (6 uploaded)
 * - Pasta Crush (PC): PC001.jpeg to PC006.jpeg (6 uploaded)
 * - Sukriti (SK): SK001.jpeg, SK002.jpeg (2 uploaded)
 * - Wamika (WA): WA001 (WM001.jpeg), WA002 (WA002.jpeg) (2 uploaded)
 * 
 * Pending Uploads:
 * - Lily Silk (LS), Menka (MK), Timroo (TR), Vastram Silk (VS)
 */

export const SAREE_PRODUCTS = [
  {
    id: "chandra-pattu",
    name: "Chandra Pattu",
    teluguName: "చంద్ర పట్టు",
    price: 999,
    category: "Silk Sarees",
    representativeImage: "/images/sarees/chandra-pattu/CP001.jpeg",
    description: "Lustrous pattu drape inspired by moonlit radiance, featuring delicate motifs and an ornate South Indian pallu.",
    variations: [
      { id: "CP001", stickerNumber: "CP-01", colorName: null, image: "/images/sarees/chandra-pattu/CP001.jpeg", hasPhoto: true },
      { id: "CP002", stickerNumber: "CP-02", colorName: null, image: "/images/sarees/chandra-pattu/CP002.jpeg", hasPhoto: true },
      { id: "CP003", stickerNumber: "CP-03", colorName: null, image: "/images/sarees/chandra-pattu/CP003.jpeg", hasPhoto: false },
      { id: "CP004", stickerNumber: "CP-04", colorName: null, image: "/images/sarees/chandra-pattu/CP004.jpeg", hasPhoto: false },
      { id: "CP005", stickerNumber: "CP-05", colorName: null, image: "/images/sarees/chandra-pattu/CP005.jpeg", hasPhoto: false },
      { id: "CP006", stickerNumber: "CP-06", colorName: null, image: "/images/sarees/chandra-pattu/CP006.jpeg", hasPhoto: false },
      { id: "CP007", stickerNumber: "CP-07", colorName: null, image: "/images/sarees/chandra-pattu/CP007.jpeg", hasPhoto: false },
      { id: "CP008", stickerNumber: "CP-08", colorName: null, image: "/images/sarees/chandra-pattu/CP008.jpeg", hasPhoto: false },
      { id: "CP009", stickerNumber: "CP-09", colorName: null, image: "/images/sarees/chandra-pattu/CP009.jpeg", hasPhoto: false },
      { id: "CP010", stickerNumber: "CP-10", colorName: null, image: "/images/sarees/chandra-pattu/CP010.jpeg", hasPhoto: false },
      { id: "CP011", stickerNumber: "CP-11", colorName: null, image: "/images/sarees/chandra-pattu/CP011.jpeg", hasPhoto: false }
    ]
  },
  {
    id: "lily-silk",
    name: "Lily Silk",
    teluguName: "లిల్లీ సిల్క్",
    price: 849,
    category: "Designer Sarees",
    representativeImage: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80",
    description: "Delicate pastel silk composition crafted for morning ceremonies, family celebrations, and festive occasions.",
    variations: [
      { id: "LS001", stickerNumber: "LS-01", colorName: null, image: "/images/sarees/lily-silk/LS001.jpeg", hasPhoto: false },
      { id: "LS002", stickerNumber: "LS-02", colorName: null, image: "/images/sarees/lily-silk/LS002.jpeg", hasPhoto: false },
      { id: "LS003", stickerNumber: "LS-03", colorName: null, image: "/images/sarees/lily-silk/LS003.jpeg", hasPhoto: false },
      { id: "LS004", stickerNumber: "LS-04", colorName: null, image: "/images/sarees/lily-silk/LS004.jpeg", hasPhoto: false },
      { id: "LS005", stickerNumber: "LS-05", colorName: null, image: "/images/sarees/lily-silk/LS005.jpeg", hasPhoto: false },
      { id: "LS006", stickerNumber: "LS-06", colorName: null, image: "/images/sarees/lily-silk/LS006.jpeg", hasPhoto: false },
      { id: "LS007", stickerNumber: "LS-07", colorName: null, image: "/images/sarees/lily-silk/LS007.jpeg", hasPhoto: false },
      { id: "LS008", stickerNumber: "LS-08", colorName: null, image: "/images/sarees/lily-silk/LS008.jpeg", hasPhoto: false },
      { id: "LS009", stickerNumber: "LS-09", colorName: null, image: "/images/sarees/lily-silk/LS009.jpeg", hasPhoto: false },
      { id: "LS010", stickerNumber: "LS-10", colorName: null, image: "/images/sarees/lily-silk/LS010.jpeg", hasPhoto: false },
      { id: "LS011", stickerNumber: "LS-11", colorName: null, image: "/images/sarees/lily-silk/LS011.jpeg", hasPhoto: false }
    ]
  },
  {
    id: "magic-silk",
    name: "Magic Silk",
    teluguName: "మ్యాజిక్ సిల్క్",
    price: 999,
    category: "Designer Sarees",
    representativeImage: "/images/sarees/magic-silk/MS001.jpeg",
    description: "Dual-tone silk drape that gracefully catches the ambient light, designed for elegant evening gatherings.",
    variations: [
      { id: "MS001", stickerNumber: "MS-01", colorName: null, image: "/images/sarees/magic-silk/MS001.jpeg", hasPhoto: true },
      { id: "MS002", stickerNumber: "MS-02", colorName: null, image: "/images/sarees/magic-silk/MS002.jpeg", hasPhoto: true },
      { id: "MS003", stickerNumber: "MS-03", colorName: null, image: "/images/sarees/magic-silk/MS003.jpeg", hasPhoto: true },
      { id: "MS004", stickerNumber: "MS-04", colorName: null, image: "/images/sarees/magic-silk/MS004.jpeg", hasPhoto: true },
      { id: "MS005", stickerNumber: "MS-05", colorName: null, image: "/images/sarees/magic-silk/MS005.jpeg", hasPhoto: true },
      { id: "MS006", stickerNumber: "MS-06", colorName: null, image: "/images/sarees/magic-silk/MS006.jpeg", hasPhoto: true },
      { id: "MS007", stickerNumber: "MS-07", colorName: null, image: "/images/sarees/magic-silk/MS007.jpeg", hasPhoto: false },
      { id: "MS008", stickerNumber: "MS-08", colorName: null, image: "/images/sarees/magic-silk/MS008.jpeg", hasPhoto: false },
      { id: "MS009", stickerNumber: "MS-09", colorName: null, image: "/images/sarees/magic-silk/MS009.jpeg", hasPhoto: false },
      { id: "MS010", stickerNumber: "MS-10", colorName: null, image: "/images/sarees/magic-silk/MS010.jpeg", hasPhoto: false },
      { id: "MS011", stickerNumber: "MS-11", colorName: null, image: "/images/sarees/magic-silk/MS011.jpeg", hasPhoto: false }
    ]
  },
  {
    id: "menka",
    name: "Menka",
    teluguName: "మేనక",
    price: 549,
    category: "Mangalagiri Sarees",
    representativeImage: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=800&q=80",
    description: "Signature Mangalagiri handloom weave with contrast borders, combining traditional grace with everyday comfort.",
    variations: [
      { id: "MK001", stickerNumber: "MK-01", colorName: null, image: "/images/sarees/menka/MK001.jpeg", hasPhoto: false },
      { id: "MK002", stickerNumber: "MK-02", colorName: null, image: "/images/sarees/menka/MK002.jpeg", hasPhoto: false },
      { id: "MK003", stickerNumber: "MK-03", colorName: null, image: "/images/sarees/menka/MK003.jpeg", hasPhoto: false },
      { id: "MK004", stickerNumber: "MK-04", colorName: null, image: "/images/sarees/menka/MK004.jpeg", hasPhoto: false },
      { id: "MK005", stickerNumber: "MK-05", colorName: null, image: "/images/sarees/menka/MK005.jpeg", hasPhoto: false },
      { id: "MK006", stickerNumber: "MK-06", colorName: null, image: "/images/sarees/menka/MK006.jpeg", hasPhoto: false },
      { id: "MK007", stickerNumber: "MK-07", colorName: null, image: "/images/sarees/menka/MK007.jpeg", hasPhoto: false },
      { id: "MK008", stickerNumber: "MK-08", colorName: null, image: "/images/sarees/menka/MK008.jpeg", hasPhoto: false },
      { id: "MK009", stickerNumber: "MK-09", colorName: null, image: "/images/sarees/menka/MK009.jpeg", hasPhoto: false },
      { id: "MK010", stickerNumber: "MK-10", colorName: null, image: "/images/sarees/menka/MK010.jpeg", hasPhoto: false },
      { id: "MK011", stickerNumber: "MK-11", colorName: null, image: "/images/sarees/menka/MK011.jpeg", hasPhoto: false }
    ]
  },
  {
    id: "pasta-crush",
    name: "Pasta Crush",
    teluguName: "పాస్తా క్రష్",
    price: 899,
    category: "Designer Sarees",
    representativeImage: "/images/sarees/pasta-crush/PC001.jpeg",
    description: "A contemporary drape with distinctive micro-crush texture that falls gracefully with a soft festive sheen.",
    variations: [
      { id: "PC001", stickerNumber: "PC-01", colorName: null, image: "/images/sarees/pasta-crush/PC001.jpeg", hasPhoto: true },
      { id: "PC002", stickerNumber: "PC-02", colorName: null, image: "/images/sarees/pasta-crush/PC002.jpeg", hasPhoto: true },
      { id: "PC003", stickerNumber: "PC-03", colorName: null, image: "/images/sarees/pasta-crush/PC003.jpeg", hasPhoto: true },
      { id: "PC004", stickerNumber: "PC-04", colorName: null, image: "/images/sarees/pasta-crush/PC004.jpeg", hasPhoto: true },
      { id: "PC005", stickerNumber: "PC-05", colorName: null, image: "/images/sarees/pasta-crush/PC005.jpeg", hasPhoto: true },
      { id: "PC006", stickerNumber: "PC-06", colorName: null, image: "/images/sarees/pasta-crush/PC006.jpeg", hasPhoto: true },
      { id: "PC007", stickerNumber: "PC-07", colorName: null, image: "/images/sarees/pasta-crush/PC007.jpeg", hasPhoto: false },
      { id: "PC008", stickerNumber: "PC-08", colorName: null, image: "/images/sarees/pasta-crush/PC008.jpeg", hasPhoto: false },
      { id: "PC009", stickerNumber: "PC-09", colorName: null, image: "/images/sarees/pasta-crush/PC009.jpeg", hasPhoto: false },
      { id: "PC010", stickerNumber: "PC-10", colorName: null, image: "/images/sarees/pasta-crush/PC010.jpeg", hasPhoto: false },
      { id: "PC011", stickerNumber: "PC-11", colorName: null, image: "/images/sarees/pasta-crush/PC011.jpeg", hasPhoto: false }
    ]
  },
  {
    id: "sukriti",
    name: "Sukriti",
    teluguName: "సుకృతి",
    price: 999,
    category: "Silk Sarees",
    representativeImage: "/images/sarees/sukriti/SK001.jpeg",
    description: "Elegant silk saree adorned with traditional temple zari border work and celebratory contrast hues.",
    variations: [
      { id: "SK001", stickerNumber: "SK-01", colorName: null, image: "/images/sarees/sukriti/SK001.jpeg", hasPhoto: true },
      { id: "SK002", stickerNumber: "SK-02", colorName: null, image: "/images/sarees/sukriti/SK002.jpeg", hasPhoto: true },
      { id: "SK003", stickerNumber: "SK-03", colorName: null, image: "/images/sarees/sukriti/SK003.jpeg", hasPhoto: false },
      { id: "SK004", stickerNumber: "SK-04", colorName: null, image: "/images/sarees/sukriti/SK004.jpeg", hasPhoto: false },
      { id: "SK005", stickerNumber: "SK-05", colorName: null, image: "/images/sarees/sukriti/SK005.jpeg", hasPhoto: false },
      { id: "SK006", stickerNumber: "SK-06", colorName: null, image: "/images/sarees/sukriti/SK006.jpeg", hasPhoto: false },
      { id: "SK007", stickerNumber: "SK-07", colorName: null, image: "/images/sarees/sukriti/SK007.jpeg", hasPhoto: false },
      { id: "SK008", stickerNumber: "SK-08", colorName: null, image: "/images/sarees/sukriti/SK008.jpeg", hasPhoto: false },
      { id: "SK009", stickerNumber: "SK-09", colorName: null, image: "/images/sarees/sukriti/SK009.jpeg", hasPhoto: false },
      { id: "SK010", stickerNumber: "SK-10", colorName: null, image: "/images/sarees/sukriti/SK010.jpeg", hasPhoto: false },
      { id: "SK011", stickerNumber: "SK-11", colorName: null, image: "/images/sarees/sukriti/SK011.jpeg", hasPhoto: false }
    ]
  },
  {
    id: "timroo",
    name: "Timroo",
    teluguName: "తిమ్రూ",
    price: 949,
    category: "Silk Sarees",
    representativeImage: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80",
    description: "Rich festive weave featuring fine zari butta accents across a radiant jewel-toned body and stately pallu.",
    variations: [
      { id: "TR001", stickerNumber: "TR-01", colorName: null, image: "/images/sarees/timroo/TR001.jpeg", hasPhoto: false },
      { id: "TR002", stickerNumber: "TR-02", colorName: null, image: "/images/sarees/timroo/TR002.jpeg", hasPhoto: false },
      { id: "TR003", stickerNumber: "TR-03", colorName: null, image: "/images/sarees/timroo/TR003.jpeg", hasPhoto: false },
      { id: "TR004", stickerNumber: "TR-04", colorName: null, image: "/images/sarees/timroo/TR004.jpeg", hasPhoto: false },
      { id: "TR005", stickerNumber: "TR-05", colorName: null, image: "/images/sarees/timroo/TR005.jpeg", hasPhoto: false },
      { id: "TR006", stickerNumber: "TR-06", colorName: null, image: "/images/sarees/timroo/TR006.jpeg", hasPhoto: false },
      { id: "TR007", stickerNumber: "TR-07", colorName: null, image: "/images/sarees/timroo/TR007.jpeg", hasPhoto: false },
      { id: "TR008", stickerNumber: "TR-08", colorName: null, image: "/images/sarees/timroo/TR008.jpeg", hasPhoto: false },
      { id: "TR009", stickerNumber: "TR-09", colorName: null, image: "/images/sarees/timroo/TR009.jpeg", hasPhoto: false },
      { id: "TR010", stickerNumber: "TR-10", colorName: null, image: "/images/sarees/timroo/TR010.jpeg", hasPhoto: false },
      { id: "TR011", stickerNumber: "TR-11", colorName: null, image: "/images/sarees/timroo/TR011.jpeg", hasPhoto: false }
    ]
  },
  {
    id: "vastram-silk",
    name: "Vastram Silk",
    teluguName: "వస్త్రం సిల్క్",
    price: 849,
    category: "Mangalagiri Sarees",
    representativeImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    description: "Traditional Mangalagiri silk drape featuring classic golden zari borders and timeless South Indian festive elegance.",
    variations: [
      { id: "VS001", stickerNumber: "VS-01", colorName: null, image: "/images/sarees/vastram-silk/VS001.jpeg", hasPhoto: false },
      { id: "VS002", stickerNumber: "VS-02", colorName: null, image: "/images/sarees/vastram-silk/VS002.jpeg", hasPhoto: false },
      { id: "VS003", stickerNumber: "VS-03", colorName: null, image: "/images/sarees/vastram-silk/VS003.jpeg", hasPhoto: false },
      { id: "VS004", stickerNumber: "VS-04", colorName: null, image: "/images/sarees/vastram-silk/VS004.jpeg", hasPhoto: false },
      { id: "VS005", stickerNumber: "VS-05", colorName: null, image: "/images/sarees/vastram-silk/VS005.jpeg", hasPhoto: false },
      { id: "VS006", stickerNumber: "VS-06", colorName: null, image: "/images/sarees/vastram-silk/VS006.jpeg", hasPhoto: false },
      { id: "VS007", stickerNumber: "VS-07", colorName: null, image: "/images/sarees/vastram-silk/VS007.jpeg", hasPhoto: false },
      { id: "VS008", stickerNumber: "VS-08", colorName: null, image: "/images/sarees/vastram-silk/VS008.jpeg", hasPhoto: false },
      { id: "VS009", stickerNumber: "VS-09", colorName: null, image: "/images/sarees/vastram-silk/VS009.jpeg", hasPhoto: false },
      { id: "VS010", stickerNumber: "VS-10", colorName: null, image: "/images/sarees/vastram-silk/VS010.jpeg", hasPhoto: false },
      { id: "VS011", stickerNumber: "VS-11", colorName: null, image: "/images/sarees/vastram-silk/VS011.jpeg", hasPhoto: false }
    ]
  },
  {
    id: "wamika",
    name: "Wamika",
    teluguName: "వామిక",
    price: 849,
    category: "Mangalagiri Sarees",
    representativeImage: "/images/sarees/wamika/WM001.jpeg",
    description: "Lightweight and comfortable drape crafted with authentic Mangalagiri geometric border detailing.",
    variations: [
      // Wamika uses WA prefix consistently while keeping uploaded filenames as-is
      { id: "WA001", stickerNumber: "WA-01", colorName: null, image: "/images/sarees/wamika/WM001.jpeg", hasPhoto: true },
      { id: "WA002", stickerNumber: "WA-02", colorName: null, image: "/images/sarees/wamika/WA002.jpeg", hasPhoto: true },
      { id: "WA003", stickerNumber: "WA-03", colorName: null, image: "/images/sarees/wamika/WA003.jpeg", hasPhoto: false },
      { id: "WA004", stickerNumber: "WA-04", colorName: null, image: "/images/sarees/wamika/WA004.jpeg", hasPhoto: false },
      { id: "WA005", stickerNumber: "WA-05", colorName: null, image: "/images/sarees/wamika/WA005.jpeg", hasPhoto: false },
      { id: "WA006", stickerNumber: "WA-06", colorName: null, image: "/images/sarees/wamika/WA006.jpeg", hasPhoto: false },
      { id: "WA007", stickerNumber: "WA-07", colorName: null, image: "/images/sarees/wamika/WA007.jpeg", hasPhoto: false },
      { id: "WA008", stickerNumber: "WA-08", colorName: null, image: "/images/sarees/wamika/WA008.jpeg", hasPhoto: false },
      { id: "WA009", stickerNumber: "WA-09", colorName: null, image: "/images/sarees/wamika/WA009.jpeg", hasPhoto: false },
      { id: "WA010", stickerNumber: "WA-10", colorName: null, image: "/images/sarees/wamika/WA010.jpeg", hasPhoto: false },
      { id: "WA011", stickerNumber: "WA-11", colorName: null, image: "/images/sarees/wamika/WA011.jpeg", hasPhoto: false }
    ]
  }
];

// Helper to count verified uploaded variations with actual photographs
export function getUploadedVariationCount(saree) {
  if (!saree || !Array.isArray(saree.variations)) return 0;
  return saree.variations.filter((v) => Boolean(v.hasPhoto)).length;
}

// Alphabetical order (A-Z): Designer Sarees -> Mangalagiri Sarees -> Silk Sarees -> 1-Gram Gold Jewellery
export const CATEGORIES = [
  {
    id: "designer-sarees",
    name: "Designer Sarees",
    teluguName: "డిజైనర్ చీరలు",
    description: "Contemporary silhouettes, crush textures, and statement evening drapes",
    count: "3 Weaves",
    image: "/images/sarees/pasta-crush/PC001.jpeg"
  },
  {
    id: "mangalagiri-sarees",
    name: "Mangalagiri Sarees",
    teluguName: "మంగళగిరి పట్టు చీరలు",
    description: "Authentic Nizam border handlooms direct from Andhra master weavers",
    count: "3 Weaves",
    image: "/images/sarees/wamika/WM001.jpeg"
  },
  {
    id: "silk-sarees",
    name: "Silk Sarees",
    teluguName: "పట్టు చీరల విభాగం",
    description: "Lustrous textures, ornate zari pallus, and festive South Indian elegance",
    count: "3 Weaves",
    image: "/images/sarees/chandra-pattu/CP001.jpeg"
  },
  {
    id: "jewellery",
    name: "1-Gram Gold Jewellery",
    teluguName: "1-గ్రామ్ బంగారం ఆభరణాలు",
    description: "South Indian temple and micro gold-plated jewellery to complement your saree",
    count: "Catalogue Preview",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
  }
];
