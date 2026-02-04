import { SearchBar } from '@/app/components/SearchBar';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronDown, MapPin, Star } from 'lucide-react';

export function Hero() {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/properties');
  };

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[var(--primary)] pt-20">
      {/* Background with Ambient Motion */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
            alt="Luxury Architecture"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Sophisticated Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-transparent to-transparent z-10" />

        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] z-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-[var(--gold)]/60" />
                <span className="text-[var(--gold)] font-medium tracking-[0.3em] text-[10px] uppercase">
                  Excellence in Real Estate
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-[100px] font-serif text-white leading-[0.9] mb-8 tracking-tight">
                Refining the <br />
                <span className="italic font-light text-white/90">Art of Living</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-white/50 mb-12 max-w-lg leading-relaxed font-light"
            >
              A bespoke collection of the UK's most prestigious estates,
              curated for those who appreciate the finer details of life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-2xl relative"
            >
              <div className="absolute -inset-4 bg-[var(--gold)]/5 rounded-[40px] blur-2xl pointer-events-none" />
              <SearchBar variant="hero" onSearch={handleSearch} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-12 flex items-center gap-8 text-white/40"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-serif text-white/80">25+</span>
                <span className="text-[10px] uppercase tracking-widest leading-none mt-1">Years Experience</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif text-white/80">£2.4B+</span>
                <span className="text-[10px] uppercase tracking-widest leading-none mt-1">Properties Sold</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif text-white/80">98%</span>
                <span className="text-[10px] uppercase tracking-widest leading-none mt-1">Client Satisfaction</span>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block relative h-[600px]">
            {/* Abstract Floating UI Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="absolute top-10 right-0 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-64 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--gold)]/20">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" alt="Agent" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Expert Consultation</p>
                  <p className="text-[var(--gold)] text-[10px] font-bold uppercase tracking-tighter">Availability: High</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-[var(--gold)]"
                  />
                </div>
                <p className="text-white/40 text-[9px] uppercase tracking-widest">Market Status: Bullish</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="absolute bottom-10 -left-10 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl max-w-[280px]"
            >
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center">
                  <Star className="text-[var(--gold)] w-5 h-5 fill-[var(--gold)]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium mb-1">Featured Listing</h4>
                  <p className="text-white/40 text-xs truncate">The Kensington Penthouse & Spa</p>
                </div>
              </div>
            </motion.div>

            {/* Dynamic Border Element */}
            <div className="absolute inset-10 border border-white/5 rounded-[40px] pointer-events-none" />
            <div className="absolute inset-20 border border-white/5 rounded-[40px] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30"
      >
        <div className="w-px h-12 bg-gradient-to-b from-[var(--gold)] via-[var(--gold)]/50 to-transparent" />
        <span className="text-[8px] uppercase tracking-[0.4em] text-white/40 font-bold">Discover More</span>
      </motion.div>

      {/* Decorative Ornaments */}
      <div className="absolute right-0 bottom-0 top-0 w-1/4 bg-white/[0.01] pointer-events-none" />
      <div className="absolute left-10 top-1/2 -rotate-90 origin-left -translate-y-1/2 hidden xl:block">
        <span className="text-white/5 text-[10px] tracking-[0.8em] uppercase font-black whitespace-nowrap">
          The Platinum Standard of British Real Estate
        </span>
      </div>
    </section>
  );
}
