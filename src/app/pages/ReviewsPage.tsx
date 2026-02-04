import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Quote, MessageCircle, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const reviews = [
  {
    name: "David",
    date: "15 Jan 2026",
    text: "Jo and Gavin were involved in the sale of our late mother's house and from the start were incredibly friendly, helpful and above all professional. All in all a first class service from Cairds Ashtead.",
    rating: 5,
  },
  {
    name: "Kate Porter",
    date: "15 Jan 2026",
    text: "As a buyer looking in the Ashtead area, I really enjoyed working with Jo at Cairds. It took us just over 6 months to find our home, and during that time she remained in contact and would let us know about upcoming properties that fit our criteria. Her communication during the buying process was consistent and helpful and made everything go smoothly.",
    rating: 5,
  },
  {
    name: "Sam Jordan",
    date: "15 Jan 2026",
    text: "I would highly recommend Cairds Estate agent. George was amazing throughout the sale of my property. He was constantly in contact with myself and the buyers, ensuring the sale was driven forward and both parties were aware of the current status and any issues or delays.",
    rating: 5,
  },
  {
    name: "Ella Morrison",
    date: "13 Jan 2026",
    text: "George Simpson was an excellent agent from start to finish. He was clear, responsive, and genuinely cared about making the process smooth and stress-free. Communication was great throughout, and he always followed up when he said he would.",
    rating: 5,
  },
  {
    name: "John Seddon",
    date: "29 Nov 2025",
    text: "Lorraine was truly fantastic and communicative throughout! From the initial viewing to closing on completion she worked tirelessly on our behalf going way above and beyond our expectations. Such a safe pair of hands!",
    rating: 5,
  },
  {
    name: "Angela Vasiliu",
    date: "30 Oct 2025",
    text: "I can’t thank enough my estate agent, Gavin Newton, who helped with the process of selling my property and buying a new one, through the Cairds Ashtead branch. Absolutely amazing service, could not fault it. My property also sold very quickly, which was nothing short of a miracle given the current weak market.",
    rating: 5,
  },
  {
    name: "Rohit Tikoo",
    date: "28 Sep 2025",
    text: "Highly recommend George Simpson (Cairds) if you’re looking for someone reliable, thoughtful, and efficient! We had a wonderful experience with George. He was extremely detailed, punctual, kind, and helpful throughout the process.",
    rating: 5,
  },
  {
    name: "Sophie Vickery",
    date: "14 Aug 2025",
    text: "We sold our flat with Cairds after trying with two agents prior. We were feeling disheartened before listing with Cairds, but as soon as we signed up we felt instantly at ease! Lorraine was amazing and really helped us meet the maximum potential our flat could reach! Thank you all so much for all your help x",
    rating: 5,
  },
  {
    name: "Meda Tranca",
    date: "14 Jul 2025",
    text: "We had a very unique house to sell that required finding a buyer who loved that uniqueness. Gavin at Cairds has been great throughout the whole sale process, from start to finish- he found us a buyer, helped us in the negotiation process and made sure to get the sale over the line, while always keeping us up to the date.",
    rating: 5,
  },
  {
    name: "Kerry Oliver",
    date: "30 Jun 2025",
    text: "I would highly recommend the team at Cairds in Ashtead, who helped us sell our property this year. Gavin who came out to conduct the valuation was very professional, likeable and offered some great advice in addition to the valuation. Jo then took on the day to day liaison and did a great job keeping us up to date. The team at Cairds made selling our property as stressless as possible.",
    rating: 5,
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">

      {/* Cinematic Hero */}
      <section className="relative h-[450px] lg:h-[550px] flex items-center justify-center overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000"
            alt="Happy Clients"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--gold)]">
              <Star className="h-3 w-3 fill-current" />
              <span>5-Star Service</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6">
              Hear from our <span className="italic text-[var(--gold)]">Community</span>
            </h1>

            <p className="text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              We pride ourselves on building lasting relationships. Read genuine feedback from clients who have bought, sold, and rented with Cairds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-16 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.0 }}
              className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-6"
            >
              <div className="h-16 w-16 rounded-full bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)]">
                <Star className="h-8 w-8 fill-current" />
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-[var(--primary)]">5.0/5.0</div>
                <div className="text-sm font-bold uppercase tracking-wider text-slate-400">Average Rating</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-6"
            >
              <div className="h-16 w-16 rounded-full bg-[var(--primary)]/5 flex items-center justify-center text-[var(--primary)]">
                <MessageCircle className="h-8 w-8" />
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-[var(--primary)]">100+</div>
                <div className="text-sm font-bold uppercase tracking-wider text-slate-400">Reviews</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-6"
            >
              <div className="h-16 w-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Award className="h-8 w-8" />
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-[var(--primary)]">Awarded</div>
                <div className="text-sm font-bold uppercase tracking-wider text-slate-400">Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="columns-1 md:columns-2 gap-6 space-y-6"
          >
            {reviews.map((review, idx) => (
              <motion.div key={idx} variants={item} className="break-inside-avoid">
                <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-[var(--gold)]/30 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">

                  {/* Decorative Quote */}
                  <div className="absolute top-6 right-8 text-slate-50 group-hover:text-[var(--gold)]/10 transition-colors duration-300">
                    <Quote className="h-24 w-24 transform scale-x-[-1]" />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                      ))}
                    </div>

                    <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                      "{review.text}"
                    </p>

                    <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                      <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-[var(--primary)] font-serif font-bold text-xl">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-[var(--primary)] text-lg">{review.name}</div>
                        <div className="text-xs text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                          {review.date} • <span className="text-emerald-500">Verified Client</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <div className="mt-24 bg-[var(--primary)] rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)]"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to start your journey?</h3>
              <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg">
                Join hundreds of happy clients. Whether you're buying, selling, or renting, we're here to help you achieve your property goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact-us">
                  <Button className="h-14 px-10 rounded-full bg-[var(--gold)] text-[var(--primary)] font-bold text-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                    Contact Us Today
                  </Button>
                </Link>
                <Button variant="outline" className="h-14 px-10 rounded-full border-white/20 text-white font-bold text-lg hover:bg-white/10">
                  Write a Review
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
