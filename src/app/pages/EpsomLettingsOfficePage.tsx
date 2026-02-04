import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  Users,
  Building,
  Key
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

export default function EpsomLettingsOfficePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* Cinematic Hero */}
      <section className="relative h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000"
            alt="Epsom Lettings"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--gold)]">
            <ShieldCheck className="h-3 w-3 fill-current" />
            <span>ARLA Propertymark Protected</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-8">
            Lettings & <span className="italic text-[var(--gold)]">Management</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Located on the High Street, run by a professional team of lettings experts with unrivaled local knowledge.
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
                <span className="text-[var(--gold)] font-serif italic text-2xl">Expert Advice</span>
                <h2 className="text-4xl font-serif font-bold text-[var(--primary)] mt-2 mb-8">
                  Trusted Lettings Service
                </h2>

                <div className="prose prose-lg text-slate-600 space-y-6 mb-10">
                  <p>
                    Whether you are looking to let your home in Epsom and the surrounding areas, or wanting to rent a new home, the team at this branch has unrivalled knowledge of the local area and will be able to help you through the entire process.
                  </p>
                  <p>
                    Epsom and the surrounding areas are a fantastic place to rent, for both families and professionals, and the market is extremely buoyant. Due to unparalleled transport links to London, stunning countryside, and some of the best schools in the UK, it is no wonder than many head to our Epsom lettings and management office for advice on moving to Epsom and the surrounding towns and villages.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <ShieldCheck className="h-6 w-6 text-[var(--primary)] shrink-0" />
                    <div>
                      <h3 className="font-bold text-[var(--primary)] text-sm mb-1">ARLA Members</h3>
                      <p className="text-xs text-slate-500">Adhering to strict codes of conduct for your protection.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <Key className="h-6 w-6 text-[var(--primary)] shrink-0" />
                    <div>
                      <h3 className="font-bold text-[var(--primary)] text-sm mb-1">Buoyant Market</h3>
                      <p className="text-xs text-slate-500">Expert navigation of the fast-moving rental sector.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Property to Rent Section */}
              <div className="mb-12">
                <h3 className="text-3xl font-serif font-bold text-[var(--primary)] mb-6">Property to Rent in Epsom</h3>
                <div className="prose prose-lg text-slate-600 space-y-6">
                  <p>
                    There are some fantastic opportunities for those looking to rent in Epsom and the surrounding areas. Epsom itself is a fantastic location; 36 minutes from London Waterloo and with the North Downs on the doorstep.
                  </p>
                  <p>
                    Those looking to rent in Epsom are spoilt for choice. For young professionals, there are some affordable apartments and flats within walking distance of the train station and the busy market town. Families will also benefit from a diverse range of semi-detached and detached homes, with off-street parking and spacious gardens.
                  </p>
                  <p>
                    Properties to let with Cairds range from studio flats to five-bedroom mansions. So, whatever your budget and taste, browsing our properties will show you the wide variety available.
                  </p>
                </div>
              </div>

              {/* Letting Your Home Section */}
              <div className="mb-12 bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100">
                <h3 className="text-3xl font-serif font-bold text-[var(--primary)] mb-6">Letting Your Home in Epsom</h3>
                <div className="prose prose-lg text-slate-600 space-y-6">
                  <p>
                    Heading abroad? In-between properties? There are a number of reasons as to why you might want to let your home. At Cairds, we understand how important it is to have expert advice on all aspects of the lettings process, especially if it is your first time. Our knowledge of the industry and second-to-none customer service mean that your home is in perfect hands.
                  </p>
                  <p>
                    Furthermore, as a member of ARLA, we work within a code of conduct designed to protect the landlord and ensure we meet professional standards, meaning you have extra peace of mind.
                  </p>
                </div>
                <div className="mt-8">
                  <Link to="/landlords">
                    <Button className="bg-[var(--primary)] text-white font-bold h-12 rounded-xl hover:bg-[var(--primary)]/90">
                      Landlord Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* CTA Banner */}
              <div className="bg-[var(--primary)] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2">Looking to Rent?</h3>
                    <p className="text-white/70 max-w-md">
                      Register with us today to be the first to know about new properties.
                    </p>
                  </div>
                  <Link to="/contact-us">
                    <Button className="bg-[var(--gold)] text-[var(--primary)] font-bold hover:bg-white border-0">
                      Register Now
                    </Button>
                  </Link>
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
                    <h3 className="font-serif font-bold text-[var(--primary)] text-lg">Lettings Office</h3>
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
                      <a href="tel:01372731966" className="flex items-center gap-3 text-sm text-slate-600 hover:text-[var(--primary)] transition-colors">
                        <Phone className="h-4 w-4 text-[var(--gold)]" />
                        <span className="font-semibold">Lettings:</span> 01372 731 966
                      </a>
                      <a href="mailto:lettings@cairds.co.uk" className="flex items-center gap-3 text-sm text-slate-600 hover:text-[var(--primary)] transition-colors">
                        <Mail className="h-4 w-4 text-[var(--gold)]" />
                        lettings@cairds.co.uk
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
                  Search Rental Properties
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
