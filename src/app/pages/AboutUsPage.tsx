import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  TrendingUp,
  Heart,
  ChevronRight,
  Star,
  ShieldCheck,
  Building2,
  MapPin,
  CheckCircle2,
  Trophy
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Card, CardContent } from "@/app/components/ui/card";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function AboutUsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">

      {/* Cinematic Hero */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="Cairds Team Office"
            className="w-full h-full object-cover opacity-40"
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
            <Badge className="bg-white/10 backdrop-blur-md text-[var(--gold)] border-white/20 px-4 py-2 mb-6 text-xs tracking-widest uppercase font-bold">
              Established Over 26 Years
            </Badge>
            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6">
              More Than Just <br />
              <span className="text-[var(--gold)] italic">Estate Agents</span>
            </h1>
            <p className="text-xl text-white/80 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
              We are a forward-thinking, independent agency blending traditional values with innovative technology to deliver exceptional results in Epsom, Ashtead, and beyond.
            </p>
            <Link to="/contact-us">
              <Button className="h-14 px-8 rounded-full bg-[var(--gold)] text-[var(--primary)] hover:bg-white font-bold text-lg transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section - Our Story */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="text-[var(--gold)] font-serif italic text-2xl">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--primary)] mt-2 mb-6">
                A Legacy of Excellence
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Choosing the right estate agent is vital. For over <span className="text-[var(--primary)] font-bold">26 years</span>, Cairds has been the market-leading name in Epsom & Ashtead. Our success is built on a simple philosophy: <span className="italic">putting our clients first</span>.
                </p>
                <p>
                  Operating from our award-winning, double-fronted premises on Epsom High Street, we offer an unparalleled location to showcase properties to the widest possible audience. We are not a franchise; we are a fiercely independent local business that cares passionately about our community.
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-[var(--gold)]">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="Simon Caird" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-[var(--primary)] text-lg">Simon Caird</div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Managing Director</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <div className="absolute -inset-4 bg-[var(--gold)]/20 rounded-[40px] rotate-3 blur-lg"></div>
              <motion.div
                className="relative h-[500px] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://www.cairds.co.uk/media/Artboard-1.png"
                  alt="Cairds Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/80 to-transparent flex flex-col justify-end p-8">
                  <div className="text-white font-serif font-bold text-2xl">Epsom High Street</div>
                  <div className="text-white/80 text-sm">Our award-winning flagship office</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[var(--primary)] text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#eab308 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {[
              { value: "26+", label: "Years Experience" },
              { value: "800+", label: "Network Agents" },
              { value: "No. 1", label: "In Local Area" },
              { value: "Gold", label: "Award Winners" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-4"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-[var(--gold)] mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm font-medium tracking-widest uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[var(--gold)] font-bold tracking-widest uppercase text-xs">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--primary)] mt-3">Driven by Core Values</h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Users, title: "Client First", desc: "Your needs and goals are at the heart of everything we do." },
              { icon: Award, title: "Excellence", desc: "Consistently delivering high levels of customer service and expertise." },
              { icon: TrendingUp, title: "Innovation", desc: "Embracing new technology while maintaining personal service." },
              { icon: Heart, title: "Integrity", desc: "Honest, transparent advice you can trust, always." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[var(--primary)] mb-6 group-hover:bg-[var(--gold)] group-hover:text-[var(--primary)] transition-colors">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif font-bold text-xl text-[var(--primary)] mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] font-bold text-xs uppercase tracking-wide">
                <Trophy className="h-4 w-4" /> Award Winning
              </div>
              <h2 className="text-4xl font-serif font-bold text-[var(--primary)]">
                Recognized for Excellence
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                “Receiving this award is a huge honour to all of us at Cairds. We work very closely with The Guild to improve the service we offer our clients and this award is proof that our endeavours have paid off. I would like to personally thank all of our staff for always striving to go above and beyond.”
              </p>
              <div className="flex items-center gap-4">
                <span className="h-px flex-1 bg-slate-200"></span>
                <span className="font-serif font-bold text-[var(--primary)]">Simon Caird, Managing Director</span>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-4">
              {[
                { img: "https://www.cairds.co.uk/media/BPA-Gold-Winner-2019-109x300.png", title: "BPA Gold Winner", sub: "Best Property Awards 2019" },
                { img: "https://www.cairds.co.uk/media/Cairds-Telegraph-Award-Logo-2016-300x284.jpg", title: "Telegraph Gold", sub: "Guild Excellence Awards" }
              ].map((award, idx) => (
                <Card key={idx} className="border-slate-100 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <CardContent className="pt-6">
                    <div className="h-32 mb-4 flex items-center justify-center">
                      <img src={award.img} alt={award.title} className="max-h-full object-contain" />
                    </div>
                    <h4 className="font-bold text-[var(--primary)] mb-1">{award.title}</h4>
                    <p className="text-xs text-slate-500">{award.sub}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-[var(--primary)] mb-6">Ready to work with the best?</h2>
          <div className="flex justify-center gap-4">
            <Link to="/contact-us">
              <Button className="h-12 px-8 rounded-full bg-[var(--primary)] text-white font-bold hover:bg-[var(--primary)]/90">Contact Us</Button>
            </Link>
            <Link to="/properties">
              <Button variant="outline" className="h-12 px-8 rounded-full border-[var(--primary)] text-[var(--primary)] font-bold hover:bg-[var(--primary)]/5">View Our Properties</Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
