import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { CheckCircle2, Phone, Sparkles, Building2, Zap, ShieldCheck, ArrowRight, Layout, PenTool, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function SellingNewBuildPage() {
  const benefits = [
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Modern insulation and intelligent heating systems that attract today's eco-conscious investors."
    },
    {
      icon: ShieldCheck,
      title: "Full Warranties",
      description: "10-year structural guarantees providing absolute peace of mind for the next generation of owners."
    },
    {
      icon: Layout,
      title: "No Chain Required",
      description: "A blank canvas for potential buyers, often resulting in a significantly compressed sale timeline."
    },
    {
      icon: PenTool,
      title: "Contemporary Design",
      description: "Architectural excellence that resonates with modern lifestyles and high-value aesthetic standards."
    },
    {
      icon: Lightbulb,
      title: "Smart Integration",
      description: "Pre-wired for future-ready living, from high-speed connectivity to integrated automation."
    },
    {
      icon: Building2,
      title: "Pristine Condition",
      description: "The allure of being the very first to call a space 'home'—a powerful driver for premium pricing."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Cinematic Hero */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-[var(--primary)]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1460317442991-0ec239f3d6b9?q=80&w=2070"
            alt="Modern Architecture New Build"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="h-4 w-4 text-[var(--gold)]" />
              <span className="text-[var(--gold)] font-medium tracking-[0.3em] text-[10px] uppercase">
                Innovation in Living
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[1.1]">
              The Art of the <br />
              <span className="italic font-light text-[var(--gold)]">New Build</span>
            </h1>
            <p className="text-white/60 text-xl font-light leading-relaxed max-w-xl mb-12">
              Bespoke marketing strategies for contemporary masterpieces.
              We translate modern architecture into high-value opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="bg-[var(--gold)] hover:bg-white text-[var(--primary)] px-10 py-8 rounded-2xl font-bold transition-all shadow-[0_20px_40px_rgba(255,215,0,0.15)] group">
                <Phone className="h-4 w-4 mr-2" />
                Schedule Strategic Call
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Accent */}
        <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-[var(--gold)]/50 to-transparent" />
      </section>

      {/* Narrative Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">
                Specialist Insight for <br />
                <span className="italic font-light text-[var(--gold)]">Modern Estates</span>
              </h2>
              <div className="space-y-6">
                <p className="text-gray-500 text-lg font-light leading-relaxed">
                  Selling a new build requires more than just a listing; it requires a deep understanding of structural innovations, legal warranties, and the evolving desires of the modern buyer.
                </p>
                <p className="text-gray-500 text-lg font-light leading-relaxed">
                  Our dedicated specialist team bridges the gap between architectural vision and market reality, ensuring potential owners fully grasp the future-ready benefits of your property.
                </p>
              </div>

              <div className="mt-12 space-y-4">
                {[
                  'Bespoke cinematic walkthroughs & renders',
                  'Expert navigation of Help to Buy & structural warranties',
                  'Strategic placement in luxury architectural forums',
                  'High-intent buyer database matching'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-[var(--gold)]/10 flex items-center justify-center group-hover:bg-[var(--gold)] transition-colors duration-300">
                      <CheckCircle2 className="h-4 w-4 text-[var(--gold)] group-hover:text-white" />
                    </div>
                    <span className="text-gray-600 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-[var(--gold)]/5 rounded-[40px] translate-x-6 translate-y-6" />
              <div className="relative h-full rounded-[40px] overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2070"
                  alt="Contemporary Interior Design"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-gray-50/50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--gold)] mb-4">The New Build Advantage</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 font-medium leading-tight">Why Modern Homes Command <span className="italic">Premium Values</span></h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
                className="group p-10 bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--gold)] transition-colors duration-500">
                  <benefit.icon className="h-6 w-6 text-[var(--gold)] group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-serif text-gray-900 mb-4">{benefit.title}</h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-24 bg-[var(--primary)] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight">
            Position your modern masterpiece <br />
            <span className="italic font-light text-[var(--gold)]">for a successful transition.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-[var(--gold)] hover:bg-white text-[var(--primary)] px-12 py-8 rounded-2xl font-bold transition-all text-lg min-w-[280px]">
              Request Private Consultation
            </Button>
            <div className="flex items-center gap-4 text-white/40">
              <span className="h-px w-8 bg-white/20" />
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Or Connect Directly</span>
              <span className="h-px w-8 bg-white/20" />
            </div>
            <Link to="/contact-us">
              <Button variant="ghost" className="text-white hover:text-[var(--gold)] flex items-center gap-2 group">
                Connect with Advisor
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </section>
    </div>
  );
}
