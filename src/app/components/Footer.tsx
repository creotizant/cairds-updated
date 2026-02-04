import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, ArrowRight, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0B] text-white relative overflow-hidden">
      {/* Decorative architectural line - more prominent to separate from CTA */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

          {/* Brand & Narrative */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/" className="inline-block mb-8">
                <div className="text-4xl font-serif font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent drop-shadow-md">
                  Cairds
                </div>
              </Link>
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-md mb-10">
                Pioneering the standard of luxury real estate in the United Kingdom.
                Our legacy is built on the pursuit of architectural excellence and
                the art of refined living.
              </p>

              <div className="flex gap-4">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Linkedin, label: 'LinkedIn' }
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[var(--gold)] hover:border-[var(--gold)]/50 hover:bg-[var(--gold)]/5 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--gold)] mb-8">Navigation</h3>
            <ul className="space-y-4">
              {[
                { label: 'Properties', path: '/properties' },
                { label: 'About Us', path: '/about-us' },
                { label: 'New Homes', path: '/new-build-homes' },
                { label: 'Reviews', path: '/reviews' },
                { label: 'Contact', path: '/contact-us' }
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-white/40 hover:text-white transition-colors font-light text-sm tracking-wide">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--gold)] mb-8">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <MapPin className="h-5 w-5 text-white/20 mt-0.5 group-hover:text-[var(--gold)] transition-colors" />
                <span className="text-white/40 text-sm font-light leading-relaxed">
                  12 Berkeley Square,<br />Mayfair, London W1J 6BQ
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone className="h-5 w-5 text-white/20 group-hover:text-[var(--gold)] transition-colors" />
                <span className="text-white/40 text-sm font-light">+44 20 7123 4567</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="h-5 w-5 text-white/20 group-hover:text-[var(--gold)] transition-colors" />
                <span className="text-white/40 text-sm font-light">estates@cairds.co.uk</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--gold)] mb-8">The Private Journal</h3>
            <p className="text-white/40 text-sm font-light mb-6 leading-relaxed">
              Curated market insights and exclusive off-market opportunities.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Private Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--gold)]/30 transition-colors"
              />
              <button className="absolute right-2 top-2 w-10 h-10 rounded-xl bg-[var(--gold)] flex items-center justify-center text-[var(--primary)] hover:bg-white transition-colors group">
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-white/20 text-[11px] uppercase tracking-widest font-medium">
              &copy; {currentYear} Cairds Luxury Estates. All rights reserved.
            </p>
            <p className="text-white/20 text-[11px] uppercase tracking-widest font-medium">
              Developed by <a href="https://www.creotizant.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)] transition-colors">Creotizant</a>
            </p>
          </div>

          <div className="flex gap-10">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
              <Link key={item} to="#" className="text-white/20 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-medium">
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
            <span className="text-white/20 text-[11px] uppercase tracking-widest font-medium">Platform Status: Optimal</span>
          </div>
        </div>
      </div>

      {/* Decorative vertical divider line */}
      <div className="absolute right-[15%] top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />
    </footer>
  );
}
