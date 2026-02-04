import { useState, useMemo } from 'react';
import { PropertyCard } from '@/app/components/PropertyCard';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, ArrowRight, Sparkles, X, ChevronDown } from 'lucide-react';

// Enhanced Mock Data with Images and Parsed Prices
const DEMO_LISTINGS = [
  {
    id: "pachesham-park-leatherhead-kt22",
    title: "Pachesham Park",
    location: "Leatherhead • KT22",
    price: 2950000,
    status: "For Sale",
    beds: 6,
    baths: 6,
    area: 5500,
    type: "Detached Mansion",
    image: "https://images.unsplash.com/photo-1600596542815-6ad4c7213aa5?q=80&w=1080",
    excerpt: "Six double bedroom family home with lakeside access, on the renowned private residential location of Pachesham Park."
  },
  {
    id: "rookery-hill-ashtead-kt21",
    title: "Rookery Hill Manor",
    location: "Ashtead • KT21",
    price: 1695000,
    status: "Sold STC",
    beds: 5,
    baths: 3,
    area: 3200,
    type: "Character Residence",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1080",
    excerpt: "Characterful & extended 1920's residence, enviably positioned in the private grounds of Ashtead Park."
  },
  {
    id: "west-farm-close-ashtead-kt21-2",
    title: "West Farm Close",
    location: "Ashtead • KT21",
    price: 1395000,
    status: "For Sale",
    beds: 4,
    baths: 3,
    area: 2400,
    type: "Detached Home",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1080",
    excerpt: "Sensational four bedroom, three bathroom detached family home, with large south west facing garden."
  },
  {
    id: "links-road-ashtead-kt21-9",
    title: "Links Road Estate",
    location: "Ashtead • KT21",
    price: 1375000,
    status: "For Sale",
    beds: 5,
    baths: 5,
    area: 3100,
    type: "Contemporary Villa",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1080",
    excerpt: "Extended and contemporary five double bedroom home with guest annexe."
  },
  {
    id: "park-lane-ashtead-kt21-3",
    title: "Park Lane Residence",
    location: "Ashtead • KT21",
    price: 1350000,
    status: "For Sale",
    beds: 5,
    baths: 3,
    area: 2800,
    type: "Detached Family Home",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1080",
    excerpt: "Generously sized five double bedroom detached family home in the favoured South side of Ashtead."
  },
  {
    id: "downs-wood-epsom-kt18-3",
    title: "Downs Wood Retreat",
    location: "Epsom • KT18",
    price: 1350000,
    status: "For Sale",
    beds: 4,
    baths: 3,
    area: 2600,
    type: "Luxury Detached",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1080",
    excerpt: "Luxurious 4-bed detached home in sought-after Epsom Downs with master suite and landscaped garden."
  },
  {
    id: "oakfield-road-ashtead-kt21-2",
    title: "Oakfield Road",
    location: "Ashtead • KT21",
    price: 1250000,
    status: "For Sale",
    beds: 6,
    baths: 5,
    area: 3400,
    type: "Architectural Design",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1080",
    excerpt: "Contemporary styled & architecturally designed 6 bedroom home."
  },
  {
    id: "longdown-lane-south-epsom-kt17",
    title: "Longdown Lane South",
    location: "Epsom • KT17",
    price: 1250000,
    status: "Sold STC",
    beds: 5,
    baths: 3,
    area: 2900,
    type: "Character Home",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1080",
    excerpt: "Stylish 5-bed detached home in the College Area with 4 receptions and stables."
  }
];

const LOCATIONS = ["Epsom", "Ashtead", "Leatherhead", "Banstead", "Sutton", "Cheam"];
const BEDS = [1, 2, 3, 4, 5, 6];
const PRICES = [500000, 750000, 1000000, 1250000, 1500000, 2000000, 3000000];

