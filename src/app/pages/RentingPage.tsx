import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileCheck2,
  FileText,
  HeartHandshake,
  LockKeyhole,
  MapPin,
  Phone,
  Search,
  Shield,
  Sparkles,
  Star,
  UserCheck,
  Users,
  Home,
  Building2
} from "lucide-react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function RentingPage() {
  const [q, setQ] = useState("");

  const features = [
    {
      icon: Shield,
      title: "Fully vetted properties",
      desc: "Every listing is presented with clear details and a focus on quality and compliance.",
    },
    {
      icon: Clock,
      title: "Quick process",
      desc: "Efficient referencing and move-in steps designed to reduce delays and uncertainty.",
    },
    {
      icon: HeartHandshake,
      title: "Ongoing support",
      desc: "A dedicated lettings team available throughout your tenancy when you need help.",
    },
  ];

  const steps = [
    {
      n: 1,
      icon: BookOpenCheck,
      title: "Find your property",
      desc: "Browse our curated list of available homes and arrange a viewing with our team."
    },
    {
      n: 2,
      icon: FileText,
      title: "Complete application",
      desc: "Submit your application along with the required documents for assessment."
    },
    {
      n: 3,
      icon: Users,
      title: "Referencing",
      desc: "Our team conducts reference checks, usually completed within 3 to 5 days."
    },
    {
      n: 4,
      icon: ArrowRight,
      title: "Move in",
      desc: "Sign the tenancy agreement, collect your keys, and move into your new home."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* Cinematic Hero */}
      <section className="relative h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070"
            alt="Luxury Rental"
            className="w-full h-full object-cover opacity-40 grayscale-[20%]"
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
              <Sparkles className="h-3 w-3" />
              <span>Premium Lettings</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6">
              Find Your Perfect <span className="italic text-[var(--gold)]">Rental</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              Discover exceptional properties to rent in Epsom, Ashtead, and Surrey.
              Register for early access and experience a seamless move-in process.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12 py-12 -mt-20 relative z-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">

          {/* Main Content */}
          <main className="space-y-12">

            {/* Search Section - Glassmorphic Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl p-8 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--gold)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary)]/5 text-[var(--primary)] text-xs font-bold uppercase tracking-wider">
                    <MapPin className="h-3 w-3" /> Epsom & Ashtead
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--gold)]/10 text-amber-700 text-xs font-bold uppercase tracking-wider">
                    <Star className="h-3 w-3" /> High Demand
                  </span>
                </div>

                <h2 className="text-3xl font-serif font-bold text-[var(--primary)] mb-4">
                  Search Available Rentals
                </h2>
                <p className="text-slate-600 mb-8 max-w-xl leading-relaxed">
                  Enter a location, postcode, or property type to view our current listings.
                  We update our portfolio daily to bring you the best homes in the area.
                </p>

                <form
                  onSubmit={(e) => { e.preventDefault(); /* Handle search logic */ }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <Input
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      type="text"
                      placeholder="e.g. KT19, Ashtead, 2 bed, garden..."
                      className="h-14 rounded-xl border-slate-200 bg-slate-50 pl-12 text-base shadow-sm focus-visible:ring-[var(--gold)] focus-visible:border-[var(--gold)] transition-all"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="h-14 rounded-xl bg-[var(--primary)] px-8 text-base font-medium text-white shadow-lg hover:bg-[var(--primary)]/90 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    Search Listings
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Why Rent With Us */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-serif font-bold text-[var(--primary)]">The Cairds Standard</h2>
                <div className="h-px flex-1 bg-slate-200 ml-6 hidden sm:block"></div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-[var(--gold)]/30 hover:shadow-md transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-[var(--gold)]" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--primary)] mb-2 font-serif">{feature.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Rental Process */}
            <section className="rounded-3xl bg-[var(--primary)] p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <BadgeCheck className="w-64 h-64 rotate-12" />
              </div>

              <div className="relative z-10">
                <div className="mb-10 max-w-2xl">
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] uppercase tracking-wider font-bold text-[var(--gold)]">
                    <Sparkles className="h-3 w-3" />
                    <span>Step-by-step</span>
                  </div>
                  <h2 className="text-3xl font-serif font-bold mb-4">Your Journey to Move-In</h2>
                  <p className="text-white/70 leading-relaxed">
                    We’ve streamlined the rental process to be transparent and efficient, guiding you from your first viewing to collecting the keys.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {steps.map((step) => (
                    <div key={step.n} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="shrink-0 flex flex-col items-center">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--gold)] text-[var(--primary)] font-bold text-sm">
                          {step.n}
                        </span>
                        <div className="w-px h-full bg-white/10 my-2 last:hidden"></div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <step.icon className="h-4 w-4 text-[var(--gold)]" />
                          <h3 className="font-bold text-lg font-serif">{step.title}</h3>
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Tenant Resources */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-6">Tenant Resources</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <Link to="/let-properties" className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-[var(--gold)]/30 transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[var(--gold)]/10 transition-colors"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <Home className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--primary)] mb-2 font-serif">Browse Properties</h3>
                    <p className="text-sm text-slate-600 mb-6">View our latest rental listings in Epsom, Ashtead, and surrounding areas.</p>
                    <span className="inline-flex items-center text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)] transition-colors">
                      View Listings <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>

                <a
                  href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/942503/6.6642_MHCLG_How_to_Rent_v5.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-[var(--gold)]/30 transition-all"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[var(--gold)]/10 transition-colors"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <FileText className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--primary)] mb-2 font-serif">How to Rent Guide</h3>
                    <p className="text-sm text-slate-600 mb-6">Download the official government guide for tenants in the private rented sector.</p>
                    <span className="inline-flex items-center text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)] transition-colors">
                      Download PDF <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </a>
              </div>
            </section>
          </main>

          {/* Sticky Sidebar */}
          <aside className="lg:sticky lg:top-24 space-y-6">
            {/* Lettings Team Card */}
            <div className="bg-[var(--primary)] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--gold)] opacity-10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-2 bg-white/10 rounded-lg">
                    <Phone className="h-5 w-5 text-[var(--gold)]" />
                  </span>
                  <h3 className="text-lg font-serif font-bold">Lettings Team</h3>
                </div>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Have questions about a property or the application process? Our dedicated team is here to help.
                </p>
                <a href="tel:01372731966" className="block w-full py-3 bg-white text-[var(--primary)] rounded-xl font-bold text-center hover:bg-[var(--gold)] transition-colors mb-4">
                  01372 731966
                </a>
                <Button variant="outline" className="w-full border-white/20 text-white bg-transparent hover:bg-white/10 hover:text-white">
                  Request Callback
                </Button>
              </div>
            </div>

            {/* Register Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[var(--gold)]/30 transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                <Star className="w-24 h-24 text-[var(--gold)]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[var(--primary)] mb-2">Beat the Crowd</h3>
              <p className="text-sm text-slate-600 mb-4">
                Register your requirements to get alerts for new rental properties before they go online.
              </p>
              <Button className="w-full bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90">
                Register Now
              </Button>
            </div>

            {/* Documents Checklist */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-[var(--primary)] mb-4 flex items-center gap-2">
                <FileCheck2 className="h-5 w-5 text-[var(--gold)]" />
                What You'll Need
              </h3>
              <ul className="space-y-3">
                {[
                  "Passport / ID",
                  "Proof of Address (Utility Bill)",
                  "3 Months Bank Statements",
                  "Employment Reference",
                  "Previous Landlord Reference"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance / CMP */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-5 w-5 text-[var(--primary)]" />
                <h3 className="font-bold text-[var(--primary)] text-sm uppercase tracking-wide">Consumer Protection</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                We are members of Propertymark and The Property Ombudsman. Your money is protected.
              </p>
              <a
                href="https://www.cairds.co.uk/media/Cairds-Epsom-Limited-CMP-Security-Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[var(--primary)] hover:text-[var(--gold)] flex items-center gap-1 transition-colors"
              >
                View CMP Certificate <ChevronRight className="h-3 w-3" />
              </a>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
