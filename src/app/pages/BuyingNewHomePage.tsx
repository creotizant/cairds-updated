import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Crown,
  FileCheck,
  Home,
  LineChart,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wallet,
  Coins
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

export default function BuyingNewHomePage() {
  const [email, setEmail] = useState("");

  const why = [
    {
      icon: Crown,
      title: "Early access & pre-release",
      desc: "Get ahead of the market with VIP priority registration and off-market opportunities.",
    },
    {
      icon: ShieldCheck,
      title: "High-spec, low-maintenance",
      desc: "Modern design, energy efficiency, 10-year warranties, and minimal upkeep.",
    },
    {
      icon: LineChart,
      title: "Strong investment fundamentals",
      desc: "New builds can offer excellent rental demand, clean compliance, and appealing finishes.",
    },
    {
      icon: Building2,
      title: "Developer relationships",
      desc: "We work closely with respected developers to secure better visibility and timing for buyers.",
    },
  ];

  const steps = [
    {
      n: 1,
      icon: MapPin,
      title: "Research & shortlist",
      bullets: [
        "Choose the area (Epsom, Ashtead and surrounding Surrey locations).",
        "Compare schemes: specification, parking, outdoor space, transport links.",
        "Ask for pre-release availability and timelines.",
      ]
    },
    {
      n: 2,
      icon: Phone,
      title: "Talk to Cairds early",
      bullets: [
        "Get guidance on value and local demand.",
        "Secure early access to suitable plots or house-types.",
        "Understand reservation fees and target exchange deadlines.",
      ]
    },
    {
      n: 3,
      icon: FileCheck,
      title: "Mortgage & legal prep",
      bullets: [
        "Obtain a mortgage in principle.",
        "Appoint a conveyancer experienced with new builds.",
        "Review developer paperwork, incentives, and completion dates.",
      ]
    },
    {
      n: 4,
      icon: ShieldCheck,
      title: "Reserve, exchange & snag",
      bullets: [
        "Reserve your chosen home / plot and proceed to exchange.",
        "Inspect close to completion and create a snagging list.",
        "Complete, collect keys, and move in.",
      ]
    }
  ];

  const faqs = [
    {
      q: "Is buying a new build a good investment?",
      a: "New homes can be attractive to tenants and future buyers thanks to modern layouts, strong energy performance, warranty coverage, and lower maintenance. Talk to us if you’re looking for investor-focused advice."
    },
    {
      q: "How long does it take to buy a new build?",
      a: "Timescales vary. Completed homes can move quickly, while off-plan purchases depend on build schedules. Developers often work to exchange deadlines, so early legal and mortgage preparation is important."
    },
    {
      q: "What is snagging and when should I do it?",
      a: "Snagging is checking for minor defects or finishing issues before (or immediately after) completion. A structured snagging list helps ensure issues are addressed promptly."
    },
    {
      q: "Do new builds come with warranties?",
      a: "Many do, commonly a 10-year warranty. Always confirm the warranty provider and coverage details for the specific development."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* Cinematic Hero */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070" // High-end new build aesthetic
            alt="New Build Luxury"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/50 to-transparent" />
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
              <span>New Homes & Developments</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6">
              Redefining Modern <span className="italic text-[var(--gold)]">Living</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              Discover premium new build houses and apartments across Epsom and Ashtead. We secure early access to the region's most anticipated developments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VIP Registration & Intro */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* VIP Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-t-3xl rounded-b-xl shadow-2xl p-8 border-t-4 border-[var(--gold)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Crown className="w-32 h-32" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[var(--primary)] p-2 rounded-lg">
                    <Crown className="h-6 w-6 text-[var(--gold)]" />
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[var(--primary)]">VIP Priority Access</h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Gain early access to off-market opportunities and upcoming launches. Register your requirements with our dedicated new homes team.
                </p>

                <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="h-12 bg-slate-50 border-slate-200 focus:border-[var(--primary)]"
                  />
                  <Button className="h-12 bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 px-8 font-medium">
                    Register Interest
                  </Button>
                </form>
                <p className="mt-4 text-xs text-slate-400">
                  Prefer to speak to us? Call <a href="tel:01372743033" className="text-[var(--primary)] font-bold hover:underline">01372 743033</a>
                </p>
              </div>
            </motion.div>

            {/* Investor Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[var(--primary)] rounded-t-3xl rounded-b-xl shadow-2xl p-8 text-white relative overflow-hidden flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Coins className="w-32 h-32" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-white/10 p-2 rounded-lg">
                    <Wallet className="h-6 w-6 text-[var(--gold)]" />
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white">Investor Services</h3>
                </div>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Looking for high yields and capital growth? Our team specializes in identifying investment-grade stock with full lettings and management support.
                </p>

                <Link to="/landlords" className="inline-flex items-center text-[var(--gold)] font-bold hover:text-white transition-colors group">
                  Explore Landlord Services <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Buy New */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[var(--gold)] font-bold tracking-widest text-xs uppercase mb-2 block">The Cairds Advantage</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--primary)] mb-4">Why Buy New With Us?</h2>
            <p className="text-slate-600 leading-relaxed">
              New builds move quickly. We help you find the right scheme, assess true value, and navigate the reservation process with confidence.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {why.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-[var(--gold)]/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--primary)]/5 p-3 rounded-xl group-hover:bg-[var(--gold)]/10 transition-colors">
                    <item.icon className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[var(--primary)] mb-2 font-serif">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--primary)] mb-4">Your Journey to Ownership</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">A calm, step-by-step approach, whether you’re buying off-plan or a completed home.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="bg-slate-50 rounded-3xl p-8 h-full border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white hover:border-[var(--gold)]/20">
                  <div className="absolute -top-4 left-8 bg-[var(--primary)] text-[var(--gold)] w-10 h-10 flex items-center justify-center rounded-full font-serif font-bold text-lg shadow-lg">
                    {step.n}
                  </div>
                  <div className="mt-4 mb-4">
                    <step.icon className="h-8 w-8 text-[var(--gold)] opacity-80" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-4 font-serif">{step.title}</h3>
                  <ul className="space-y-3">
                    {step.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-[var(--green)] shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[var(--primary)]">Frequently Asked Questions</h2>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden open:shadow-lg transition-all duration-300">
                <summary className="flex cursor-pointer items-center justify-between p-6 list-none">
                  <span className="text-lg font-bold text-[var(--primary)]">{faq.q}</span>
                  <span className="bg-slate-100 rounded-full p-2 group-open:bg-[var(--gold)] group-open:text-[var(--primary)] transition-colors">
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="rounded-[2.5rem] bg-[var(--primary)] overflow-hidden relative p-10 md:p-16 text-center md:text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--gold)] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                  Ready to find your <br /><span className="text-[var(--gold)] italic">perfect new home?</span>
                </h2>
                <p className="text-white/70 text-lg mb-8">
                  Whether you are looking for a city apartment or a countryside estate, our new homes team is ready to assist.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a href="tel:01372743033" className="bg-white text-[var(--primary)] px-8 py-4 rounded-full font-bold hover:bg-[var(--gold)] transition-colors flex items-center gap-2">
                    <Phone className="h-4 w-4" /> 01372 743033
                  </a>
                  <Link to="/contact-us" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                    Book an Appointment <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 gap-4 w-full md:w-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-center gap-4">
                  <div className="bg-[var(--gold)] p-2 rounded-full text-[var(--primary)]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-sm">10-Year Warranties</div>
                    <div className="text-white/50 text-xs">On most new builds</div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-center gap-4">
                  <div className="bg-[var(--gold)] p-2 rounded-full text-[var(--primary)]">
                    <FileCheck className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-sm">Compliance Assured</div>
                    <div className="text-white/50 text-xs">Full legal support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
