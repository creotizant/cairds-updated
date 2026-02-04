import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  Crown,
  FileText,
  Flame,
  Gauge,
  Info,
  Landmark,
  Leaf,
  LockKeyhole,
  MapPin,
  Phone,
  PlugZap,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { PageHero } from "@/app/components/PageHero";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function Accordion({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: any;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:shadow-lg open:border-[var(--gold)]/30 transition-all duration-300">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-50 text-[var(--primary)] ring-1 ring-slate-200 group-open:bg-[var(--gold)] group-open:text-[var(--primary)] transition-colors">
            <Icon className="h-5 w-5" />
          </span>
          <div className="text-base font-bold tracking-tight text-slate-900 group-hover:text-[var(--primary)]">{title}</div>
        </div>
        <span className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition group-open:rotate-90 group-open:bg-[var(--primary)] group-open:text-[var(--gold)] group-open:border-transparent">
          <ChevronRight className="h-4 w-4" />
        </span>
      </summary>
      <div className="mt-4 pl-[3.5rem] text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
        {children}
      </div>
    </details>
  );
}

export default function LandlordServicesPage() {
  const [mode, setMode] = useState<"sales" | "lettings">("lettings");
  const [location, setLocation] = useState("All Locations");

  const benefits = [
    {
      icon: Gauge,
      title: "Accurate Valuation",
      desc: "Our rental assessments are based on real-time market data and comparable evidence to ensure you get the best yield.",
    },
    {
      icon: Users,
      title: "Quality Tenants",
      desc: "Robust referencing and broad exposure across major portals ensure we find respectful, reliable tenants.",
    },
    {
      icon: ShieldCheck,
      title: "Full Compliance",
      desc: "We handle the regulatory burden, from safety certificates to deposit protection, keeping you on the right side of the law.",
    },
    {
      icon: Landmark,
      title: "Investment Advice",
      desc: "Our sales and lettings teams work together to help you identify and acquire high-performing buy-to-let properties.",
    },
  ];

  const quickLinks = [
    { label: "Landlord Requirements (PDF)", href: "https://www.cairds.co.uk/media/LANDLORD-SAFETY-STATUTORY-REQUIREMENTS-0915.pdf", icon: FileText },
    { label: "Landlord Guide (PDF)", href: "https://www.cairds.co.uk/media/LANDLORD-GUIDE.pdf", icon: FileText },
    { label: "CMP Certificate (PDF)", href: "https://www.cairds.co.uk/media/Cairds-Epsom-Limited-CMP-Security-Certificate.pdf", icon: BadgeCheck },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* Cinematic Hero */}
      <section className="relative h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
            alt="Luxury Interior"
            className="w-full h-full object-cover opacity-30 grayscale-[20%]"
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
              <Crown className="h-3 w-3" />
              <span>Premium Management Services</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6">
              Maximize Your <span className="italic text-[var(--gold)]">Rental Yield</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              Comprehensive property management solutions for landlords in Epsom, Ashtead, and Surrey. Trusted, transparent, and tenacious.
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
                { label: "Propertymark Member", icon: ShieldCheck, color: "text-emerald-500" },
                { label: "100% Recommendation", icon: Crown, color: "text-[var(--gold)]" },
                { label: "Client Money Protected", icon: LockKeyhole, color: "text-sky-500" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-center gap-3">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  <span className="font-bold text-sm text-[var(--primary)]">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Value Proposition */}
            <section>
              <div className="mb-8">
                <h2 className="text-3xl font-serif font-bold text-[var(--primary)] mb-4">Why Landlords Choose Cairds</h2>
                <p className="text-slate-600 leading-relaxed max-w-2xl">
                  We treat your property as our own. From finding the perfect tenant to handling maintenance issues at 2am, we ensure your investment works for you, not against you.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[var(--gold)]/30 hover:shadow-lg transition-all group"
                  >
                    <div className="h-10 w-10 bg-[var(--primary)]/5 rounded-xl flex items-center justify-center text-[var(--primary)] mb-4 group-hover:bg-[var(--gold)] group-hover:text-[var(--primary)] transition-colors">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-lg text-[var(--primary)] mb-2 font-serif">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Compliance Section */}
            <section className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2 bg-white rounded-lg shadow-sm">
                  <Info className="h-5 w-5 text-[var(--gold)]" />
                </span>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[var(--primary)]">Compliance Essentials</h2>
                  <p className="text-sm text-slate-500">Key legal requirements for letting your property.</p>
                </div>
              </div>

              <div className="space-y-3">
                <Accordion title="Gas Safety Regulations" icon={Flame}>
                  Landlords have a legal obligation to ensure compliance with Gas Safety legislation, with an annual certificate from a Gas Safe registered engineer. We can arrange this annual check for you.
                </Accordion>
                <Accordion title="Electrical Safety (EICR)" icon={PlugZap}>
                  Electrical installations must be inspected and tested at least every 5 years by a qualified person. You must provide a copy of the report to new tenants.
                </Accordion>
                <Accordion title="Energy Performance (EPC)" icon={Leaf}>
                  An EPC is mandatory for rental properties and must be included in marketing details. Minimum energy efficiency standards (MEES) apply to most domestic lets.
                </Accordion>
                <Accordion title="Deposit Protection" icon={LockKeyhole}>
                  You must protect your tenant's deposit in a government-approved scheme within 30 days of receiving it. We handle this automatically for our managed properties.
                </Accordion>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {quickLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-700 hover:text-[var(--primary)] hover:border-[var(--gold)] transition-colors"
                  >
                    <link.icon className="h-3 w-3" />
                    {link.label}
                  </a>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <div className="rounded-3xl bg-[var(--primary)] p-10 text-white relative overflow-hidden text-center sm:text-left">
              <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                <Phone className="w-56 h-56 -rotate-12" />
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="max-w-md">
                  <h2 className="text-2xl font-serif font-bold mb-4">Request a free rental appraisal</h2>
                  <p className="text-white/70 mb-0">
                    Discover what level of rent your property could achieve in the current market. No obligation, expert advice.
                  </p>
                </div>
                <div className="flex flex-col gap-3 w-full sm:w-auto">
                  <a
                    href="https://cairds.engage.epropservices.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center px-6 rounded-full bg-white text-[var(--primary)] font-bold hover:bg-[var(--gold)] transition-colors"
                  >
                    Book Valuation
                  </a>
                  <a href="tel:01372731966" className="inline-flex h-12 items-center justify-center px-6 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-colors">
                    Call 01372 731 966
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
                <span className="text-xs bg-[var(--gold)]/10 text-[var(--primary)] px-2 py-1 rounded-full font-bold">Lettings</span>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
                  <button
                    onClick={() => setMode("lettings")}
                    className={`py-2 text-xs font-bold rounded-lg transition-all ${mode === "lettings" ? "bg-white shadow-sm text-[var(--primary)]" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    To Rent
                  </button>
                  <button
                    onClick={() => setMode("sales")}
                    className={`py-2 text-xs font-bold rounded-lg transition-all ${mode === "sales" ? "bg-white shadow-sm text-[var(--primary)]" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    For Sale
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

                <Link to="/properties">
                  <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 h-11 text-white font-bold mt-2">
                    <Search className="h-4 w-4 mr-2" /> Search Properties
                  </Button>
                </Link>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-[var(--primary)] rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold)] opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center text-[var(--gold)]">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold">Epsom Lettings</h3>
                    <p className="text-xs text-white/60">Mon - Sat: 9am - 6pm</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-white/80 bg-white/5 p-3 rounded-xl border border-white/10">
                    <Phone className="h-4 w-4 text-[var(--gold)]" />
                    <a href="tel:01372731966" className="hover:text-white transition-colors">01372 731 966</a>
                  </div>
                  <div className="flex items-center gap-3 text-white/80 bg-white/5 p-3 rounded-xl border border-white/10">
                    <MapPin className="h-4 w-4 text-[var(--gold)]" />
                    <span>128 High Street, Epsom</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Link */}
            <Link to="/renting" className="group flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[var(--gold)]/50 hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                  <Info className="h-5 w-5" />
                </div>
                <div className="text-sm font-bold text-[var(--primary)]">Tenant Info</div>
              </div>
              <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-[var(--gold)] group-hover:translate-x-1 transition-all" />
            </Link>

          </aside>

        </div>
      </div>
    </div>
  );
}
