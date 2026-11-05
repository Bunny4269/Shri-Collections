import React from 'react';
import { Phone, MapPin, Sparkles, PhoneCall, Info } from 'lucide-react';
import { BOUTIQUE_CONFIG, getPhoneTelLink, hasValidPhone } from '../config/boutique';

export default function ContactSection() {
  const telLink = getPhoneTelLink();
  const phone = BOUTIQUE_CONFIG.displayPhone || BOUTIQUE_CONFIG.phone;
  const address = BOUTIQUE_CONFIG.address;

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#FAF6EE] relative border-b border-maroon-900/10 scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-2">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>Personalized Boutique Care</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-maroon-950 tracking-tight">
            Contact శ్రీ Collections
          </h2>

          <div className="font-brand-telugu text-gold-700 text-sm mt-1.5 font-medium">
            మమ్మల్ని సంప్రదించండి &nbsp;•&nbsp; మంగళగిరి చీరల వివరాలు
          </div>

          <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
            Have a question about a specific weave in our catalogue, store visit timings, or bridal consultations? We are happy to assist you directly.
          </p>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Balanced 2-Card Contact & Store Location Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Direct Phone Support */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-maroon-900/10 shadow-sm hover:border-gold-500/40 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-maroon-900 text-gold-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block">
                  PHONE SUPPORT & ENQUIRIES
                </span>
                <a 
                  href={telLink}
                  className="font-editorial text-2xl sm:text-3xl font-bold text-maroon-950 hover:text-maroon-800 transition-colors block mt-1"
                >
                  {phone}
                </a>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Speak directly with the store owner for genuine handloom enquiries, custom color availability, bridal drape viewings, or pricing guidance.
              </p>
            </div>

            {hasValidPhone() && (
              <div className="pt-2">
                <a
                  href={telLink}
                  className="w-full py-3.5 px-6 bg-maroon-800 hover:bg-maroon-900 active:bg-maroon-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 group"
                >
                  <Phone className="w-4 h-4 text-gold-300 group-hover:scale-110 transition-transform" />
                  <span>Call Store Owner</span>
                </a>
              </div>
            )}
          </div>

          {/* Card 2: Store Location */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-maroon-900/10 shadow-sm hover:border-gold-500/40 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-maroon-900 text-gold-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block">
                  STORE LOCATION
                </span>
                <p className="font-editorial text-xl sm:text-2xl font-bold text-maroon-950 leading-snug mt-1 break-words">
                  {address}
                </p>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Visit our boutique showroom to experience our authentic Mangalagiri handloom collection, pure silk drapes, and 1-gram gold jewellery in person.
              </p>
            </div>

            <div className="pt-2">
              <div className="p-3 bg-cream-50 rounded-xl border border-gold-500/20 flex items-center gap-2 text-xs text-maroon-900 font-semibold">
                <Sparkles className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <span>Showroom Viewings & Personal Consultations</span>
              </div>
            </div>
          </div>

        </div>

        {/* Customer Guidance Notice */}
        <div className="max-w-5xl mx-auto mt-8">
          <div className="p-4 sm:p-5 bg-white rounded-xl border border-gold-500/30 shadow-sm flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-gold-100 text-gold-800 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Info className="w-4 h-4" />
            </div>
            <div className="flex-1 text-xs sm:text-sm text-neutral-700 leading-relaxed">
              <strong className="text-maroon-950 font-bold block mb-0.5">Customer Care & Orders</strong>
              {BOUTIQUE_CONFIG.customerGuidanceMessage}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
