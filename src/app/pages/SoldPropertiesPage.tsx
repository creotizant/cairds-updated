import { PropertyCard } from '@/app/components/PropertyCard';
import { properties } from '@/data/properties';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Handshake, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Link } from 'react-router-dom';

export function SoldPropertiesPage() {
  // In a real app, this would be a separate list of sold properties
  const soldProperties = properties.slice(0, 6);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Cinematic Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden bg-[var(--primary)]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070"
            alt="Recently Sold Estates"
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <Sparkles className="h-4 w-4 text-[var(--gold)]" />
              <span className="text-[var(--gold)] font-medium tracking-[0.3em] text-[10px] uppercase">
                Proven Results
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1]">
              A Legacy of <br />
              <span className="italic font-light text-[var(--gold)]">Successful Transitions</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Showcasing our recent achievements in uniting extraordinary properties with their next custodians.
            </p>
          </motion.div>
        </div>

        {/* Floating Accent */}
        <div className="absolute bottom-0 right-0 w-1/4 h-px bg-gradient-to-l from-[var(--gold)]/30 to-transparent" />
      </section>

      {/* Results Narrative */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 text-center lg:text-left items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4 text-[var(--gold)]">
                <TrendingUp className="h-6 w-6" />
                <span className="text-3xl font-serif text-gray-900">98.5%</span>
              </div>
              <p className="text-gray-500 font-light text-sm uppercase tracking-widest">Avg Asking Price Achieved</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4 text-[var(--gold)]">
                <Handshake className="h-6 w-6" />
                <span className="text-3xl font-serif text-gray-900">12 Weeks</span>
              </div>
              <p className="text-gray-500 font-light text-sm uppercase tracking-widest">Average Time to Sale</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4 text-[var(--gold)]">
                <Award className="h-6 w-6" />
                <span className="text-3xl font-serif text-gray-900">500+</span>
              </div>
              <p className="text-gray-500 font-light text-sm uppercase tracking-widest">Estates Transferred Annually</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sold Properties Grid */}
      <section className="pb-32 bg-white relative overflow-hidden">
        {/* Subtle decorative blurs */}
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-gray-50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-[var(--gold)]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {soldProperties.map((property) => (
              <motion.div key={property.id} variants={item}>
                <PropertyCard
                  id={property.id}
                  title={property.title}
                  location={property.location}
                  price={property.price}
                  bedrooms={property.bedrooms}
                  bathrooms={property.bathrooms}
                  area={property.area}
                  type={property.type}
                  image={property.images[0]}
                  isLightSection={true}
                  isSold={true}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 text-center"
          >
            <h3 className="text-3xl font-serif text-gray-900 mb-8">Ready to list your estate?</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/selling-guide">
                <Button className="bg-[var(--gold)] hover:bg-white text-[var(--primary)] px-10 py-8 rounded-2xl font-bold transition-all shadow-xl group text-lg">
                  Request Private Valuation
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
