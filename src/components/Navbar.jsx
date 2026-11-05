import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Search, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar({ 
  onOpenSearch,
  activeSection = 'home',
  onNavigate,
  onSelectCategory
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const hamburgerButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Focus management & accessible focus restoration
  useEffect(() => {
    if (mobileMenuOpen) {
      wasOpenRef.current = true;
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else if (wasOpenRef.current) {
      wasOpenRef.current = false;
      hamburgerButtonRef.current?.focus();
    }
  }, [mobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleToggleMenu = () => {
    setMobileMenuOpen((prev) => {
      const next = !prev;
      if (!next && document.activeElement && document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      return next;
    });
  };

  const handleCloseMenu = () => {
    // Blur any focused element inside the drawer before hiding to avoid aria-hidden focus retention warnings
    if (document.activeElement && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', telugu: 'హోమ్', href: '#home', id: 'home' },
    { name: 'Sarees', telugu: 'చీరలు', href: '#sarees', id: 'sarees' },
    { name: 'Jewellery', telugu: 'ఆభరణాలు', href: '#jewellery', id: 'jewellery' },
    { name: 'About Us', telugu: 'మా గురించి', href: '#about', id: 'about' },
    { name: 'Contact Us', telugu: 'సంప్రదించండి', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    handleCloseMenu();
    if (onNavigate) {
      onNavigate(link.id);
    } else {
      const element = document.getElementById(link.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCategoryLinkClick = (e, categoryName, categoryId) => {
    e.preventDefault();
    handleCloseMenu();
    if (onSelectCategory) {
      onSelectCategory(categoryName, categoryId);
    } else {
      handleLinkClick(e, { id: categoryId === 'jewellery' ? 'jewellery' : 'sarees', href: categoryId === 'jewellery' ? '#jewellery' : '#sarees' });
    }
  };

  // Mobile Slide-Over Drawer (Portal rendered directly to document.body to avoid stacking context & clipping issues)
  const mobileDrawer = mounted && mobileMenuOpen ? (
    <div 
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      {/* Solid backdrop overlay: catches all outside clicks */}
      <div 
        className="fixed inset-0 bg-maroon-950/80 backdrop-blur-none transition-opacity duration-200"
        onClick={handleCloseMenu}
        aria-hidden="true"
      />

      {/* Drawer Panel: Solid opaque background, bounded width, preventing horizontal overflow */}
      <div 
        className="fixed inset-y-0 left-0 w-[82vw] max-w-xs sm:max-w-sm bg-[#FAF6EE] shadow-2xl flex flex-col border-r-2 border-gold-500/40 transform transition-transform duration-300 ease-out translate-x-0"
      >
        {/* Drawer Header: Solid, clean maroon header with equal vertical alignment */}
        <div className="h-16 px-4 bg-maroon-900 border-b border-gold-500/30 flex items-center justify-between text-cream-100 flex-shrink-0">
          {/* Brand Title */}
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <span className="font-brand-telugu text-2xl font-bold text-gold-400 leading-none flex-shrink-0">
              శ్రీ
            </span>
            <div className="flex flex-col min-w-0">
              <span className="font-cinzel text-base sm:text-lg font-bold tracking-[0.16em] text-white uppercase leading-none truncate">
                Collections
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-gold-300/90 font-medium mt-1 truncate">
                1-Gram Gold & Sarees
              </span>
            </div>
          </div>

          {/* Close (X) Icon Button: Fixed 40x40px, vertically centered, separate distinct hit area */}
          <button 
            ref={closeButtonRef}
            type="button"
            onClick={handleCloseMenu}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-cream-200 hover:text-white hover:bg-maroon-800 active:bg-maroon-950 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 flex-shrink-0 ml-1 cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Nav Links Container - Scrollable without overlapping header */}
        <div className="flex-1 overflow-y-auto py-5 px-4 space-y-1.5 overscroll-contain">
          <p className="px-3 text-[10px] uppercase font-bold tracking-widest text-maroon-900/60 mb-2">
            Navigation
          </p>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={`flex items-center justify-between px-3 py-3 rounded-lg transition-colors cursor-pointer ${
                activeSection === link.id 
                  ? 'bg-maroon-900/10 text-maroon-950 font-semibold' 
                  : 'text-neutral-800 hover:bg-maroon-800/10 hover:text-maroon-900'
              }`}
            >
              <div className="flex flex-col">
                <span className="font-medium text-base leading-snug">{link.name}</span>
                <span className="font-brand-telugu text-xs text-gold-700 leading-none mt-0.5">{link.telugu}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-maroon-800/40" />
            </a>
          ))}

          {/* Quick Saree Category Links */}
          <div className="pt-5 mt-5 border-t border-maroon-900/10 space-y-1">
            <p className="px-3 text-[10px] uppercase font-bold tracking-widest text-maroon-900/60 mb-1">
              Featured Categories
            </p>
            <a 
              href="#sarees" 
              onClick={(e) => handleCategoryLinkClick(e, 'Designer Sarees', 'designer-sarees')}
              className="block px-3 py-2 text-sm text-neutral-700 hover:text-maroon-900 rounded-md hover:bg-maroon-50 cursor-pointer"
            >
              • Designer Sarees (డిజైనర్)
            </a>
            <a 
              href="#sarees" 
              onClick={(e) => handleCategoryLinkClick(e, 'Mangalagiri Sarees', 'mangalagiri-sarees')}
              className="block px-3 py-2 text-sm text-neutral-700 hover:text-maroon-900 rounded-md hover:bg-maroon-50 cursor-pointer"
            >
              • Mangalagiri Sarees (మంగళగిరి)
            </a>
            <a 
              href="#sarees" 
              onClick={(e) => handleCategoryLinkClick(e, 'Silk Sarees', 'silk-sarees')}
              className="block px-3 py-2 text-sm text-neutral-700 hover:text-maroon-900 rounded-md hover:bg-maroon-50 cursor-pointer"
            >
              • Silk Sarees (పట్టు చీరలు)
            </a>
            <a 
              href="#jewellery" 
              onClick={(e) => handleCategoryLinkClick(e, '1-Gram Gold Jewellery', 'jewellery')}
              className="block px-3 py-2 text-sm text-neutral-700 hover:text-maroon-900 rounded-md hover:bg-maroon-50 cursor-pointer"
            >
              • 1-Gram Gold Jewellery (ఆభరణాలు)
            </a>
          </div>
        </div>

        {/* Drawer Footer: Clean branding and location */}
        <div className="p-4 bg-maroon-950 text-cream-200 border-t border-gold-500/20 text-xs text-center space-y-1 flex-shrink-0">
          <p className="font-brand-telugu text-gold-300 font-semibold">ప్రత్యేకమైన మంగళగిరి చీరల బోటిక్</p>
          <p className="text-[11px] text-cream-300/70">View-Only Catalogue • Mangalagiri, AP</p>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-luxury py-2.5 sm:py-3 border-b border-gold-500/20' 
          : 'bg-[#FDFBF7] py-3 sm:py-4 border-b border-maroon-900/10'
      }`}>
        <div className="max-w-7xl 2xl:max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[44px]">
            
            {/* Top-Left: Mobile Hamburger Menu Button (Fixed 40x40px hitbox, independent boundaries) */}
            <div className="flex items-center lg:hidden w-10 justify-start flex-shrink-0 z-10">
              <button
                ref={hamburgerButtonRef}
                type="button"
                onClick={handleToggleMenu}
                className="w-10 h-10 inline-flex items-center justify-center text-maroon-900 hover:text-maroon-700 hover:bg-maroon-900/10 active:bg-maroon-900/15 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-maroon-800 cursor-pointer"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Logo / Brand Name - Exactly Centered on Mobile, Left-aligned on Desktop, bounded hit area */}
            <div className="flex-1 flex flex-col items-center justify-center text-center lg:flex-none lg:items-start lg:text-left px-2 min-w-0">
              <a 
                href="#home" 
                onClick={(e) => handleLinkClick(e, { id: 'home', href: '#home' })}
                className="inline-flex flex-col items-center lg:items-start group cursor-pointer"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-brand-telugu text-2xl sm:text-3xl lg:text-4xl font-bold text-maroon-800 tracking-tight leading-none group-hover:text-maroon-700 transition-colors">
                    శ్రీ
                  </span>
                  <span className="font-cinzel text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.16em] sm:tracking-[0.2em] text-maroon-900 uppercase group-hover:text-gold-600 transition-colors">
                    Collections
                  </span>
                </div>
                <span className="text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gold-600 font-semibold mt-0.5 whitespace-nowrap">
                  1-Gram Gold & Sarees
                </span>
              </a>
            </div>

            {/* Desktop Navigation Links - Centered & Spacious */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`relative text-sm tracking-wider font-medium transition-colors py-1 group cursor-pointer ${
                    activeSection === link.id ? 'text-maroon-800 font-semibold' : 'text-neutral-700 hover:text-maroon-800'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-maroon-800 to-gold-500 transition-all duration-300 ${
                    activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              ))}
            </nav>

            {/* Top-Right: Mobile Search Button (Symmetrical 40x40px hitbox, independent boundaries) */}
            <div className="flex items-center lg:hidden w-10 justify-end flex-shrink-0 z-10">
              <button
                type="button"
                onClick={onOpenSearch}
                className="w-10 h-10 inline-flex items-center justify-center text-maroon-900 hover:text-maroon-700 hover:bg-maroon-900/10 active:bg-maroon-900/15 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-maroon-800 cursor-pointer"
                aria-label="Search catalogue"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Desktop Right Action: Search Button */}
            <div className="hidden lg:flex items-center">
              <button
                type="button"
                onClick={onOpenSearch}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full text-xs tracking-wider text-neutral-700 hover:text-maroon-900 hover:bg-cream-200/60 border border-neutral-300 hover:border-gold-500/50 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-maroon-800 cursor-pointer"
                aria-label="Search sarees"
              >
                <Search className="w-4 h-4 text-maroon-800" />
                <span>Search Saree Catalogue...</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Portal-rendered mobile navigation drawer attached directly to document.body */}
      {mobileDrawer && createPortal(mobileDrawer, document.body)}
    </>
  );
}
