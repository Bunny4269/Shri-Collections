import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoriesSection from './components/CategoriesSection';
import SareeCatalogue from './components/SareeCatalogue';
import JewellerySection from './components/JewellerySection';
import WhyChooseUs from './components/WhyChooseUs';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductDetailsModal from './components/ProductDetailsModal';
import SearchModal from './components/SearchModal';

export default function App() {
  // Search modal state
  const [searchOpen, setSearchOpen] = useState(false);

  // Active product details modal for view-only browsing
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter state for saree catalogue
  const [sareeFilter, setSareeFilter] = useState('All');

  // Active section for nav highlighting
  const [activeSection, setActiveSection] = useState('home');

  // Category card click handler
  const handleSelectCategory = (categoryName, categoryId) => {
    if (categoryId === 'jewellery') {
      const element = document.getElementById('jewellery');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection('jewellery');
      }
    } else {
      setSareeFilter(categoryName);
      const element = document.getElementById('sarees');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection('sarees');
      }
    }
  };

  const handleExploreHero = () => {
    setSareeFilter('All');
    const element = document.getElementById('sarees');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream-100 flex flex-col font-sans selection:bg-maroon-800 selection:text-gold-300">
      
      {/* 1. Navigation Bar (Starts directly at the top) */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategory}
      />

      <main className="flex-1">
        {/* 3. Large Hero Banner */}
        <Hero onExploreClick={handleExploreHero} />

        {/* 4. Shop by Category */}
        <CategoriesSection
          activeCategory={sareeFilter}
          onSelectCategory={handleSelectCategory}
        />

        {/* 5. Featured Saree Collection (All 9 products with exact prices) */}
        <SareeCatalogue
          activeFilter={sareeFilter}
          setActiveFilter={setSareeFilter}
          onViewDetails={(product) => setSelectedProduct(product)}
        />

        {/* 6. Exclusive Jewellery Section (Placeholder Categories) */}
        <JewellerySection />

        {/* 7. Why Choose Us Section */}
        <WhyChooseUs />

        {/* About Boutique & Heritage */}
        <AboutSection />

        {/* Contact Us Section */}
        <ContactSection />
      </main>

      {/* 8. Footer with Configurable Contact & Social Links */}
      <Footer onNavigate={handleNavigate} />

      {/* Product Details Modal (View-Only Gallery & Details) */}
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Live Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />

    </div>
  );
}
