import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  ChevronRight,
  MapPin,
  Phone,
  FileText,
  BadgeCheck,
  HeartHandshake,
  Landmark,
  User,
  ShieldCheck,
  Star,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Percent
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function IndependentMortgagesPage() {
  const [activeTab, setActiveTab] = useState("sales");
  const [propertyPrice, setPropertyPrice] = useState("450000");
  const [deposit, setDeposit] = useState("45000");

  // Simple calculator logic (for visualization only)
  const calculateEstimate = () => {
    const p = parseFloat(propertyPrice) || 0;
    const d = parseFloat(deposit) || 0;
    const loan = p - d;
    const rate = 0.045; // 4.5% example
    const term = 25;
    const monthlyRate = rate / 12;
    const numberOfPayments = term * 12;

    if (loan <= 0) return "0";

    // Mortgage payment formula: M = P[r(1+r)^n]/[(1+r)^n-1]
    const monthlyPayment = loan * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return monthlyPayment.toLocaleString('en-GB', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">

      {/* Cinematic Hero */}
      <section className="relative h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973"
            alt="Financial Planning"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--gold)]">
              <ShieldCheck className="h-3 w-3 fill-current" />
              <span>Independent Advice</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-8">
              Smart Financial <br /><span className="italic text-[var(--gold)]">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              Expert, independent mortgage and protection advice tailored to your unique journey.
              Whether you're buying your first home or building a portfolio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16">

            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Intro Card */}
              <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl border border-slate-100 mb-12">
                <div className="flex flex-col md:flex-row gap-8 items-start mb-10 border-b border-slate-100 pb-10">
                  <div className="flex-1">
                    <span className="text-[var(--gold)] font-serif italic text-2xl">Expert Partner</span>
                    <h2 className="text-3xl font-serif font-bold text-[var(--primary)] mt-2 mb-6">
                      Madava Financial Services
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                      Getting the right advice prior to making your move is paramount. Madava Financial Services provides independent mortgage and protection advice whether you’re a first-time buyer, experienced mover, or investment purchaser.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200 border-0 px-3 py-1.5"><CheckCircle2 className="h-3.5 w-3.5 mr-2 text-[var(--gold)]" /> Whole of Market</Badge>
                      <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200 border-0 px-3 py-1.5"><CheckCircle2 className="h-3.5 w-3.5 mr-2 text-[var(--gold)]" /> Exclusive Rates</Badge>
                      <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200 border-0 px-3 py-1.5"><CheckCircle2 className="h-3.5 w-3.5 mr-2 text-[var(--gold)]" /> Protection Planning</Badge>
                    </div>
                  </div>
                </div>

                {/* Advisor Profile */}
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-slate-50 shadow-lg flex-shrink-0">
                    <img
                      src="https://www.cairds.co.uk/wp-content/uploads/2020/11/Donna-Evans-Image.jpg"
                      alt="Donna Evans"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-[var(--primary)] mb-1">Donna Evans</h3>
                    <p className="text-[var(--gold)] font-medium mb-4">Independent Mortgage & Protection Adviser</p>
                    <p className="text-slate-600 text-sm mb-6 max-w-lg">
                      With over 30 years of experience in financial services, Donna acts for you, not the lender. Her extensive knowledge ensures you get access to the best products suited to your needs.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      <Button className="rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 h-10 px-6">
                        Book Consultation
                      </Button>
                      <a href="tel:01372743317">
                        <Button variant="outline" className="rounded-full border-slate-200 h-10 px-6 text-slate-600 hover:text-[var(--primary)]">
                          <Phone className="h-4 w-4 mr-2" /> 01372 743 317
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Value Proposition Grid */}
              <h3 className="text-2xl font-serif font-bold text-[var(--primary)] mb-6 px-2">Why Choose Independent Advice?</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                    <BadgeCheck className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-[var(--primary)] mb-2">Unbiased Recommendations</h4>
                  <p className="text-slate-500 text-sm">We aren't tied to any specific lender. We search thousands of mortgage products to find the one that fits you perfectly.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                    <Percent className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-[var(--primary)] mb-2">Exclusive Rates</h4>
                  <p className="text-slate-500 text-sm">Access to broker-only deals and exclusive rates that you won't find on the high street or comparison sites.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                    <HeartHandshake className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-[var(--primary)] mb-2">Personalized Service</h4>
                  <p className="text-slate-500 text-sm">From application to completion, we handle the paperwork and chase lenders, making the process stress-free.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 mb-4">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-[var(--primary)] mb-2">Protection & Security</h4>
                  <p className="text-slate-500 text-sm">Guidance on life insurance, income protection, and critical illness cover to keep your home and family safe.</p>
                </div>
              </div>

              {/* Regulatory Info */}
              <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200">
                <div className="flex items-start gap-4">
                  <Landmark className="h-6 w-6 text-slate-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-slate-700 text-sm mb-2">Regulatory Information</h5>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      Donna Evans trading as Madava Financial Services is an appointed representative of In Partnership (the trading name of The On-Line Partnership Limited), authorised and regulated by the Financial Conduct Authority.
                    </p>
                    <div className="p-3 bg-white rounded-lg border border-red-100 text-red-800 text-xs font-bold text-center">
                      YOUR HOME MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON YOUR MORTGAGE
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* Right Column: Mortgage Calculator & Contact */}
            <aside className="space-y-8">

              {/* Calculator Card */}
              <div className="bg-[var(--primary)] text-white p-8 rounded-[32px] shadow-xl relative overflow-hidden sticky top-24">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Calculator className="h-5 w-5 text-[var(--gold)]" />
                    </div>
                    <h3 className="font-serif font-bold text-xl">Quick Estimate</h3>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2 block">Property Price</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--primary)] font-bold">£</span>
                        <Input
                          type="number"
                          value={propertyPrice}
                          onChange={(e) => setPropertyPrice(e.target.value)}
                          className="h-12 pl-8 bg-white text-[var(--primary)] font-bold border-0 rounded-xl focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2 block">Deposit Amount</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--primary)] font-bold">£</span>
                        <Input
                          type="number"
                          value={deposit}
                          onChange={(e) => setDeposit(e.target.value)}
                          className="h-12 pl-8 bg-white text-[var(--primary)] font-bold border-0 rounded-xl focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                        />
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <div className="flex justify-between items-end mb-1">
                        <span className="text-sm font-medium text-white/80">Est. Monthly Payment</span>
                        <span className="text-3xl font-serif font-bold text-[var(--gold)]">£{calculateEstimate()}</span>
                      </div>
                      <p className="text-[10px] text-white/40 text-right">*Based on 4.5% interest over 25 years. For illustrative purposes only.</p>
                    </div>

                    <Button className="w-full bg-[var(--gold)] text-[var(--primary)] font-bold h-12 rounded-xl hover:bg-white mt-2">
                      Get an Accurate Quote
                    </Button>
                  </div>
                </div>
              </div>

              {/* Disclosure Box */}
              <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl">
                <h5 className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-2">
                  <ShieldCheck className="h-4 w-4" /> Important Disclosure
                </h5>
                <p className="text-xs text-amber-900/70 leading-relaxed">
                  Cairds (Epsom) Ltd routinely refers potential purchasers and sellers to Donna Evans t/a Madava Financial Services. It’s your decision whether you choose to deal with them. Cairds (Epsom) Ltd receives a 30% split commission from the transaction details.
                </p>
              </div>

            </aside>

          </div>
        </div>
      </section>

    </div>
  );
}
