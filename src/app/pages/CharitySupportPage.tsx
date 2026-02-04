import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  HandHeart,
  Trophy,
  Users,
  Calendar,
  ArrowRight,
  MapPin
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function CharitySupportPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">

      {/* Cinematic Hero - Charity */}
      <section className="relative h-[450px] lg:h-[550px] flex items-center justify-center overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070"
            alt="Community Support"
            className="w-full h-full object-cover opacity-30"
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
              <Heart className="h-3 w-3 fill-current" />
              <span>Community Impact</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-8">
              Giving Back <br /><span className="italic text-[var(--gold)]">to Epsom & Beyond</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              We believe in more than just property. We're dedicated to supporting the vibrant community we call home through fundraising, sponsorship, and active participation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Mission Statement */}
          <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl border border-slate-100 mb-20">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <span className="text-[var(--gold)] font-serif italic text-2xl">Our Mission</span>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[var(--primary)] mt-2 mb-6">
                  Making a Real Difference
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  At Cairds, we are proud to support local charities and community initiatives. Our team is passionate about raising awareness and funds for causes that touch the lives of our neighbors, friends, and families.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="h-2 w-2 rounded-full bg-[var(--gold)]" /> Local Events
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="h-2 w-2 rounded-full bg-[var(--gold)]" /> School Support
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="h-2 w-2 rounded-full bg-[var(--gold)]" /> Health Charities
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="h-2 w-2 rounded-full bg-[var(--gold)]" /> Fundraising
                  </div>
                </div>
              </div>
              <div className="flex-1 relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1000"
                  alt="Volunteering"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl shadow-sm border border-white/50">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-[var(--gold)] mt-1" />
                    <div>
                      <div className="font-bold text-[var(--primary)] text-sm">Team Involvement</div>
                      <div className="text-xs text-slate-500">Our staff actively volunteer and participate.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Charities Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">

            {/* Sunnybank Trust */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-slate-100 flex flex-col"
            >
              <div className="h-64 relative bg-slate-100 flex items-center justify-center p-8">
                {/* Fallback pattern/color if image fails or for design */}
                <div className="absolute inset-0 bg-[#FDB913]/10"></div>
                <img
                  src="https://www.cairds.co.uk/media/sunnybank-300x129.jpg"
                  alt="The Sunnybank Trust"
                  className="h-24 w-auto object-contain relative z-10 mix-blend-multiply"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-bold text-[var(--primary)]">The Sunnybank Trust</h3>
                  <Badge variant="outline" className="border-[var(--gold)] text-[var(--primary)]">Partner</Badge>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                  Helping people with learning disabilities live fuller lives. The charity provides befriending, advocacy, and social clubs for those who are often isolated.
                </p>
                <blockquote className="border-l-4 border-[var(--gold)] pl-4 italic text-slate-500 text-sm mb-8">
                  "The Sunnybank Trust was there to help when David needed someone most, because that’s what real friends do."
                </blockquote>
                <a href="https://www.sunnybanktrust.org/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-slate-200 hover:bg-slate-50 text-slate-600">
                    Visit Website <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Royal Marsden */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-slate-100 flex flex-col"
            >
              <div className="h-64 relative">
                <img
                  src="https://www.cairds.co.uk/media/Simon-Caird-2-1024x768.jpg"
                  alt="Mallorca 312km"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[var(--gold)] text-[var(--primary)] font-bold">£5,000 Raised</Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--primary)]/90 to-transparent p-6">
                  <h3 className="text-xl font-serif font-bold text-white">Mallorca 312km Challenge</h3>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-bold text-[var(--primary)]">The Royal Marsden</h3>
                  <Trophy className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                  Simon Caird completed the grueling Mallorca 312km cycling challenge, creating a fundraising milestone for <span className="font-semibold text-[var(--primary)]">The Royal Marsden Cancer Charity</span>. This effort honours the care given to his late father and a valued staff member.
                </p>

                <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
                  {[
                    "https://www.cairds.co.uk/media/5165_20190427_093317_151572652_socialmedia-1024x683.jpg",
                    "https://www.cairds.co.uk/media/5165_20190427_085933_151630581_socialmedia-1024x683.jpg",
                    "https://www.cairds.co.uk/media/5165_20190427_165127_151644122_socialmedia-1024x683.jpg"
                  ].map((img, idx) => (
                    <div key={idx} className="h-16 w-24 flex-shrink-0 rounded-lg overflow-hidden border border-slate-200">
                      <img src={img} alt="Event" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                <a href="https://www.royalmarsden.org/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-slate-200 hover:bg-slate-50 text-slate-600">
                    Donate / Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </motion.div>

          </div>

          {/* Get Involved Banner */}
          <div className="bg-[var(--primary)] text-white rounded-[32px] p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--gold)] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <HandHeart className="h-12 w-12 text-[var(--gold)] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Have a Cause We Should Know About?</h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                We are always looking for new ways to support our local schools, clubs, and charitable organizations. If you have an event or initiative in Epsom or Ashtead, we'd love to hear from you.
              </p>
              <Link to="/contact-us">
                <Button className="h-12 px-10 rounded-full bg-[var(--gold)] text-[var(--primary)] font-bold hover:bg-white transition-colors">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
