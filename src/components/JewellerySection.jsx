import React from 'react';
import { JEWELLERY_CONFIG } from '../data/jewellery';
import { Sparkles, Gem, Clock } from 'lucide-react';

export default function JewellerySection() {
  return (
    <section id="jewellery" className="py-16 sm:py-20 lg:py-24 bg-[#FDFBF7] relative border-b border-maroon-900/10 scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-800 text-xs font-semibold uppercase tracking-widest mb-3">
            <Gem className="w-3.5 h-3.5 text-gold-600" />
            <span>{JEWELLERY_CONFIG.statusBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-maroon-950 tracking-tight">
            {JEWELLERY_CONFIG.sectionTitle}
          </h2>

          <div className="font-brand-telugu text-gold-700 text-base font-semibold mt-2">
            {JEWELLERY_CONFIG.teluguSubtitle}
          </div>

          <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
            {JEWELLERY_CONFIG.description}
          </p>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-5" />
        </div>

        {/* 3 Required Placeholder Categories: Short Necklaces, Gold-Plated Necklaces, Earrings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {JEWELLERY_CONFIG.categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-xl overflow-hidden border border-maroon-900/10 hover:border-gold-500/50 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Elegant Placeholder */}
              <div className="relative aspect-[4/3] overflow-hidden bg-maroon-950">
                <img
                  src={cat.placeholderImage}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-black/20" />

                {/* Status Badge */}
                <div className="absolute top-3 right-3 bg-maroon-900/90 backdrop-blur-sm text-gold-300 border border-gold-500/30 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full">
                  {cat.status}
                </div>

                {/* Over-image category title */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="font-brand-telugu text-gold-300 text-xs font-medium">
                    {cat.teluguName}
                  </p>
                  <h3 className="font-editorial text-xl font-bold text-white group-hover:text-gold-200 transition-colors">
                    {cat.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 bg-cream-50/50">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-maroon-800 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                    <span>{cat.highlight}</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {cat.craftNote}
                  </p>
                </div>

                <div className="pt-3 border-t border-maroon-900/10 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-neutral-500 font-medium italic">
                    Catalogue preview
                  </span>
                  <span className="text-gold-700 font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Phase 2</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Phase 2 Curatorial Note */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-gold-500/30 text-center max-w-2xl mx-auto shadow-sm">
          <Sparkles className="w-5 h-5 text-gold-600 mx-auto mb-2" />
          <h4 className="font-editorial text-lg font-bold text-maroon-950">
            Exclusive 1-Gram Gold Collection Coming in Phase 2
          </h4>
          <p className="text-xs text-neutral-600 mt-1 max-w-lg mx-auto">
            Our master jewel artisans are currently curating handpicked temple designs to complement our signature Mangalagiri weaves. Complete details, authentic photographs, and prices will be unveiled in Phase 2.
          </p>
        </div>

      </div>
    </section>
  );
}
