import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { CheckCircle2, Phone, Sparkles, Target, BarChart3, Users2, Clock, BadgeCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function HouseSalesPage() {
  const services = [
    {
      icon: Target,
      title: "Accurate Valuations",
      description: "Our local experts provide realistic market valuations based on real-time data and historical comparable sales."
    },
    {
      icon: BarChart3,
      title: "Strategic Marketing",
      description: "Bespoke digital campaigns, professional cinematography, and placement in the world's leading luxury publications."
    },
    {
      icon: Users2,
      title: "Expert Negotiation",
      description: "Seasoned advisors who masterfully handle complex negotiations to secure the maximum value for your estate."
    },
    {
      icon: Clock,
      title: "Accompanied Viewings",
      description: "Every viewing is managed by a senior advisor, ensuring your property's unique story is told with precision."
    },
    {
      icon: BadgeCheck,
      title: "Sales Progression",
      description: "White-glove administrative support that manages every legal and financial detail through to successful completion."
    },
    {
      icon: CheckCircle2,
      title: "Regular Intelligence",
      description: "Weekly strategic briefings providing detailed feedback, market movement analysis, and campaign performance."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Cinematic Hero */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-[var(--primary)]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
            alt="Luxury Property Sale"
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
                The Art of Selling
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[1.1]">
              Elevate Your <br />
              <span className="italic font-light text-[var(--gold)]">Property Sale</span>
            </h1>
            <p className="text-white/60 text-xl font-light leading-relaxed max-w-xl mb-12">
              Transforming property transactions into seamless, profitable transitions
              through clinical expertise and exceptional marketing.
            </p>
            <Button className="bg-[var(--gold)] hover:bg-white text-[var(--primary)] px-10 py-8 rounded-2xl font-bold transition-all shadow-[0_20px_40px_rgba(255,215,0,0.15)] group">
              <Phone className="h-4 w-4 mr-2" />
              Request Private Valuation
            </Button>
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
                Your Legacy, <br />
                <span className="italic font-light text-[var(--gold)]">Our Mission</span>
              </h2>
              <div className="space-y-6">
                <p className="text-gray-500 text-lg font-light leading-relaxed">
                  We believe every property has a soul and a story. At Cairds, we don't just list properties; we curate market-leading presentations that speak directly to the world's most discerning buyers.
                </p>
                <p className="text-gray-500 text-lg font-light leading-relaxed">
                  Our clinical approach to market analysis ensures your estate is positioned with surgical precision, maximizing its perceived value and minimizing its time on the market.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="border-l-2 border-[var(--gold)]/20 pl-6">
                  <div className="text-3xl font-serif text-gray-900 mb-1">98.5%</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400">Avg Asking Price</div>
                </div>
                <div className="border-l-2 border-[var(--gold)]/20 pl-6">
                  <div className="text-3xl font-serif text-gray-900 mb-1">12 Weeks</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400">Avg Sale Time</div>
                </div>
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
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070"
                  alt="Premium Estate Presentation"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gray-50/50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 font-medium">The Platinum Service</h2>
            <p className="text-gray-500 font-light">Comprehensive support tailored for the luxury property market.</p>
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
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
                className="group p-10 bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--gold)] transition-colors duration-500">
                  <service.icon className="h-6 w-6 text-[var(--gold)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  {service.description}
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
            Ready to unlock the <br />
            <span className="italic font-light text-[var(--gold)]">true value of your estate?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-[var(--gold)] hover:bg-white text-[var(--primary)] px-12 py-8 rounded-2xl font-bold transition-all text-lg min-w-[280px]">
              Speak with a Partner
            </Button>
            <div className="flex items-center gap-4 text-white/40">
              <span className="h-px w-8 bg-white/20" />
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Or Explore Listings</span>
              <span className="h-px w-8 bg-white/20" />
            </div>
            <Link to="/properties">
              <Button variant="ghost" className="text-white hover:text-[var(--gold)] flex items-center gap-2 group">
                Browse Properties
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

// Support for the Link component from react-router-dom
import { Link } from 'react-router-dom';
