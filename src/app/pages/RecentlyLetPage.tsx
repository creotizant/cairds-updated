import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Search,
  ChevronRight,
  Bed,
  Bath,
  Square,
  ArrowUpRight,
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  Crown
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { PropertyCard } from "@/app/components/PropertyCard";

// Mock Data for "Recently Let" Properties
// Capturing the feel of the Cairds portfolio
const recentlyLetProperties = [
  {
    id: "let-001",
    title: "Luxury Apartment, Woodcote",
    location: "Woodcote Park Road, Epsom",
    price: 2500,
    bedrooms: 2,
    bathrooms: 2,
    area: 950,
    type: "Apartment",
    image: "modernist villa exterior",
    isSold: false // Using standard card but visual overlay will indicate 'Let Agreed'
  },
  {
    id: "let-002",
    title: "Period Family Home",
    location: "Agates Lane, Ashtead",
    price: 3750,
    bedrooms: 4,
    bathrooms: 3,
    area: 2100,
    type: "Detached",
    image: "luxury victorian mansion exterior",
    isSold: false
  },
  {
    id: "let-003",
    title: "Contemporary Townhouse",
    location: "Livingstone Park, Epsom",
    price: 2200,
    bedrooms: 3,
    bathrooms: 2,
    area: 1250,
    type: "Townhouse",
    image: "georgian townhouse exterior",
    isSold: false
  },
  {
    id: "let-004",
    title: "Executive Apartment",
    location: "The Street, Ashtead",
    price: 1800,
    bedrooms: 2,
    bathrooms: 1,
    area: 780,
    type: "Apartment",
    image: "modern glass house exterior",
    isSold: false
  },
  {
    id: "let-005",
    title: "Cottage Style Home",
    location: "West Street, Ewell",
    price: 1950,
    bedrooms: 2,
    bathrooms: 1,
    area: 850,
    type: "Terraced",
    image: "historic country manor exterior",
    isSold: false
  },
  {
    id: "let-006",
    title: "Spacious Detached Villa",
    location: "Dorking Road, Epsom",
    price: 4500,
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    type: "Detached",
    image: "coastal cliff house exterior",
    isSold: false
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function RecentlyLetPage() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* Cinematic Hero */}
      <section className="relative h-[450px] lg:h-[550px] flex items-center justify-center overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&w=2070"
            alt="Modern Keys"
            className="w-full h-full object-cover opacity-40 grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--gold)]">
              <CheckCircle2 className="h-3 w-3" />
              <span>Proven Results</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6">
              Recently <span className="italic text-[var(--gold)]">Let</span> Portfolio
            </h1>

            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              A selection of properties successfully let by our dedicated team.
              We achieve exceptional results for landlords across Epsom and Ashtead.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 py-12 -mt-16 relative z-20">

        {/* Intro / Search Bar */}
        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-2">Our Success Stories</h2>
            <p className="text-slate-600">Browse our latest successful lettings.</p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search location..." className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200" />
            </div>
            <Button className="h-12 px-6 rounded-xl bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90">
              Search
            </Button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {recentlyLetProperties.map((prop, idx) => (
            <div key={idx} className="relative group">
              <PropertyCard
                {...prop}
                isLightSection={true}
              />
              {/* Let Agreed Overlay */}
              <div className="absolute top-6 right-6 z-20">
                <div className="bg-[var(--primary)] text-[var(--gold)] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg border border-[var(--gold)]/20">
                  Let Agreed
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Stats Section */}
        <section className="bg-[var(--primary)] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden mb-16">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--gold)] opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <Crown className="h-12 w-12 text-[var(--gold)] mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Why we achieve the best rents</h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Our strategic marketing, professional photography, and active database of qualified tenants allows us to minimize void periods and maximize your yield.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-[var(--gold)] mb-2">98%</div>
                <div className="text-sm font-bold uppercase tracking-wider">Asking Price Achieved</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-[var(--gold)] mb-2">12 Days</div>
                <div className="text-sm font-bold uppercase tracking-wider">Average Time to Let</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-[var(--gold)] mb-2">0%</div>
                <div className="text-sm font-bold uppercase tracking-wider">Default Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-serif font-bold text-[var(--primary)] mb-4">Have a property to let?</h3>
          <p className="text-slate-600 mb-8">Get a free, no-obligation valuation today.</p>
          <div className="flex justify-center gap-4">
            <Link to="/landlords/valuation">
              <Button className="h-12 px-8 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90">
                Request Valuation
              </Button>
            </Link>
            <Link to="/contact-us">
              <Button variant="outline" className="h-12 px-8 rounded-full border-slate-200 hover:bg-slate-50">
                Contact Lettings Team
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
