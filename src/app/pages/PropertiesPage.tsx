import { useState, useMemo } from 'react';
import { PropertyCard } from '@/app/components/PropertyCard';
import { properties } from '@/data/properties';
import { SlidersHorizontal, Search, MapPin, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/app/components/ui/badge';

export function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [showFilters, setShowFilters] = useState(false);

  // Search States
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [beds, setBeds] = useState(0);
  const [type, setType] = useState('All');

  // Filter Logic
  const handleSearch = () => {
    let filtered = properties.filter(p =>
    (p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      if (max) {
        filtered = filtered.filter(p => p.price >= min && p.price <= max);
      } else {
        filtered = filtered.filter(p => p.price >= min);
      }
    }

    if (beds > 0) {
      filtered = filtered.filter(p => p.bedrooms >= beds);
    }

    if (type !== 'All') {
      filtered = filtered.filter(p => p.type === type);
    }

    setFilteredProperties(filtered);
  };

  // Reset Logic
  const resetFilters = () => {
    setSearchQuery('');
    setPriceRange('');
    setBeds(0);
    setType('All');
    setFilteredProperties(properties);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[var(--gold)] selection:text-[var(--primary)]">

      {/* Cinematic Hero */}
      <section className="relative h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-e328d4de4bf7?q=80&w=2000"
            alt="Luxury Property"
            className="w-full h-full object-cover opacity-30 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--gold)]">
              <MapPin className="h-3 w-3 fill-current" />
              <span>Surrey's Finest Homes</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-6">
              Property <span className="italic text-[var(--gold)]">Collection</span>
            </h1>
            <p className="text-lg text-white/70 font-light max-w-xl mx-auto">
              Discover our curated selection of properties for sale in Epsom, Ashtead, and the surrounding areas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar (Sticky) */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm py-4 transition-all">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">

            <div className="flex gap-2 flex-1 items-center bg-slate-50 border border-slate-200 rounded-full px-4 py-2 hover:bg-white hover:shadow-md transition-all focus-within:ring-2 focus-within:ring-[var(--gold)] focus-within:bg-white">
              <Search className="h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search location or keyword..."
                className="bg-transparent border-0 focus:ring-0 w-full text-sm font-medium text-slate-700 placeholder:text-slate-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              {/* Type Filter */}
              <div className="relative group">
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 rounded-full py-2.5 pl-5 pr-10 text-sm font-medium text-slate-700 hover:border-[var(--gold)] focus:outline-none cursor-pointer shadow-sm"
                >
                  <option value="All">All Types</option>
                  <option value="Detached">Detached</option>
                  <option value="Semi-Detached">Semi-Detached</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Bungalow">Bungalow</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>

              {/* Price Filter */}
              <div className="relative group">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 rounded-full py-2.5 pl-5 pr-10 text-sm font-medium text-slate-700 hover:border-[var(--gold)] focus:outline-none cursor-pointer shadow-sm min-w-[160px]"
                >
                  <option value="">Any Price</option>
                  <option value="0-500000">Up to £500,000</option>
                  <option value="500000-1000000">£500k - £1m</option>
                  <option value="1000000-2000000">£1m - £2m</option>
                  <option value="2000000+">£2m+</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>

              {/* Beds Filter */}
              <div className="relative group">
                <select
                  value={beds}
                  onChange={(e) => setBeds(Number(e.target.value))}
                  className="appearance-none bg-white border border-slate-200 rounded-full py-2.5 pl-5 pr-10 text-sm font-medium text-slate-700 hover:border-[var(--gold)] focus:outline-none cursor-pointer shadow-sm"
                >
                  <option value="0">Any Beds</option>
                  <option value="1">1+ Beds</option>
                  <option value="2">2+ Beds</option>
                  <option value="3">3+ Beds</option>
                  <option value="4">4+ Beds</option>
                  <option value="5">5+ Beds</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>

              <Button
                onClick={handleSearch}
                className="bg-[var(--primary)] text-white rounded-full px-6 hover:bg-[var(--primary)]/90 shadow-lg"
              >
                Search
              </Button>

              {(searchQuery || priceRange || beds > 0 || type !== 'All') && (
                <Button
                  variant="ghost"
                  onClick={resetFilters}
                  className="text-slate-500 hover:text-rose-600 font-medium"
                >
                  Reset
                </Button>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Results Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-[var(--primary)]">
              {filteredProperties.length} Properties <span className="text-slate-400 font-sans font-normal text-lg ml-2">Available</span>
            </h2>

            {/* Optional: Sort dropdown could go here */}
          </div>

          {filteredProperties.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredProperties.map((property) => (
                  <motion.div
                    key={property.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PropertyCard
                      {...property}
                      image={property.images[0]}
                      isLightSection={true}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-24 bg-slate-50 rounded-[32px] border border-dashed border-slate-200">
              <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">No properties found</h3>
              <p className="text-slate-500 max-w-md mx-auto mb-6">
                We couldn't find any properties matching your specific criteria. Try adjusting your filters or search for something else.
              </p>
              <Button onClick={resetFilters} variant="outline" className="border-slate-300 text-slate-700 hover:bg-white hover:text-[var(--primary)]">
                Clear All Filters
              </Button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
