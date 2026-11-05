import React from 'react';
import { ArrowRight, Sparkles, Award } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FAF6EE] pt-8 pb-16 lg:py-20 xl:py-24 border-b border-gold-500/20 scroll-mt-20 lg:scroll-mt-24">
      {/* Decorative luxury background glow */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-gold-200/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 rounded-full bg-maroon-700/5 blur-3xl pointer-events-none" />
      
      {/* Subtle traditional motif background pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#5F1B26 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Boutique Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-maroon-900/5 border border-gold-500/30 text-maroon-900 text-xs sm:text-sm font-medium tracking-wide">
              <Sparkles className="w-4 h-4 text-gold-600" />
              <span className="font-brand-telugu font-semibold">శ్రీ Collections</span>
              <span className="text-gold-700 font-serif">• Authentic Mangalagiri Heritage</span>
            </div>

            {/* Telugu Sub-header */}
            <div className="font-brand-telugu text-gold-700 text-base sm:text-lg font-medium tracking-wide">
              సాంప్రదాయం నిండిన సౌందర్యం &nbsp;•&nbsp; స్వచ్ఛమైన చేనేత కళ
            </div>

            {/* Exact Required Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-maroon-950 leading-[1.15] tracking-tight">
              Elegance Woven in <span className="italic font-normal text-gold-600 font-serif">Tradition</span>
            </h1>

            {/* Exact Required Description */}
            <p className="text-base sm:text-lg text-neutral-700 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Discover our exclusive Mangalagiri Saree Collection. Handcrafted by master artisans in Andhra Pradesh with pure zari borders, rich natural drapes, and timeless festive grace.
            </p>

            {/* CTAs (View-Only Boutique Browsing) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-maroon-800 hover:bg-maroon-900 text-white rounded-md text-sm font-semibold tracking-widest uppercase transition-all shadow-luxury hover:shadow-luxury-hover hover:-translate-y-0.5 group border border-gold-500/30"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 text-gold-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#jewellery"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent hover:bg-gold-50 text-maroon-900 rounded-md text-sm font-semibold tracking-wider transition-all border border-maroon-800/30 hover:border-maroon-800"
              >
                <span>View Jewellery Preview</span>
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="pt-8 border-t border-maroon-900/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-maroon-900">100%</div>
                <div className="text-[11px] sm:text-xs text-neutral-600 uppercase tracking-wider mt-0.5">Authentic Handloom</div>
              </div>
              <div className="border-x border-maroon-900/10 px-2">
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-maroon-900">₹549+</div>
                <div className="text-[11px] sm:text-xs text-neutral-600 uppercase tracking-wider mt-0.5">Boutique Catalogue</div>
              </div>
              <div>
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-maroon-900">Andhra</div>
                <div className="text-[11px] sm:text-xs text-neutral-600 uppercase tracking-wider mt-0.5">Mangalagiri Heritage</div>
              </div>
            </div>
          </div>

          {/* Right Column: Balanced Hero Image Composition */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Gold Ornamental Border Frame */}
              <div className="absolute -inset-2.5 rounded-2xl border-2 border-gold-500/40 rotate-1 pointer-events-none hidden sm:block" />
              <div className="absolute -inset-2.5 rounded-2xl border border-maroon-800/20 -rotate-1 pointer-events-none hidden sm:block" />

              {/* Main Showcase Saree Image with Controlled Aspect Ratio */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[3/4] bg-maroon-900 group">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
                  alt="శ్రీ Collections - Mangalagiri Handloom Saree"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-black/20" />

                {/* Floating Telugu Tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold-400/50 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span className="font-brand-telugu text-xs font-bold text-maroon-900">మంగళగిరి చేనేత పట్టు</span>
                  </div>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-maroon-950/90 backdrop-blur-md border border-gold-500/30 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-gold-300 font-semibold">Festive Signature</p>
                      <h4 className="font-editorial text-lg text-white font-medium">Mangalagiri Nizam Border Pattu</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-base font-bold text-gold-300 font-serif">₹849</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Floating Accent Card */}
              <div className="absolute -bottom-5 -left-5 hidden xl:flex items-center gap-3 p-3.5 bg-white rounded-lg shadow-luxury border border-gold-500/30 z-20">
                <div className="w-10 h-10 rounded-full bg-maroon-50 flex items-center justify-center text-maroon-800">
                  <Award className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-maroon-900">Direct From Artisans</p>
                  <p className="text-[10px] text-neutral-500">Mangalagiri, Andhra Pradesh</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
