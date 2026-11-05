import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { SAREE_PRODUCTS } from '../data/products';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('');
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle focus, scroll lock, and cleanup
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
      setQuery('');
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
        previousFocusRef.current = null;
      }
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const results = query.trim() === '' 
    ? [] 
    : SAREE_PRODUCTS.filter((item) => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.teluguName.includes(query) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
      );

  const modalContent = (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Search Saree Catalogue"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-maroon-950/80 transition-opacity duration-200" 
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="min-h-full flex items-start justify-center pt-16 sm:pt-20 p-3 sm:p-4">
        <div className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gold-500/40 z-10 animate-in fade-in zoom-in-95 duration-150">
          
          {/* Search Header */}
          <div className="p-3.5 sm:p-5 border-b border-neutral-200 flex items-center gap-2.5 sm:gap-3 bg-[#FAF6EE]">
            <Search className="w-5 h-5 text-maroon-800 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search saree by name (e.g. Vastram Silk, Sukriti, చంద్ర పట్టు)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
            />
            {query && (
              <button 
                type="button"
                onClick={() => {
                  setQuery('');
                  inputRef.current?.focus();
                }}
                className="text-neutral-400 hover:text-neutral-700 text-xs px-2 py-1 rounded hover:bg-neutral-200/60 transition-colors"
                aria-label="Clear search input"
              >
                Clear
              </button>
            )}
            <button 
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-500 hover:text-maroon-900 hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-maroon-800"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Suggestions if empty */}
          {query.trim() === '' ? (
            <div className="p-5 sm:p-6 text-xs text-neutral-500 space-y-4">
              <p className="font-semibold text-neutral-700 uppercase tracking-wider text-[10px]">
                Popular Saree Searches:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Chandra Pattu', 'Lily Silk', 'Magic Silk', 'Menka', 'Pasta Crush', 'Sukriti', 'Timroo', 'Vastram Silk', 'Wamika'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 rounded-full bg-cream-100 hover:bg-gold-100 text-maroon-900 border border-neutral-200 hover:border-gold-400 transition-colors cursor-pointer text-xs font-medium"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-h-96 overflow-y-auto p-2.5 sm:p-3 divide-y divide-neutral-100">
              {results.length > 0 ? (
                results.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="w-full text-left p-3 hover:bg-cream-50 rounded-xl flex items-center justify-between cursor-pointer transition-colors group focus:outline-none focus:bg-cream-50 focus:ring-1 focus:ring-gold-500"
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <img
                        src={product.representativeImage || product.images?.[0] || product.variations?.[0]?.image}
                        alt={product.name}
                        className="w-12 h-14 object-cover object-top rounded-md border border-neutral-200 flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-sm font-semibold text-neutral-900 group-hover:text-maroon-800 truncate">
                            {product.name}
                          </h4>
                          <span className="font-brand-telugu text-xs text-gold-700">
                            {product.teluguName}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 mt-0.5 truncate">
                          {product.category}
                        </p>
                      </div>
                    </div>

                    <div className="text-right flex items-center gap-3 flex-shrink-0">
                      <span className="text-sm font-serif font-bold text-maroon-900">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-maroon-800 group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))
              ) : (
                <div className="p-8 text-center text-xs text-neutral-500">
                  No sarees matched "{query}". Try checking the name spelling or browse our 9 featured weaves.
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
