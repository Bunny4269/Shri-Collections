import React from 'react';
import { Award, HeartHandshake, Sparkles, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Award,
      title: "Authentic Handloom Weaves",
      telugu: "నిజమైన మంగళగిరి నేత",
      desc: "Every Mangalagiri saree is woven on traditional pit looms by heritage weaver families in Guntur, Andhra Pradesh. Pure craftsmanship with no factory imitations."
    },
    {
      icon: HeartHandshake,
      title: "Artisan Direct Heritage",
      telugu: "చేనేత కార్మికుల నుండి నేరుగా",
      desc: "By working closely with artisan clusters, our boutique catalogue celebrates authentic handloom values starting from ₹549 with genuine weaver provenance."
    },
    {
      icon: Sparkles,
      title: "Tested Zari & Color Fastness",
      telugu: "నాణ్యమైన జరీ మరియు రంగులు",
      desc: "Our sarees undergo tactile inspections for border symmetry, pallu finishing, rich zari brightness, and skin-friendly softness."
    },
    {
      icon: ShieldCheck,
      title: "Boutique Quality Assurance",
      telugu: "బోటిక్ నాణ్యతా ప్రమాణాలు",
      desc: "Every piece displayed in our catalogue represents verified South Indian handloom tradition, woven to preserve generational beauty."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF6EE] relative border-b border-maroon-900/10">
      <div className="max-w-7xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>The శ్రీ Collections Promise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-maroon-950 tracking-tight">
            Why Choose ಶ್ರೀ Collections
          </h2>

          <div className="font-brand-telugu text-gold-700 text-sm mt-1.5 font-medium">
            మంగళగిరి వారసత్వ కళ &nbsp;•&nbsp; విశ్వసనీయమైన బోటిక్ సేవలు
          </div>

          <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
            We are an authentic Indian boutique dedicated to preserving and celebrating Andhra Pradesh's greatest handloom weaving tradition.
          </p>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* 4 Pillars Grid (Desktop Responsive Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-xl border border-maroon-900/10 hover:border-gold-500/60 transition-all duration-300 hover:shadow-luxury hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-maroon-50 border border-maroon-900/10 flex items-center justify-center text-maroon-800 group-hover:bg-maroon-800 group-hover:text-gold-300 transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="font-brand-telugu text-xs font-semibold text-gold-700 block mb-1">
                    {item.telugu}
                  </span>

                  <h3 className="font-editorial text-lg font-bold text-neutral-900 mb-2 group-hover:text-maroon-900 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-maroon-900/5 text-[11px] font-semibold text-maroon-800 flex items-center gap-1 group-hover:text-gold-600">
                  <span>Guaranteed Authenticity</span>
                  <span>✓</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
