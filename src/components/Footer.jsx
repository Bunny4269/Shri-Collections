import React from 'react';
import { Phone, MapPin, ArrowUp } from 'lucide-react';
import { BOUTIQUE_CONFIG, getPhoneTelLink, hasValidPhone } from '../config/boutique';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-maroon-950 text-cream-100 border-t-2 border-gold-500/40 relative">
      
      {/* Decorative top gold gradient accent line */}
      <div className="h-1 bg-gradient-to-r from-maroon-900 via-gold-400 to-maroon-900" />

      <div className="max-w-7xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Column (Exact Name: "శ్రీ Collections") */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex flex-col items-start">
              <div className="flex items-center gap-2">
                <span className="font-brand-telugu text-4xl font-bold text-gold-400 leading-none">
                  శ్రీ
                </span>
                <span className="font-cinzel text-2xl font-bold tracking-[0.2em] text-white uppercase">
                  Collections
                </span>
              </div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-gold-300 font-semibold mt-1">
                1-Gram Gold & Sarees
              </span>
            </div>

            <p className="font-brand-telugu text-gold-300/90 text-sm font-medium">
              మంగళగిరి చేనేత పట్టు &bull; సంప్రదాయ ఆభరణాలు
            </p>

            <p className="text-xs text-cream-200/80 leading-relaxed max-w-sm">
              Dedicated to celebrating the authentic handloom heritage of Mangalagiri pit looms. Pure silk drapes, genuine handloom borders, and handcrafted excellence.
            </p>

            {/* Social & Contact Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold-500 hover:text-maroon-950 transition-colors flex items-center justify-center text-cream-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {hasValidPhone() && (
                <a
                  href={getPhoneTelLink()}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold-500 hover:text-maroon-950 transition-colors flex items-center justify-center text-cream-200"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              )}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold-500 hover:text-maroon-950 transition-colors flex items-center justify-center text-cream-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold-500 hover:text-maroon-950 transition-colors flex items-center justify-center text-cream-200"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gold-400 font-cinzel">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-cream-300">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="hover:text-gold-300 transition-colors">
                  Home (హోమ్)
                </a>
              </li>
              <li>
                <a href="#sarees" onClick={(e) => { e.preventDefault(); onNavigate('sarees'); }} className="hover:text-gold-300 transition-colors">
                  Saree Catalogue (9 Weaves)
                </a>
              </li>
              <li>
                <a href="#jewellery" onClick={(e) => { e.preventDefault(); onNavigate('jewellery'); }} className="hover:text-gold-300 transition-colors">
                  Jewellery Preview
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="hover:text-gold-300 transition-colors">
                  Our Story & Heritage
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="hover:text-gold-300 transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Saree Catalogue List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gold-400 font-cinzel">
              Catalogue Overview
            </h4>
            <ul className="space-y-2 text-xs text-cream-300">
              <li className="flex justify-between items-center pr-2">
                <span>Chandra Pattu</span>
                <span className="text-gold-300 font-mono">₹999</span>
              </li>
              <li className="flex justify-between items-center pr-2">
                <span>Lily Silk</span>
                <span className="text-gold-300 font-mono">₹849</span>
              </li>
              <li className="flex justify-between items-center pr-2">
                <span>Magic Silk</span>
                <span className="text-gold-300 font-mono">₹999</span>
              </li>
              <li className="flex justify-between items-center pr-2">
                <span>Menka</span>
                <span className="text-gold-300 font-mono">₹549</span>
              </li>
              <li className="flex justify-between items-center pr-2">
                <span>Pasta Crush</span>
                <span className="text-gold-300 font-mono">₹899</span>
              </li>
              <li className="flex justify-between items-center pr-2">
                <span>Sukriti</span>
                <span className="text-gold-300 font-mono">₹999</span>
              </li>
              <li className="flex justify-between items-center pr-2">
                <span>Timroo</span>
                <span className="text-gold-300 font-mono">₹949</span>
              </li>
              <li className="flex justify-between items-center pr-2">
                <span>Vastram Silk</span>
                <span className="text-gold-300 font-mono">₹849</span>
              </li>
              <li className="flex justify-between items-center pr-2">
                <span>Wamika</span>
                <span className="text-gold-300 font-mono">₹849</span>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Store Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gold-400 font-cinzel">
              Contact & Store Location
            </h4>
            <div className="text-xs text-cream-300 space-y-2.5">
              {hasValidPhone() && (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <a href={getPhoneTelLink()} className="hover:text-gold-300 transition-colors font-medium">
                    {BOUTIQUE_CONFIG.displayPhone || BOUTIQUE_CONFIG.phone}
                  </a>
                </div>
              )}
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="leading-snug break-words">
                  {BOUTIQUE_CONFIG.address}
                </span>
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-gold-500 hover:text-maroon-950 text-xs font-semibold transition-colors text-cream-200"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-cream-400">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-gold-300">శ్రీ Collections</strong>. All rights reserved.
          </div>
          <div className="font-brand-telugu text-gold-400/80">
            మంగళగిరి చేనేత పట్టు చీరల బోటిక్ కాటలాగ్
          </div>
          <div className="flex items-center gap-4">
            <span>View-Only Boutique Catalogue</span>
            <span>&bull;</span>
            <span>Mangalagiri, Andhra Pradesh</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
