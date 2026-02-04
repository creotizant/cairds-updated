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
  Train,
  Home,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

export default function AshteadOfficePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* Cinematic Hero - Ashtead Village */}
      <section className="relative h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.cairds.co.uk/media/ashtead_estate_agents-e1472044835398.jpg"
            alt="Ashtead Village"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--gold)]">
            <MapPin className="h-3 w-3 fill-current" />
            <span>Prime Village Location</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-8">
            Ashtead Sales & <span className="italic text-[var(--gold)]">Lettings</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Perfectly located on The Street in the centre of the village, just a brisk walk from Ashtead train station.
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
                <span className="text-[var(--gold)] font-serif italic text-2xl">Expert Service</span>
                <h2 className="text-4xl font-serif font-bold text-[var(--primary)] mt-2 mb-8">
                  Unbeatable Local Knowledge
                </h2>

                <div className="prose prose-lg text-slate-600 space-y-6 mb-10">
                  <p>
                    Perfectly located on The Street in the centre of the village, and just a brisk walk from Ashtead train station, is our new Ashtead sales and lettings office. The expert team has unbeatable local knowledge when it comes to Ashtead and the surrounding areas and is ready to help with sales, valuations, and rental opportunities.
                  </p>
                  <p>
                    Even if you have your heart set on a move to Ashtead, did you know that there are some popular locations in the area that may also suit your criteria? We also cover lettings and sales throughout areas such as Leatherhead, Banstead, Malden Rushett, Fetcham, Langley Vale, and Tadworth.
                  </p>
                  <p>
                    Whether you want to put your home on the market or are planning a move to the area, get in touch with the team at our Ashtead office who will provide a seamless and personal service.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <Home className="h-6 w-6 text-[var(--primary)] shrink-0" />
                    <div>
                      <h3 className="font-bold text-[var(--primary)] text-sm mb-1">Sales & Lettings</h3>
                      <p className="text-xs text-slate-500">Comprehensive property services under one roof.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <Users className="h-6 w-6 text-[var(--primary)] shrink-0" />
                    <div>
                      <h3 className="font-bold text-[var(--primary)] text-sm mb-1">Personal Service</h3>
                      <p className="text-xs text-slate-500">Seamless and tailored support for every client.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Property in Ashtead */}
              <div className="mb-12">
                <h3 className="text-3xl font-serif font-bold text-[var(--primary)] mb-6">Property in Ashtead</h3>
                <div className="prose prose-lg text-slate-600 space-y-6 mb-8">
                  <p>
                    The property market in Ashtead is mainly made up of detached and semi-detached homes, with a sprinkling of bungalows. The residential areas around the train station, often referred to as Lower Ashtead, are filled with wonderful semi-detached houses. South of the village are quaint cottages, picturesque Edwardian villas, and huge detached period homes.
                  </p>
                  <p>
                    The rental market in Ashtead is buoyant and potential occupants can get their hands on anything from the grandest six-bedroom character home to tastefully decorated one-bedroom apartments close to transport links. Whether renting or buying, Ashtead is an enviable location for commuters.
                  </p>
                </div>

                {/* Living in Ashtead */}
                <div className="bg-[var(--primary)] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--gold)] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-serif font-bold mb-4">Living in Ashtead</h3>
                    <div className="space-y-4 text-white/80 leading-relaxed text-lg">
                      <p>
                        You would never know that the picturesque village of Ashtead, nestled on the western slopes of the North Downs, is just to the east of the M25 and a 40-minute train journey into Central London. Living in Ashtead combines the faultless blend of rustic village life, with the ability to head to ‘the big smoke’ whenever you wish.
                      </p>
                      <p>
                        With village life centered around local shops, several pubs, and four churches, community spirit is strong in Ashtead. Favoured by families and professionals alike, there are aspects of living in Ashtead that will appeal to everybody.
                      </p>
                    </div>
                    <Link to="/contact-us">
                      <Button className="bg-[var(--gold)] text-[var(--primary)] font-bold hover:bg-white border-0 mt-8">
                        Contact Ashtead Office
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Areas Covered Badge List */}
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                <h4 className="font-bold text-[var(--primary)] text-sm uppercase tracking-wider mb-4">Areas We Cover</h4>
                <div className="flex flex-wrap gap-2">
                  {["Leatherhead", "Banstead", "Malden Rushett", "Fetcham", "Langley Vale", "Tadworth"].map((area, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-white hover:bg-[var(--gold)] hover:text-[var(--primary)] transition-colors text-slate-600 font-medium py-1.5 px-3 shadow-sm border border-slate-100">
                      {area}
                    </Badge>
                  ))}
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
                      23 The Street,<br />
                      Ashtead,<br />
                      Surrey, KT21 1AA
                    </p>
                  </div>

                  <div className="h-px bg-slate-100 w-full"></div>

                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-3">Contact</p>
                    <div className="space-y-3">
                      <a href="tel:01372888888" className="flex items-center gap-3 text-sm text-slate-600 hover:text-[var(--primary)] transition-colors">
                        <Phone className="h-4 w-4 text-[var(--gold)]" />
                        <span className="font-semibold">Tel:</span> 01372 888 888
                      </a>
                      <a href="mailto:ashtead@cairds.co.uk" className="flex items-center gap-3 text-sm text-slate-600 hover:text-[var(--primary)] transition-colors">
                        <Mail className="h-4 w-4 text-[var(--gold)]" />
                        ashtead@cairds.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="h-px bg-slate-100 w-full"></div>

                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-2">Opening Hours</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex justify-between">
                        <span>Mon - Thu</span>
                        <span className="font-medium">9:00am - 6:30pm</span>
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
                    title="Ashtead Office Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.102638847614!2d-0.2980644840742398!3d51.31154797960352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875e5b0e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2s23%20The%20St%2C%20Ashtead%20KT21%201AA!5e0!3m2!1sen!2suk!4v1640000000000!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button className="w-full bg-[var(--primary)] text-white font-bold h-10 rounded-xl hover:bg-[var(--primary)]/90 text-sm">
                    View Sales
                  </Button>
                  <Button className="w-full bg-[var(--primary)] text-white font-bold h-10 rounded-xl hover:bg-[var(--primary)]/90 text-sm">
                    View Lettings
                  </Button>
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>

    </div>
  );
}
