import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function CategoriesSection({ onSelectCategory, activeCategory }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FDFBF7] relative border-b border-maroon-900/10">
      <div className="max-w-7xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Boutique Catalogue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-maroon-950 tracking-tight">
            Shop by Category
          </h2>
          <div className="font-brand-telugu text-gold-700 text-sm mt-1.5 font-medium">
            డిజైనర్ చీరలు &bull; మంగళగిరి పట్టు &bull; పట్టు చీరలు &bull; 1-గ్రామ్ ఆభరణాలు
          </div>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* 4 Required Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.name;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.name, cat.id)}
                className={`group cursor-pointer rounded-xl overflow-hidden bg-white border transition-all duration-300 relative flex flex-col ${
                  isSelected 
                    ? 'border-gold-500 shadow-luxury-hover ring-2 ring-gold-400/50 -translate-y-1' 
                    : 'border-maroon-900/10 hover:border-gold-400 hover:shadow-luxury hover:-translate-y-1'
                }`}
              >
                {/* Image Container with Fixed Aspect Ratio */}
                <div className="relative aspect-[4/5] overflow-hidden bg-maroon-950">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-maroon-950/20 to-transparent" />

                  {/* Arrow Indicator */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-maroon-950/70 backdrop-blur-sm text-gold-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gold-500/40">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Category Bottom Over-image text */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="font-brand-telugu text-gold-300 text-xs font-semibold">
                      {cat.teluguName}
                    </p>
                    <h3 className="font-editorial text-lg sm:text-xl font-bold text-white group-hover:text-gold-200 transition-colors">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="p-4 bg-cream-50 flex-1 flex flex-col justify-between border-t border-maroon-900/5">
                  <p className="text-xs text-neutral-600 leading-relaxed mb-3 line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-maroon-900/10 text-xs">
                    <span className="text-neutral-500 font-medium">{cat.count}</span>
                    <span className="text-maroon-800 font-semibold group-hover:text-gold-600 transition-colors inline-flex items-center gap-1">
                      Browse <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
