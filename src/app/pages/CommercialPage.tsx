import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Search,
  ChevronRight,
  ArrowRight,
  Store,
  Factory,
  Landmark,
  ShieldCheck,
  ClipboardCheck,
  Banknote,
  Receipt,
  FileText,
  Wrench,
  Phone,
  Crown
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";

// Mock Data for "Featured Commercial"
const commercialListings = [
  {
    image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=1000",
    title: "26 South Street",
    address: "Epsom, KT18 7PF",
    price: "£25,000 pa",
    tag: "Retail / High Street"
  },
  {
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000",
    title: "132 High Street",
    address: "Epsom, KT19 8BT",
    price: "£24,500 pa",
    tag: "Prime Frontage"
  }
];

const services = [
  {
    icon: Receipt,
    title: "Rent Collection",
    desc: "Clear processes and reliable reporting to keep income consistent."
  },
  {
    icon: FileText,
    title: "Service Charges",
    desc: "Structured handling of charges with a focus on transparency."
  },
  {
    icon: Wrench,
    title: "Dilapidations",
    desc: "Practical coordination to maintain standards and reduce risk."
  },
  {
    icon: Landmark,
    title: "Asset Management",
    desc: "Commercial insight to help protect and improve performance."
  },
  {
    icon: Building2,
    title: "Facilities Management",
    desc: "Day-to-day oversight, coordination, and issue resolution."
  },
  {
    icon: ShieldCheck,
    title: "Trusted Approach",
    desc: "A commercial service trusted by individuals and larger enterprises."
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function CommercialPage() {
  const [mode, setMode] = useState<"sales" | "lettings">("sales");
  const [location, setLocation] = useState("All Locations");

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* Cinematic Hero */}
      <section className="relative h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            alt="Commercial Architecture"
            className="w-full h-full object-cover opacity-30 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/70 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--gold)]">
              <Building2 className="h-3 w-3" />
              <span>Expert Management</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6">
              Commercial <span className="italic text-[var(--gold)]">Property</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              Shop units, offices, retail units, and commercial land.
              Experienced support for owners with service built on trust and long-term relationships.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12 py-12 -mt-20 relative z-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">

          {/* Main Content */}
          <main className="space-y-16">

            {/* Intro Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Trusted Service", icon: ShieldCheck, desc: "Used by major enterprises" },
                { label: "Hands-on Mgmt", icon: ClipboardCheck, desc: "Practical operations support" },
                { label: "Investment Focus", icon: Banknote, desc: "Protecting asset performance" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 bg-[var(--primary)]/5 rounded-xl flex items-center justify-center text-[var(--primary)]">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[var(--primary)]">{stat.label}</div>
                    <div className="text-xs text-slate-500 mt-1">{stat.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Section */}
            <section>
              <div className="flex items-end justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-[var(--primary)] mb-2">Featured Opportunities</h2>
                  <p className="text-slate-600">Prime commercial spaces in Epson & Ashtead.</p>
                </div>
                <Link to="/properties?category=commercial" className="hidden sm:inline-flex items-center text-sm font-bold text-[var(--gold)] hover:text-[var(--primary)] transition-colors">
                  View All <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {commercialListings.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[var(--primary)]">{item.tag}</span>
                        <span className="bg-[var(--gold)] text-[var(--primary)] px-3 py-1 rounded-full text-xs font-bold">{item.price}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif font-bold text-lg text-[var(--primary)] mb-1">{item.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                        <MapPin className="h-4 w-4" /> {item.address}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="w-full text-xs h-9 rounded-xl">Details</Button>
                        <Button className="w-full bg-[var(--primary)] text-white text-xs h-9 rounded-xl hover:bg-[var(--primary)]/90">Enquire</Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Services Grid */}
            <section className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <div className="mb-8">
                <span className="text-[var(--gold)] font-serif font-bold text-lg">Our Services</span>
                <h2 className="text-2xl font-bold text-[var(--primary)] mt-1">Complete Commercial Management</h2>
                <p className="text-slate-600 mt-2 text-sm max-w-xl">
                  Effective property management is essential for the success of your investment.
                  Cairds Commercial provides in-depth support across the full lifecycle.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:border-[var(--gold)]/30 transition-colors">
                    <div className="h-10 w-10 shrink-0 bg-slate-50 rounded-xl flex items-center justify-center text-[var(--primary)]">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-[var(--primary)] text-sm">{service.title}</div>
                      <div className="text-xs text-slate-500 mt-1 leading-relaxed">{service.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <div className="rounded-3xl bg-[var(--primary)] p-10 text-white relative overflow-hidden text-center sm:text-left">
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="max-w-md">
                  <h2 className="text-2xl font-serif font-bold mb-2">Need Commercial Advice?</h2>
                  <p className="text-white/70 mb-0 text-sm">
                    Talk to the team about your retail, office, or industrial property requirements.
                  </p>
                </div>
                <div className="flex flex-col gap-3 w-full sm:w-auto">
                  <a href="tel:01372743033" className="inline-flex h-12 items-center justify-center px-6 rounded-full bg-[var(--gold)] text-[var(--primary)] font-bold hover:bg-white transition-colors">
                    <Phone className="h-4 w-4 mr-2" /> 01372 743033
                  </a>
                </div>
              </div>
            </div>
          </main>

          {/* Sticky Sidebar */}
          <aside className="lg:sticky lg:top-24 space-y-6">

            {/* Search Widget */}
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif font-bold text-[var(--primary)] text-lg">Property Search</h3>
                <span className="text-xs bg-[var(--gold)]/10 text-[var(--primary)] px-2 py-1 rounded-full font-bold">Commercial</span>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
                  <button
                    onClick={() => setMode("sales")}
                    className={`py-2 text-xs font-bold rounded-lg transition-all ${mode === "sales" ? "bg-white shadow-sm text-[var(--primary)]" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => setMode("lettings")}
                    className={`py-2 text-xs font-bold rounded-lg transition-all ${mode === "lettings" ? "bg-white shadow-sm text-[var(--primary)]" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    Rent
                  </button>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 mb-1 block">Location</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full h-10 rounded-lg border-slate-200 text-sm focus:border-[var(--gold)] focus:ring-[var(--gold)]"
                  >
                    <option>All Locations</option>
                    <option>Epsom</option>
                    <option>Ashtead</option>
                    <option>Leatherhead</option>
                  </select>
                </div>

                <Link to="/properties?category=commercial">
                  <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 h-11 text-white font-bold mt-2">
                    <Search className="h-4 w-4 mr-2" /> Search Properties
                  </Button>
                </Link>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-[var(--primary)]">
                  <Store className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--primary)]">Epsom Sales</h3>
                  <p className="text-xs text-slate-500">Commercial Dept.</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-slate-600">
                  <Phone className="h-4 w-4 text-[var(--gold)]" />
                  <a href="tel:01372743033" className="hover:text-[var(--primary)] font-semibold">01372 743033</a>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <MapPin className="h-4 w-4 text-[var(--gold)]" />
                  <span>128–130 High Street, Epsom</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
