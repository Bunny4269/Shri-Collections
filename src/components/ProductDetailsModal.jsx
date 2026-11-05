import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Phone, Sparkles, ChevronLeft, ChevronRight, Layers, PhoneCall, Info } from 'lucide-react';
import { BOUTIQUE_CONFIG, hasValidPhone, getPhoneTelLink } from '../config/boutique';

export default function ProductDetailsModal({ 
  product, 
  onClose
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageErrorMap, setImageErrorMap] = useState({});
  const [mounted, setMounted] = useState(false);
  const thumbnailContainerRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Store element that had focus before modal opened, and restore it on close
  useEffect(() => {
    if (product) {
      previousFocusRef.current = document.activeElement;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
        previousFocusRef.current = null;
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [product]);

  // Reset index when opened with a new product
  useEffect(() => {
    setSelectedIndex(0);
    setImageErrorMap({});
  }, [product?.id]);

  // Compute variations safely regardless of whether product is present
  const uploadedVariations = (product?.variations || []).filter((v) => Boolean(v.hasPhoto));
  const hasUploadedPhotos = uploadedVariations.length > 0;

  // Show only actual uploaded variations in the gallery
  // If this saree type has no uploaded photos yet, provide a single preview item
  const variations = hasUploadedPhotos
    ? uploadedVariations
    : [
        {
          id: `${product?.id || 'preview'}-preview`,
          stickerNumber: "Showroom Preview",
          colorName: null,
          image: product?.representativeImage || product?.images?.[0],
          hasPhoto: false,
          isPending: true
        }
      ];

  const handlePrev = () => {
    if (variations.length <= 1) return;
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : variations.length - 1));
  };

  const handleNext = () => {
    if (variations.length <= 1) return;
    setSelectedIndex((prev) => (prev < variations.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation (Escape to close, Left/Right arrows to cycle variations)
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, selectedIndex, variations.length]);

  if (!product || !mounted) return null;

  const currentVariation = variations[selectedIndex] || variations[0];

  // Helper to construct a branded fallback SVG if actual photograph is pending upload
  const getVariationPlaceholder = (item, index) => {
    const sticker = item.stickerNumber || item.id || `Var-${index + 1}`;
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><rect fill="%235F1B26" width="600" height="800"/><circle cx="300" cy="400" r="180" fill="%23C5A059" opacity="0.15"/><text fill="%23FFFFFF" font-family="serif" font-size="28" font-weight="bold" x="50%" y="42%" text-anchor="middle">శ్రీ Collections</text><text fill="%23DEC56A" font-family="serif" font-size="22" x="50%" y="50%" text-anchor="middle">${encodeURIComponent(product.name)}</text><rect x="180" y="440" width="240" height="44" rx="8" fill="%23C5A059" fill-opacity="0.25" stroke="%23C5A059" stroke-width="1.5"/><text fill="%23FAF6EE" font-family="monospace" font-size="16" font-weight="bold" x="50%" y="58%" text-anchor="middle">Variation ID: ${encodeURIComponent(sticker)}</text><text fill="%23EADCCE" font-family="sans-serif" font-size="13" x="50%" y="67%" text-anchor="middle">Actual Photograph Uploading Soon</text></svg>`;
  };

  const isCurrentImgError = Boolean(imageErrorMap[currentVariation?.id]);
  const activeImageSrc = isCurrentImgError
    ? getVariationPlaceholder(currentVariation, selectedIndex)
    : (currentVariation?.image || product.representativeImage || getVariationPlaceholder(currentVariation, selectedIndex));

  const phoneLink = getPhoneTelLink();
  const isPhoneReady = hasValidPhone();

  const modalMarkup = (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-maroon-950/80 transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="min-h-full flex items-center justify-center p-3 sm:p-5 lg:p-8">
        <div className="relative bg-white rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl border border-gold-500/40 z-10 animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
          
          {/* Header Bar with Brand & Close Button */}
          <div className="px-5 py-3.5 bg-maroon-900 border-b border-gold-500/25 flex items-center justify-between text-cream-100 flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-brand-telugu text-xl font-bold text-gold-400">శ్రీ</span>
              <span id="product-modal-title" className="font-cinzel text-sm sm:text-base font-bold tracking-widest uppercase text-white">
                Collections &bull; Saree Details
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-cream-200 hover:text-maroon-900 flex items-center justify-center transition-all focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Main Content Container (Responsive Grid) */}
          <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
            
            {/* Desktop Left / Mobile Top: Large Photograph with Prev/Next Controls */}
            <div className="lg:col-span-7 bg-cream-50 p-4 sm:p-6 lg:p-7 flex flex-col justify-between">
              
              {/* Large Saree Image with Controlled 3:4 Aspect Ratio */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-neutral-200 shadow-md group">
                <img
                  src={activeImageSrc}
                  alt={`${product.name} - Variation ${currentVariation.stickerNumber || currentVariation.id}`}
                  onError={() => {
                    setImageErrorMap((prev) => ({ ...prev, [currentVariation.id]: true }));
                  }}
                  className="w-full h-full object-cover object-top transition-opacity duration-300"
                />

                {/* Soft Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top-Left: Saree Telugu Name & Sticker Badge */}
                <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
                  <span className="bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-maroon-900 border border-gold-400/40 shadow-sm font-brand-telugu">
                    {product.teluguName}
                  </span>
                  <span className="bg-maroon-900/90 text-gold-300 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider border border-gold-500/30 shadow-sm">
                    Sticker: {currentVariation.stickerNumber || currentVariation.id}
                  </span>
                </div>

                {/* Top-Right: Current Index / Total variations */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-cream-100 text-[11px] font-mono px-2.5 py-0.5 rounded-full z-10 border border-white/20">
                  {selectedIndex + 1} / {variations.length}
                </div>

                {/* Previous Control Button */}
                {variations.length > 1 && (
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-maroon-900 flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 z-20 focus:outline-none"
                    aria-label="Previous colour variation"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}

                {/* Next Control Button */}
                {variations.length > 1 && (
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-maroon-900 flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 z-20 focus:outline-none"
                    aria-label="Next colour variation"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}

                {/* Bottom Overlay Label if confirmed colorName is available */}
                {currentVariation.colorName && (
                  <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-lg bg-maroon-950/85 backdrop-blur-sm text-white text-center text-xs font-medium border border-gold-500/30">
                    Colour: <strong className="text-gold-300">{currentVariation.colorName}</strong>
                  </div>
                )}
              </div>

              {/* Photo helper / Notice under image */}
              <div className="mt-3 text-center text-[11px] text-neutral-500">
                Use arrows or thumbnails to explore all {variations.length} colour combinations of {product.name}.
              </div>

            </div>

            {/* Desktop Right / Mobile Bottom: Details, Thumbnails & Enquiry */}
            <div className="lg:col-span-5 p-5 sm:p-6 lg:p-7 flex flex-col justify-between space-y-5">
              
              <div className="space-y-4">
                
                {/* Category & Heritage Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold tracking-widest text-gold-700 bg-gold-100 px-2.5 py-1 rounded-md">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-maroon-800 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                    <span>Exclusive Weave</span>
                  </div>
                </div>

                {/* Saree Name */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-maroon-950">
                    {product.name}
                  </h2>
                  <p className="font-brand-telugu text-gold-700 text-sm font-medium mt-0.5">
                    {product.teluguName} &bull; శ్రీ Collections
                  </p>
                </div>

                {/* MRP Display */}
                <div className="p-3.5 bg-cream-50 rounded-xl border border-gold-500/30 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">MRP in INR</span>
                    <span className="text-3xl font-serif font-bold text-maroon-950">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-500">
                    Same MRP across all colour variations
                  </span>
                </div>

                {/* Interactive Variation Thumbnails Section */}
                <div className="space-y-2 pt-1">
                  {hasUploadedPhotos ? (
                    <>
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs uppercase font-bold tracking-wider text-neutral-700 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-gold-600" />
                          <span>Uploaded Colour Variations ({variations.length})</span>
                        </h3>
                        <span className="text-[11px] text-gold-700 font-medium">
                          Click to view
                        </span>
                      </div>

                      {/* Horizontally scrollable thumbnail gallery supporting uploaded items */}
                      <div 
                        ref={thumbnailContainerRef}
                        className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-gold-500"
                      >
                        {variations.map((item, idx) => {
                          const isSelected = selectedIndex === idx;
                          const hasErr = Boolean(imageErrorMap[item.id]);
                          const thumbSrc = hasErr ? getVariationPlaceholder(item, idx) : (item.image || getVariationPlaceholder(item, idx));

                          return (
                            <button
                              key={item.id || idx}
                              onClick={() => setSelectedIndex(idx)}
                              className={`relative w-14 h-18 sm:w-16 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all group focus:outline-none ${
                                isSelected 
                                  ? 'border-maroon-800 shadow-md ring-2 ring-gold-400/50 scale-105' 
                                  : 'border-neutral-200 opacity-70 hover:opacity-100 hover:border-gold-400'
                              }`}
                              aria-label={`Select variation ${item.stickerNumber || idx + 1}`}
                              title={`Variation: ${item.stickerNumber || item.id}`}
                            >
                              <img
                                src={thumbSrc}
                                alt={`Thumb ${item.id}`}
                                onError={() => setImageErrorMap((prev) => ({ ...prev, [item.id]: true }))}
                                className="w-full h-full object-cover object-top"
                              />
                              {/* Mini Sticker Badge */}
                              <span className={`absolute bottom-0 inset-x-0 text-[8px] font-mono py-0.5 text-center truncate ${
                                isSelected ? 'bg-maroon-900 text-gold-300 font-bold' : 'bg-black/60 text-white'
                              }`}>
                                {item.stickerNumber || `V-${idx + 1}`}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <div className="p-3.5 bg-cream-50 rounded-lg border border-gold-500/25 flex items-start gap-2.5">
                      <Layers className="w-4 h-4 text-maroon-800 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-maroon-900">Colour Variations Uploading Soon</h4>
                        <p className="text-[11px] text-neutral-600 mt-0.5 leading-relaxed">
                          Actual saree photographs for {product.name} are currently being processed. Please call our boutique to enquire about available shades in stock.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Verified Drape Description */}
                {product.description && (
                  <p className="text-xs text-neutral-600 leading-relaxed pt-1">
                    {product.description}
                  </p>
                )}

              </div>

              {/* Bottom Section: Customer Guidance & Prominent Phone Enquiry Button */}
              <div className="pt-4 border-t border-neutral-200 space-y-3">
                
                {/* Customer Guidance Message as requested in Section 7 */}
                <div className="p-3 bg-cream-50 rounded-lg border border-gold-500/20 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-maroon-800 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    {BOUTIQUE_CONFIG.customerGuidanceMessage}
                  </p>
                </div>

                {/* Prominent Call for Enquiry Button */}
                {isPhoneReady ? (
                  <a
                    href={phoneLink}
                    className="w-full py-3.5 px-4 bg-maroon-800 hover:bg-maroon-900 active:bg-maroon-950 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 group"
                  >
                    <PhoneCall className="w-4 h-4 text-gold-300 group-hover:scale-110 transition-transform" />
                    <span>Call for Enquiry ({BOUTIQUE_CONFIG.displayPhone || BOUTIQUE_CONFIG.phone})</span>
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full py-3 px-4 bg-neutral-200 text-neutral-500 font-bold text-xs uppercase tracking-wider rounded-xl cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Phone Enquiry Available Soon</span>
                  </button>
                )}

                {/* Secondary close action */}
                <button
                  onClick={onClose}
                  className="w-full py-2 text-neutral-500 hover:text-neutral-800 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Close Details
                </button>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );

  return createPortal(modalMarkup, document.body);
}
