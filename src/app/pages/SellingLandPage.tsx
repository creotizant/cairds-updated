import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { MapPin, TrendingUp, FileText, Sparkles, Phone, ArrowRight, TreePine, Mountain, Landmark, Building, Shovel, Factory } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function SellingLandPage() {
  const specializedServices = [
    {
      icon: MapPin,
      title: "Strategic Location Analysis",
      description: "Comprehensive evaluation of land geography and local market dynamics to unlock maximum development potential."
    },
    {
      icon: FileText,
      title: "Planning & Regulatory Guidance",
      description: "Expert navigation through planning permissions, local policies, and development constraints to de-risk your sale."
    },
    {
      icon: TrendingUp,
      title: "Exclusive Developer Network",
      description: "Direct access to our curated network of the nation's most prestigious developers and high-net-worth investors."
    }
  ];

  const landTypes = [
    { icon: TreePine, label: "Residential Plots" },
    { icon: Landmark, label: "Development Sites" },
    { icon: Mountain, label: "Agricultural Land" },
    { icon: Factory, label: "Brownfield Sites" },
    { icon: Building, label: "Commercial Land" },
    { icon: Shovel, label: "Strategic Garden Plots" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Cinematic Hero */}
      <section className="relative h-[650px] flex items-center overflow-hidden bg-[var(--primary)]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070"
            alt="Majestic Aerial Landscape"
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
                Foundation of Value
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[1.1]">
              Potential into <br />
              <span className="italic font-light text-[var(--gold)]">Reality</span>
            </h1>
            <p className="text-white/60 text-xl font-light leading-relaxed max-w-xl mb-12">
              Bespoke land sales strategies designed to maximize the value of your asset
              through precision marketing and elite developer connections.
            </p>
            <Button className="bg-[var(--gold)] hover:bg-white text-[var(--primary)] px-10 py-8 rounded-2xl font-bold transition-all shadow-[0_20px_40px_rgba(255,215,0,0.15)] group">
              <Phone className="h-4 w-4 mr-2" />
              Arrange Strategic Consultation
            </Button>
          </motion.div>
        </div>

        {/* Floating Accent */}
        <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-[var(--gold)]/30 to-transparent" />
      </section>

      {/* Narrative Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-square order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-[var(--gold)]/5 rounded-[40px] -translate-x-6 translate-y-6" />
              <div className="relative h-full rounded-[40px] overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070"
                  alt="Beautiful Landscape with Potential"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">
                Specialist Insight <br />
                <span className="italic font-light text-[var(--gold)]">Legacy Focused</span>
              </h2>
              <div className="space-y-6">
                <p className="text-gray-500 text-lg font-light leading-relaxed">
                  Selling land is an intricate art that demands a deep understanding of planning frameworks, development feasibility, and buyer psychology. At Cairds, we treat every parcel as a unique asset with its own path to maximum value.
                </p>
                <p className="text-gray-500 text-lg font-light leading-relaxed">
                  Whether you possess a small residential plot or a multi-acre development site, our advisors provide the clinical expertise required to navigate the complex sale process with confidence.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-[var(--gold)]/20 transition-all duration-300">
                  <div className="text-[var(--gold)] font-serif text-3xl mb-2">25+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Years Experience</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-[var(--gold)]/20 transition-all duration-300">
                  <div className="text-[var(--gold)] font-serif text-3xl mb-2">500+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Sites Marketed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gray-50/50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--gold)] mb-4">Strategic Framework</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 font-medium">Bespoke Land Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group p-10 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--gold)] transition-colors duration-500">
                  <service.icon className="h-7 w-7 text-[var(--gold)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-4 group-hover:text-[var(--gold)] transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-[40px] p-12 lg:p-20 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-serif text-gray-900 mb-12 text-center lg:text-left">Types of Land We Represent</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                {landTypes.map((type, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="group flex flex-col items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[var(--gold)]/10 transition-colors">
                      <type.icon className="h-5 w-5 text-gray-300 group-hover:text-[var(--gold)] transition-colors" />
                    </div>
                    <span className="text-xs font-medium text-gray-500 group-hover:text-gray-900 transition-colors">{type.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Background Accent */}
            <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-gray-50 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-24 bg-[var(--primary)] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight">
            Unlock the extraordinary value <br />
            <span className="italic font-light text-[var(--gold)]">within your land.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-[var(--gold)] hover:bg-white text-[var(--primary)] px-12 py-8 rounded-2xl font-bold transition-all text-lg min-w-[280px]">
              Request Confidential Call
            </Button>
            <div className="flex items-center gap-4 text-white/40">
              <span className="h-px w-8 bg-white/20" />
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold font-serif">The Land Collective</span>
              <span className="h-px w-8 bg-white/20" />
            </div>
            <Link to="/contact-us">
              <Button variant="ghost" className="text-white hover:text-[var(--gold)] flex items-center gap-2 group">
                Speak with Specialist
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
