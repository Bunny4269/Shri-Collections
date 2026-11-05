import React, { useState } from 'react';
import { Eye, Layers } from 'lucide-react';
import { getUploadedVariationCount } from '../data/products';

export default function ProductCard({ 
  product, 
  onViewDetails
}) {
  const [imageError, setImageError] = useState(false);

  // Fallback SVG if image not yet uploaded
  const fallbackSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><rect fill="%235F1B26" width="600" height="800"/><circle cx="300" cy="400" r="180" fill="%23C5A059" opacity="0.2"/><text fill="%23FFFFFF" font-family="serif" font-size="32" font-weight="bold" x="50%" y="45%" text-anchor="middle">శ్రీ Collections</text><text fill="%23DEC56A" font-family="serif" font-size="22" x="50%" y="54%" text-anchor="middle">${encodeURIComponent(product.name)}</text><text fill="%23FAF6EE" font-family="sans-serif" font-size="16" x="50%" y="62%" text-anchor="middle">Mangalagiri Boutique</text></svg>`;

  const activeImage = imageError 
    ? fallbackSvg 
    : (product.representativeImage || product.images?.[0] || product.variations?.[0]?.image || fallbackSvg);

  // Actual verified variation count (only shown when actual inventory data / photos are uploaded)
  const uploadedCount = getUploadedVariationCount(product);
  const totalVariationsCount = product.variations?.length || 0;

  return (
    <div className="group rounded-xl overflow-hidden bg-white border border-maroon-900/10 hover:border-gold-500/60 transition-all duration-300 shadow-sm hover:shadow-luxury-hover flex flex-col relative">
      
      {/* Saree Photograph Container with Uniform 3:4 Aspect Ratio */}
      <div 
        className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 cursor-pointer"
        onClick={() => onViewDetails(product)}
      >
        <img
          src={activeImage}
          alt={`శ్రీ Collections - ${product.name} saree`}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Top-Right Badge: Variation Indicator */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-maroon-900 border border-gold-500/40 text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
          <Layers className="w-3 h-3 text-gold-600" />
          <span>
            {uploadedCount > 0 
              ? `${uploadedCount} Colours` 
              : `Photos Uploading`}
          </span>
        </div>

        {/* Desktop Quick View Button on Hover */}
        <div className="absolute inset-x-4 bottom-4 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="w-full py-2.5 bg-white/95 hover:bg-white text-maroon-900 text-xs font-semibold tracking-wider uppercase rounded-lg shadow-lg backdrop-blur-sm border border-gold-500/40 flex items-center justify-center gap-2 transition-colors"
          >
            <Eye className="w-4 h-4 text-gold-600" />
            <span>View Details & Variations</span>
          </button>
        </div>
      </div>

      {/* Saree Details Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Saree Category & Telugu Name */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-[11px] text-maroon-800/80 font-medium tracking-wide">
              {product.category}
            </span>
            <span className="font-brand-telugu text-[11px] text-gold-700 font-semibold">
              {product.teluguName}
            </span>
          </div>

          {/* Saree Name */}
          <h3 
            onClick={() => onViewDetails(product)}
            className="font-editorial text-lg sm:text-xl font-semibold text-neutral-900 group-hover:text-maroon-800 transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Colour Variations Count / Availability Status */}
          <div className="mt-1 text-xs">
            {uploadedCount > 0 ? (
              <span className="text-gold-700 font-semibold font-serif">
                {uploadedCount} Colour Variation{uploadedCount > 1 ? 's' : ''}
              </span>
            ) : (
              <span className="text-neutral-500 text-[11px] italic">
                Photographs uploading soon
              </span>
            )}
          </div>
        </div>

        {/* MRP & View Details CTA */}
        <div className="pt-3 mt-3 border-t border-maroon-900/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">MRP</span>
            <span className="text-xl font-bold text-maroon-950 font-serif">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
          </div>

          {/* View Details Button */}
          <button
            onClick={() => onViewDetails(product)}
            className="py-2 px-3.5 sm:px-4 bg-maroon-800 hover:bg-maroon-900 text-white text-xs font-semibold rounded-lg tracking-wider uppercase transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Eye className="w-3.5 h-3.5 text-gold-300" />
            <span>View Details</span>
          </button>
        </div>

      </div>

    </div>
  );
}
