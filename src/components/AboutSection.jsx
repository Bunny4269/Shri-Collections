import React from 'react';
import { Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#FDFBF7] relative border-b border-maroon-900/10 scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Left Visual Collage */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-500/30 aspect-[4/5] bg-maroon-950">
                <img
                  src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
                  alt="Mangalagiri Weaving Craftsmanship"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Inset Badge */}
              <div className="absolute -bottom-5 -right-5 hidden sm:block p-4 sm:p-5 rounded-xl bg-maroon-900 text-white shadow-luxury border border-gold-400/40 max-w-xs">
                <div className="flex items-center gap-2 text-gold-300 text-xs font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Mangalagiri, Andhra Pradesh</span>
                </div>
                <p className="font-brand-telugu text-sm font-bold text-cream-100">
                  శ్రీ చేనేత కళా వైభవం
                </p>
                <p className="text-[11px] text-cream-300 mt-1">
                  Centuries of handloom heritage, woven stitch by stitch for your celebrations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon-800/5 border border-gold-500/30 text-maroon-900 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Our Boutique Story</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-maroon-950 tracking-tight leading-tight">
              Rooted in Mangalagiri Heritage, <br />
              <span className="italic font-normal text-gold-600 font-serif">Curated for the Modern Woman</span>
            </h2>

            <div className="font-brand-telugu text-gold-700 text-base font-semibold">
              శ్రీ కలెక్షన్స్ – స్వచ్ఛమైన చేనేత కళకు నిలయం
            </div>

            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              Founded with deep reverence for the sacred weaving traditions of Andhra Pradesh, <strong className="text-maroon-900 font-bold">శ్రీ Collections</strong> bridges traditional artisan pit looms with contemporary aesthetics. 
            </p>

            <p className="text-neutral-600 text-sm leading-relaxed">
              Mangalagiri sarees are celebrated worldwide for their distinctive micro-ribbed textures, durable sheen, and the legendary Nizam golden zari borders. Our curated catalogue showcases signature weaves such as Vastram Silk, Pasta Crush, Sukriti, and Chandra Pattu, each inspected for flawless weaving tension and drape elegance.
            </p>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              {[
                "100% Genuine Handloom Certitude",
                "Authentic Nizam & Temple Zari",
                "Direct Weaver Heritage Support",
                "Personal In-Boutique Consultations"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Founder Note */}
            <div className="p-4 rounded-xl bg-cream-50 border-l-4 border-gold-500 text-xs text-neutral-700 italic">
              "We believe every saree tells a generational story. When you view or wear a drape from శ్రీ Collections, you celebrate the living heartbeat of our handloom masters."
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
