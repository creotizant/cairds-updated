import { Hero } from '@/app/components/Hero';
import { FeaturedProperties } from '@/app/components/FeaturedProperties';
import { Building2, Shield, Award, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion'; // Changed from 'motion/react' to 'framer-motion' as 'motion/react' is not a standard import path for framer-motion
import { Button } from '@/app/components/ui/button';
import { Link } from 'react-router-dom';

export function HomePage() {
  const features = [
    {
      icon: Building2,
      title: "Premium Properties",
      description: "Exclusive access to the most prestigious estates across the United Kingdom's finest locations."
    },
    {
      icon: Shield,
      title: "Trusted Service",
      description: "A legacy of over 25 years defined by integrity, discretion, and unparalleled market expertise."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Consistently recognized as the benchmark for excellence in luxury property acquisitions."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "A dedicated collective of senior advisors committed to your unique real estate journey."
    }
  ];

  return (
    <div className="bg-white">
      <Hero />
      <FeaturedProperties />

      {/* Features Section - Minimalist & Refined */}
      <section className="pt-16 pb-32 bg-gray-50/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-8 bg-[var(--gold)]" />
                  <span className="text-[var(--gold)] font-medium tracking-[0.3em] text-[10px] uppercase">
                    Our Philosophy
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">
                  The Gold Standard <br />
                  <span className="italic font-light text-[var(--gold)]">of Property</span>
                </h2>
                <p className="text-gray-500 font-light leading-relaxed mb-10">
                  Cairds represents more than real estate; we represent a lifestyle of
                  distinction and a commitment to architectural heritage.
                </p>
                <Button variant="ghost" className="p-0 text-gray-900 hover:text-[var(--gold)] transition-colors group font-semibold tracking-wide">
                  Learn About Our History
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-[var(--gold)] transition-all duration-500">
                      <feature.icon className="h-5 w-5 text-[var(--gold)] group-hover:text-[var(--primary)] transition-colors" />
                    </div>
                    <span className="text-gray-100 font-serif text-4xl font-bold group-hover:text-[var(--gold)]/10 transition-colors">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-serif text-gray-900 mb-3 group-hover:text-[var(--gold)] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Cinematic & Bold */}
      <section className="relative py-32 overflow-hidden bg-[var(--primary)]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070"
            alt="Luxury Architecture"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/90 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1]">
                Begin Your Next <br />
                <span className="italic font-light text-[var(--gold)]">Chapter with Us</span>
              </h2>
              <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
                Whether you are acquiring a historic estate or listing a modern masterpiece,
                our advisors are ready to guide you with precision and care.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="bg-[var(--gold)] hover:bg-white text-[var(--primary)] px-10 py-8 rounded-2xl font-bold transition-all shadow-[0_20px_40px_rgba(255,215,0,0.1)] group">
                  Schedule Private Call
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link to="/contact-us">
                  <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white px-10 py-8 rounded-2xl font-semibold transition-all backdrop-blur-sm">
                    Connect with an Advisor
                  </Button>
                </Link>
              </div>

              <div className="mt-16 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[var(--primary)] overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Advisor" />
                    </div>
                  ))}
                </div>
                <p className="text-white/40 text-sm italic font-light">
                  Join 500+ private clients who trust Cairds annually.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Ornament */}
        <div className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none" />

        {/* Subtle bottom border to separate from Footer */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
      </section>
    </div>
  );
}
