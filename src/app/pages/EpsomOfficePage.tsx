import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  Star,
  Users
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

export default function EpsomOfficePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* Cinematic Hero - Epsom High Street */}
      <section className="relative h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.cairds.co.uk/media/IMG_2492-e1550157915994.jpg"
            alt="Epsom High Street"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--gold)]">
            <MapPin className="h-3 w-3 fill-current" />
            <span>Regional Hub</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-8">
            Epsom Sales <span className="italic text-[var(--gold)]">Office</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Conveniently located near Epsom railway station and the vibrant town centre. Our award-winning team is here to help seven days a week.
          </p>
        </div>
      </section>

      {/* Main Content & Sidebar Layout */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-20">

            {/* Left Column: Content */}
            <div>
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100 mb-12">
                <span className="text-[var(--gold)] font-serif italic text-2xl">Welcome</span>
                <h2 className="text-4xl font-serif font-bold text-[var(--primary)] mt-2 mb-8">
                  Your Local Property Experts
                </h2>

                <div className="prose prose-lg text-slate-600 space-y-6 mb-10">
                  <p>
                    Conveniently located near Epsom railway station and the vibrant town centre, our Epsom office is open six days a week. Our friendly team is able to help with those looking to sell, buy, rent or let within Epsom and the surrounding areas.
                  </p>
                  <p>
                    There is a plethora of properties for sale in Epsom to suit all tastes and budgets. Epsom is a great place for families looking for detached homes with large gardens and off-street parking. It is also a fantastic location for those seeking grand period properties, with avenues of Edwardian, Victorian, Georgian, and Art Deco properties. Buyers can also head to the outskirts for character-rich country homes.
                  </p>
                  <p>
                    For smaller families, couples, and professionals, there are many smaller properties and flats on the market. Whether you are seeking a contemporary new build apartment or a two-bed traditional terraced home, Epsom will have something to suit not only your taste, but your budget.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <ShieldCheck className="h-6 w-6 text-[var(--primary)] shrink-0" />
                    <div>
                      <h3 className="font-bold text-[var(--primary)] text-sm mb-1">Award Winning</h3>
                      <p className="text-xs text-slate-500">Consistently recognized for exceptional service standards.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <Users className="h-6 w-6 text-[var(--primary)] shrink-0" />
                    <div>
                      <h3 className="font-bold text-[var(--primary)] text-sm mb-1">Local Experts</h3>
                      <p className="text-xs text-slate-500">Our team lives and breathes the Epsom property market.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Gallery & Location */}
              <div className="space-y-8">
                <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-[400px]">
                  <img
                    src="https://www.cairds.co.uk/media/thumbnail_IMG_0628-1024x768.jpg"
                    alt="Epsom Office Interior"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="bg-[var(--primary)] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                      <h3 className="text-2xl font-serif font-bold mb-2">Living in Epsom?</h3>
                      <p className="text-white/70 max-w-md">
                        The Borough of Epsom & Ewell is championed for its second-to-none transport links and highly regarded schools.
                      </p>
                    </div>
                    <Link to="/contact-us">
                      <Button className="bg-[var(--gold)] text-[var(--primary)] font-bold hover:bg-white border-0">
                        Get in Touch
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key Info Sidebar */}
            <aside className="space-y-8">

              {/* Contact Card */}
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 bg-[var(--primary)] rounded-2xl flex items-center justify-center text-[var(--gold)]">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-[var(--primary)] text-lg">Visit Us</h3>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Open 6 Days a Week</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-1">Address</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      128-130 High Street,<br />
                      Epsom, Surrey,<br />
                      KT19 8BT
                    </p>
                  </div>

                  <div className="h-px bg-slate-100 w-full"></div>

                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-3">Contact</p>
                    <div className="space-y-3">
                      <a href="tel:01372743033" className="flex items-center gap-3 text-sm text-slate-600 hover:text-[var(--primary)] transition-colors">
                        <Phone className="h-4 w-4 text-[var(--gold)]" />
                        <span className="font-semibold">Sales:</span> 01372 743 033
                      </a>
                      <a href="tel:01372731966" className="flex items-center gap-3 text-sm text-slate-600 hover:text-[var(--primary)] transition-colors">
                        <Phone className="h-4 w-4 text-[var(--gold)]" />
                        <span className="font-semibold">Lettings:</span> 01372 731 966
                      </a>
                      <a href="mailto:homes@cairds.co.uk" className="flex items-center gap-3 text-sm text-slate-600 hover:text-[var(--primary)] transition-colors">
                        <Mail className="h-4 w-4 text-[var(--gold)]" />
                        homes@cairds.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="h-px bg-slate-100 w-full"></div>

                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-2">Opening Hours</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex justify-between">
                        <span>Mon - Thu</span>
                        <span className="font-medium">9:00am - 7:00pm</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Fri - Sat</span>
                        <span className="font-medium">9:00am - 6:00pm</span>
                      </li>
                      <li className="flex justify-between text-slate-400">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden h-40 w-full mb-4 opacity-90 hover:opacity-100 transition-opacity ring-1 ring-slate-200">
                  <iframe
                    title="Epsom Office Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.019624232624!2d-0.2700196842290192!3d51.33437097960709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875e9b2e2e2e2e3%3A0x2e2e2e2e2e2e2e2e!2s128-130%20High%20St%2C%20Epsom%20KT19%208BT!5e0!3m2!1sen!2suk!4v1640000000000!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <Button className="w-full bg-[var(--primary)] text-white font-bold h-12 rounded-xl hover:bg-[var(--primary)]/90">
                  Book Valuation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

            </aside>

          </div>
        </div>
      </section>

    </div>
  );
}
