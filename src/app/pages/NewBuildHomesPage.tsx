import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Star,
  Trees,
  Car,
  ShieldCheck,
  Home,
  Phone
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

const features = [
  {
    icon: Home,
    title: "Eco-Friendly Living",
    desc: "Designed with sustainability in mind, featuring solar panels and high-efficiency insulation."
  },
  {
    icon: Car,
    title: "Private Parking",
    desc: "Secure allocated parking for every residence, with electric vehicle charging points."
  },
  {
    icon: Trees,
    title: "Landscaped Gardens",
    desc: "Beautifully maintained communal gardens and private balconies for outdoor relaxation."
  },
  {
    icon: ShieldCheck,
    title: "10 Year Warranty",
    desc: "Peace of mind with a comprehensive 10-year structural warranty on all new homes."
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function NewBuildHomesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* Cinematic Hero - South Hatch */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
            alt="The Residences at South Hatch"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--gold)]">
              <Star className="h-3 w-3 fill-current" />
              <span>Exclusive Development</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-8">
              The Residences <br />
              <span className="italic text-[var(--gold)] text-4xl md:text-6xl lg:text-7xl block mt-2">at South Hatch</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              A prestigious collection of racecourse-side apartments.
              Experience the pinnacle of luxury living in the heart of Epsom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 relative z-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[var(--gold)] font-serif italic text-2xl">Lifestyle</span>
              <h2 className="text-4xl font-serif font-bold text-[var(--primary)] mt-2 mb-6">A New Standard of Living</h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                The Residences at South Hatch offer a unique opportunity to live in one of Epsom's most desirable locations.
                Overlooking the world-famous Epsom Downs Racecourse, these homes blend contemporary design with timeless elegance.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Each apartment has been meticulously crafted to provide the ultimate in comfort and style.
                From the bespoke kitchens to the luxurious bathrooms, every detail has been considered to create a home that is truly special.
              </p>
              <div className="flex gap-4">
                <a href="#register">
                  <Button className="h-12 px-8 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90">
                    Brochure Download
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
            >
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070"
                alt="Luxury Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="h-5 w-5 text-[var(--gold)]" />
                    <span className="font-bold text-[var(--primary)]">Epsom Downs, Surrey</span>
                  </div>
                  <p className="text-sm text-slate-600">Direct views of the racecourse and moments from the town center.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-[var(--primary)] mb-4">Unrivaled Specification</h2>
            <p className="text-slate-600">Every aspect of The Residences has been designed to offer a superior living experience.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="h-14 w-14 bg-[var(--gold)]/10 rounded-2xl flex items-center justify-center text-[var(--primary)] mb-6">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif font-bold text-xl text-[var(--primary)] mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-20 overflow-hidden">
        <div className="flex gap-4 min-w-full">
          {[
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070",
            "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2070",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974"
          ].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[400px] h-[300px] rounded-2xl overflow-hidden shadow-lg">
              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <span className="text-sm text-slate-500 font-medium">Artist Impressions & Show Home Photography</span>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 bg-[var(--primary)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--gold)] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <Badge className="bg-[var(--gold)] text-[var(--primary)] mb-4">Register Interest</Badge>
              <h2 className="text-4xl font-serif font-bold text-[var(--primary)] mb-4">Be the first to know</h2>
              <p className="text-slate-600 mb-6 text-lg">
                Register your details today to receive the digital brochure, floorplans, and an invitation to our exclusive launch event.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-[var(--primary)] font-medium">
                  <CheckCircle2 className="h-5 w-5 text-[var(--gold)]" />
                  <span>Priority access to viewings</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--primary)] font-medium">
                  <CheckCircle2 className="h-5 w-5 text-[var(--gold)]" />
                  <span>Off-plan reservation opportunities</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-96 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <form className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Full Name</label>
                  <input type="text" className="w-full h-12 rounded-xl border-slate-200 focus:border-[var(--gold)] focus:ring-[var(--gold)]" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Email Address</label>
                  <input type="email" className="w-full h-12 rounded-xl border-slate-200 focus:border-[var(--gold)] focus:ring-[var(--gold)]" placeholder="name@example.com" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Phone</label>
                  <input type="tel" className="w-full h-12 rounded-xl border-slate-200 focus:border-[var(--gold)] focus:ring-[var(--gold)]" placeholder="07700 900000" />
                </div>
                <Button className="w-full h-12 bg-[var(--primary)] text-white font-bold rounded-xl hover:bg-[var(--primary)]/90 mt-2">
                  Register Interest
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-12 bg-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-bold text-[var(--primary)] mb-4">Sales Enquiries</h3>
          <div className="flex justify-center gap-8 flex-wrap">
            <a href="tel:01372743033" className="flex items-center gap-2 text-slate-600 hover:text-[var(--primary)] transition-colors">
              <Phone className="h-5 w-5" /> 01372 743 033
            </a>
            <a href="mailto:homes@cairds.co.uk" className="flex items-center gap-2 text-slate-600 hover:text-[var(--primary)] transition-colors">
              <span className="font-bold">@</span> homes@cairds.co.uk
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
