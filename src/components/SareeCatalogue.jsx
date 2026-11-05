import React, { useState, useMemo } from 'react';
import { SAREE_PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { Sparkles, SlidersHorizontal, Search, RefreshCw, Phone } from 'lucide-react';
import { BOUTIQUE_CONFIG, getPhoneTelLink, hasValidPhone } from '../config/boutique';

export default function SareeCatalogue({ 
  onViewDetails, 
  activeFilter = 'All',
  setActiveFilter
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name'); // Default: Alphabetical (A-Z)

  // Alphabetical Order (A-Z): Designer Sarees -> Mangalagiri Sarees -> Silk Sarees
  const filterTabs = [
    { label: 'All Sarees', count: 9 },
    { label: 'Designer Sarees', count: 3 },
    { label: 'Mangalagiri Sarees', count: 3 },
    { label: 'Silk Sarees', count: 3 },
  ];

  const filteredProducts = useMemo(() => {
    return SAREE_PRODUCTS.filter((item) => {
      // Category tab filter
      const matchesCategory = 
        activeFilter === 'All' || 
        item.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
        (activeFilter === 'All Sarees');

      // Search keyword filter
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.teluguName.includes(searchQuery) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      // Default: case-insensitive alphabetical sorting (A-Z)
      return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
    });
  }, [activeFilter, searchQuery, sortBy]);

  return (
    <section id="sarees" className="py-16 sm:py-20 lg:py-24 bg-[#FAF6EE] relative border-b border-maroon-900/10 scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon-800/5 border border-gold-500/30 text-maroon-900 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>శ్రీ Collections Exclusive Catalogue</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-maroon-950 tracking-tight">
            Handcrafted Saree Collection
          </h2>

          <div className="font-brand-telugu text-gold-700 text-base font-semibold mt-2">
            డిజైనర్ చీరలు &bull; మంగళగిరి పట్టు &bull; పట్టు చీరలు
          </div>

          <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Browse our curated catalogue of nine signature weaves, handpicked directly from Andhra Pradesh handloom clusters. Woven with pure tradition and authentic zari borders.
          </p>
          
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-5" />
        </div>

        {/* Filter and Search Controls Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-xl border border-maroon-900/10 shadow-sm">
          
          {/* Category Filter Tabs - Sorted Alphabetically */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {filterTabs.map((tab) => {
              const isActive = (activeFilter === tab.label) || (activeFilter === 'All' && tab.label === 'All Sarees');
              return (
                <button
                  key={tab.label}
                  onClick={() => setActiveFilter(tab.label === 'All Sarees' ? 'All' : tab.label)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-maroon-800 text-white shadow-sm ring-1 ring-gold-400'
                      : 'bg-cream-100 text-neutral-700 hover:bg-gold-50 hover:text-maroon-900'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-gold-500 text-maroon-950 font-bold' : 'bg-neutral-200 text-neutral-600'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-60">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search saree name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-cream-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-maroon-800 focus:border-maroon-800"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Select */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs bg-cream-50 border border-neutral-300 rounded-lg px-3 py-2 pr-7 text-neutral-700 focus:outline-none focus:ring-1 focus:ring-maroon-800 cursor-pointer appearance-none"
              >
                <option value="name">Alphabetical (A–Z)</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-neutral-500 mb-6 px-1">
          <span>Displaying <strong className="text-maroon-900 font-semibold">{filteredProducts.length}</strong> authentic handcrafted sarees (A–Z)</span>
          <span className="text-[11px] text-gold-700 font-medium">Boutique Catalogue</span>
        </div>

        {/* Product Cards Grid: 9 Sarees (Desktop 3 Columns, A-Z) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-neutral-200 p-8 max-w-md mx-auto">
            <RefreshCw className="w-8 h-8 text-neutral-400 mx-auto mb-3" />
            <h3 className="font-editorial text-lg font-bold text-neutral-800 mb-1">No Sarees Found</h3>
            <p className="text-xs text-neutral-500 mb-4">No weaves matched your filter or search criteria.</p>
            <button
              onClick={() => {
                setActiveFilter('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-maroon-800 text-white rounded-lg text-xs font-semibold hover:bg-maroon-900 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Saree Boutique Showroom Inquiry Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-white border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 font-brand-telugu font-bold text-xl flex-shrink-0">
              శ్రీ
            </div>
            <div>
              <h4 className="font-editorial text-lg font-bold text-maroon-900">Visiting Our Mangalagiri Boutique?</h4>
              <p className="text-xs text-neutral-600 mt-0.5">Contact us in advance for personalized saree viewings, wedding consultations, or custom drape previews.</p>
            </div>
          </div>
          {hasValidPhone() && (
            <a
              href={getPhoneTelLink()}
              className="px-6 py-3 bg-maroon-800 hover:bg-maroon-900 text-white text-xs font-bold rounded-lg tracking-wider uppercase transition-colors shadow-sm whitespace-nowrap flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-gold-300" />
              <span>Call Store Owner</span>
            </a>
          )}
        </div>

      </div>
    </section>
  );
}