export default function PurchasePropertyPage() {
  // Filter State
  const [filters, setFilters] = useState({
    location: "All Locations",
    minPrice: null as number | null,
    maxPrice: null as number | null,
    minBeds: 0,
    includeSold: false,
    query: ""
  });

  // Filter Logic
  const filteredListings = useMemo(() => {
    return DEMO_LISTINGS.filter(item => {
      if (!filters.includeSold && item.status === "Sold STC") return false;
      if (filters.location !== "All Locations" && !item.location.includes(filters.location)) return false;
      if (filters.minPrice && item.price < filters.minPrice) return false;
      if (filters.maxPrice && item.price > filters.maxPrice) return false;
      if (filters.minBeds > 0 && item.beds < filters.minBeds) return false;
      if (filters.query) {
        const q = filters.query.toLowerCase();
        return item.title.toLowerCase().includes(q) || item.location.toLowerCase().includes(q);
      }
      return true;
    });
  }, [filters]);

  const updateFilter = (key: keyof typeof filters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Cinematic Hero */}
      <section className="relative h-[550px] flex items-center overflow-hidden bg-[var(--primary)]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070"
            alt="Luxury Property Portfolio"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="h-4 w-4 text-[var(--gold)]" />
              <span className="text-[var(--gold)] font-medium tracking-[0.3em] text-[10px] uppercase">
                Curated Portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1]">
              Acquire Your Next <br />
              <span className="italic font-light text-[var(--gold)]">Legacy</span>
            </h1>

            {/* Quick Search Bar */}
            <div className="max-w-xl relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by location, postcode, or style..."
                className="w-full h-16 pl-12 pr-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] transition-all font-light"
                value={filters.query}
                onChange={(e) => updateFilter('query', e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sidebar Filters */}
            <aside className="lg:w-80 flex-shrink-0 space-y-8">
              <div className="sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-gray-900 font-serif text-xl">
                    <SlidersHorizontal className="h-5 w-5 text-[var(--gold)]" />
                    Refine Search
                  </div>
                  <button
                    onClick={() => setFilters({
                      location: "All Locations", minPrice: null, maxPrice: null, minBeds: 0, includeSold: false, query: ""
                    })}
                    className="text-xs uppercase tracking-widest text-gray-400 hover:text-[var(--primary)] transition-colors"
                  >
                    Reset
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Location */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Location</label>
                    <div className="relative">
                      <select
                        value={filters.location}
                        onChange={(e) => updateFilter('location', e.target.value)}
                        className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-gray-900 focus:outline-none focus:border-[var(--gold)]/50 appearance-none"
                      >
                        <option>All Locations</option>
                        {LOCATIONS.map(loc => <option key={loc}>{loc}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Min Price</label>
                      <div className="relative">
                        <select
                          value={filters.minPrice || ""}
                          onChange={(e) => updateFilter('minPrice', e.target.value ? Number(e.target.value) : null)}
                          className="w-full p-3 rounded-xl bg-gray-50 border border-gray-100 text-sm appearance-none"
                        >
                          <option value="">No Min</option>
                          {PRICES.map(p => <option key={p} value={p}>£{(p / 1000000).toFixed(2)}m</option>)}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Max Price</label>
                      <div className="relative">
                        <select
                          value={filters.maxPrice || ""}
                          onChange={(e) => updateFilter('maxPrice', e.target.value ? Number(e.target.value) : null)}
                          className="w-full p-3 rounded-xl bg-gray-50 border border-gray-100 text-sm appearance-none"
                        >
                          <option value="">No Max</option>
                          {PRICES.map(p => <option key={p} value={p}>£{(p / 1000000).toFixed(2)}m</option>)}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Beds */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Bedrooms</label>
                    <div className="flex flex-wrap gap-2">
                      {BEDS.map(n => (
                        <button
                          key={n}
                          onClick={() => updateFilter('minBeds', n)}
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${filters.minBeds === n
                            ? "bg-[var(--primary)] text-white shadow-lg scale-110"
                            : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                          {n}+
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Toggle */}
                  <label className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-medium text-gray-700">Include Sold Properties</span>
                    <div className={`w-10 h-6 rounded-full p-1 transition-colors ${filters.includeSold ? 'bg-[var(--gold)]' : 'bg-gray-200'}`}>
                      <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${filters.includeSold ? 'translate-x-4' : ''}`}></div>
                    </div>
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={filters.includeSold}
                      onChange={(e) => updateFilter('includeSold', e.target.checked)}
                    />
                  </label>
                </div>
              </div>
            </aside>

            {/* Main Grid */}
            <div className="flex-1">
              <div className="mb-8 flex items-center justify-between">
                <p className="text-gray-500 font-light">
                  Showing <span className="font-semibold text-gray-900">{filteredListings.length}</span> premium properties
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Sort by:</span>
                  <select className="text-sm font-medium text-gray-900 bg-transparent border-none focus:ring-0 cursor-pointer">
                    <option>Recommended</option>
                    <option>Price: High to Low</option>
                    <option>Price: Low to High</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {filteredListings.length > 0 ? (
                  filteredListings.map((item) => (
                    <PropertyCard
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      location={item.location}
                      price={item.price}
                      bedrooms={item.beds}
                      bathrooms={item.baths}
                      area={item.area} // Mock area
                      type={item.type}
                      image={item.image}
                      isSold={item.status === "Sold STC"}
                      isLightSection={true}
                    />
                  ))
                ) : (
                  <div className="col-span-2 py-20 text-center">
                    <p className="text-gray-400 text-lg">No properties match your current criteria.</p>
                    <Button
                      variant="link"
                      onClick={() => setFilters({ location: "All Locations", minPrice: null, maxPrice: null, minBeds: 0, includeSold: false, query: "" })}
                      className="text-[var(--gold)]"
                    >
                      Clear all filters
                    </Button>
                  </div>
                )}
              </div>

              {/* Simple Footer/Pagination Concept */}
              {filteredListings.length > 0 && (
                <div className="mt-16 flex justify-center">
                  <Button variant="outline" className="rounded-full px-8 py-6 border-gray-200 text-gray-500 hover:text-[var(--primary)] hover:border-[var(--primary)]">
                    Load More Properties
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
