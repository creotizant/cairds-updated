import { PropertyCard } from '@/app/components/PropertyCard';
import { getFeaturedProperties } from '@/data/properties';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function FeaturedProperties() {
  const featuredProperties = getFeaturedProperties();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="pt-32 pb-16 bg-white relative overflow-hidden">
      {/* Subtle decorative elements for a clean look */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-[var(--gold)]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/5 h-1/5 bg-gray-100 blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-4 w-4 text-[var(--gold)]" />
              <span className="text-[var(--gold)] font-medium tracking-[0.3em] text-[10px] uppercase">
                Curated Selection
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-[1.1]">
              Extraordinary <br />
              <span className="italic font-light opacity-90 text-[var(--gold)]">Living Spaces</span>
            </h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              Discover our handpicked portfolio of the most prestigious estates,
              defined by architectural excellence and timeless elegance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/properties">
              <Button
                variant="outline"
                className="group border-gray-200 bg-white hover:bg-[var(--gold)] hover:border-[var(--gold)] text-gray-900 hover:text-[var(--primary)] rounded-full px-8 py-6 transition-all duration-500 font-semibold shadow-sm"
              >
                Explore Full Portfolio
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {featuredProperties.slice(0, 3).map((property) => (
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
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center md:hidden mt-12">
          <Link to="/properties">
            <Button className="bg-[var(--gold)] hover:bg-white text-[var(--primary)] font-bold px-10 py-6 rounded-2xl transition-all shadow-[0_10px_20px_rgba(255,215,0,0.1)]">
              View All Properties
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Subtle border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
