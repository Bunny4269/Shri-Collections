import React, { useState } from 'react';
import { Phone, MapPin, MessageSquare, Send, Check } from 'lucide-react';
import { BOUTIQUE_CONFIG, getPhoneTelLink } from '../config/boutique';

export default function ContactSection({ onMessageSent }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    sareeInterest: 'General Inquiry'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    if (onMessageSent) {
      onMessageSent(`Thank you ${formData.name}! Your message has been received. Our boutique stylist will contact you shortly.`);
    }
  };

  const contactConfig = {
    phone: BOUTIQUE_CONFIG.displayPhone || BOUTIQUE_CONFIG.phone,
    address: BOUTIQUE_CONFIG.address
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#FAF6EE] relative border-b border-maroon-900/10 scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-2">
            <MessageSquare className="w-4 h-4" />
            <span>Personalized Boutique Care</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-maroon-950 tracking-tight">
            Contact శ్రీ Collections
          </h2>

          <div className="font-brand-telugu text-gold-700 text-sm mt-1.5 font-medium">
            మమ్మల్ని సంప్రదించండి &nbsp;•&nbsp; మంగళగిరి చీరల వివరాలు
          </div>

          <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
            Have a question about a specific weave in our catalogue, store visit timings, or bridal consultations? We are happy to assist you.
          </p>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Info Column: Direct Phone Support & Store Location */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-maroon-900/10 shadow-sm space-y-6">
              
              <div className="space-y-6 text-xs sm:text-sm">
                
                {/* 1. Phone Support */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-maroon-50 text-maroon-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block">Phone Support</span>
                    <a href={`tel:${contactConfig.phone.replace(/\s+/g, '')}`} className="font-semibold text-neutral-900 hover:text-maroon-800 text-base sm:text-lg transition-colors">
                      {contactConfig.phone}
                    </a>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">Direct phone enquiries & consultations</span>
                  </div>
                </div>

                <div className="border-t border-maroon-900/10 pt-5">
                  {/* 2. Store Location */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-maroon-50 text-maroon-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block">STORE LOCATION</span>
                      <p className="font-semibold text-neutral-900 text-sm sm:text-base leading-snug break-words mt-0.5">
                        {contactConfig.address}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-maroon-900/10 shadow-sm">
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-maroon-950 mb-1">
                Catalogue Inquiry Form
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                Tell us which saree in our collection you are interested in learning more about.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-cream-50 rounded-xl border border-gold-400/50 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-editorial text-lg font-bold text-maroon-950">Inquiry Received</h4>
                  <p className="text-xs text-neutral-600 max-w-sm mx-auto">
                    Thank you! Our dedicated boutique consultant will contact you regarding your inquiry.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', message: '', sareeInterest: 'General Inquiry' });
                    }}
                    className="mt-2 text-xs text-maroon-800 font-bold underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Lakshmi Devi"
                        className="w-full px-3.5 py-2.5 text-xs bg-cream-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-maroon-800 focus:border-maroon-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 94920 54480"
                        className="w-full px-3.5 py-2.5 text-xs bg-cream-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-maroon-800 focus:border-maroon-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">Email (Optional)</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. yourname@example.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-cream-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-maroon-800 focus:border-maroon-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">Saree of Interest</label>
                      <select
                        value={formData.sareeInterest}
                        onChange={(e) => setFormData({ ...formData, sareeInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-cream-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-maroon-800 cursor-pointer"
                      >
                        <option value="General Inquiry">General Boutique Inquiry</option>
                        <option value="Chandra Pattu (₹999)">Chandra Pattu (₹999)</option>
                        <option value="Lily Silk (₹849)">Lily Silk (₹849)</option>
                        <option value="Magic Silk (₹999)">Magic Silk (₹999)</option>
                        <option value="Menka (₹549)">Menka (₹549)</option>
                        <option value="Pasta Crush (₹899)">Pasta Crush (₹899)</option>
                        <option value="Sukriti (₹999)">Sukriti (₹999)</option>
                        <option value="Timroo (₹949)">Timroo (₹949)</option>
                        <option value="Vastram Silk (₹849)">Vastram Silk (₹849)</option>
                        <option value="Wamika (₹849)">Wamika (₹849)</option>
                        <option value="1-Gram Gold Jewellery">1-Gram Gold Jewellery Preview</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Message or Question</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ask about drape details, store viewing appointments, or wedding collections..."
                      className="w-full px-3.5 py-2.5 text-xs bg-cream-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-maroon-800 focus:border-maroon-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-maroon-800 hover:bg-maroon-900 text-white rounded-lg text-xs font-bold tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-gold-300" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
