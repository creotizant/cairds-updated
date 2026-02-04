import { motion } from 'framer-motion';
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, Sparkles, Building2 } from "lucide-react";

export function ContactPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const offices = [
    {
      name: "Epsom Sales",
      address: "128-130 High Street, Epsom, Surrey, KT19 8BT",
      phone: "01372 743033",
      email: "homes@cairds.co.uk",
      hours: "Mon-Thu: 9am–7pm\nFri-Sat: 9am–6pm",
      image: "https://www.cairds.co.uk/media/Epsom-Estate-Agents-e1550484327927.jpg"
    },
    {
      name: "Epsom Lettings",
      address: "128-130 High Street, Epsom, Surrey, KT19 8BT",
      phone: "01372 731966",
      email: "lettings@cairds.co.uk",
      hours: "Mon-Thu: 9am–7pm\nFri-Sat: 9am–6pm",
      image: "https://www.cairds.co.uk/media/epsomlettings.jpg"
    },
    {
      name: "Ashtead Office",
      address: "23 The Street, Ashtead, Surrey, KT21 1AA",
      phone: "01372 888 888",
      email: "ashtead@cairds.co.uk",
      hours: "Mon-Thu: 9am–6:30pm\nFri-Sat: 9am–6pm",
      image: "https://www.cairds.co.uk/media/ashtead_estate_agents-e1472044835398.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Cinematic Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[var(--primary)]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            alt="Contact Cairds"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="h-5 w-5 text-[var(--gold)]" />
              <span className="text-[var(--gold)] font-medium tracking-[0.3em] text-sm uppercase">
                Get in Touch
              </span>
              <Sparkles className="h-5 w-5 text-[var(--gold)]" />
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
              We're Here to <span className="text-[var(--gold)] italic">Help</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Whether you're looking to buy, sell, rent, or let, our expert team is ready to assist you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">

            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="border-none shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden rounded-3xl">
                <CardContent className="p-8 md:p-12">
                  <div className="mb-8">
                    <h2 className="text-3xl font-serif text-[var(--primary)] mb-2">Send us a Message</h2>
                    <p className="text-gray-500">Fill out the form below and we'll get back to you shortly.</p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">First Name</label>
                        <Input className="h-12 bg-gray-50 border-gray-200 focus:border-[var(--gold)] focus:ring-[var(--gold)] rounded-xl" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Last Name</label>
                        <Input className="h-12 bg-gray-50 border-gray-200 focus:border-[var(--gold)] focus:ring-[var(--gold)] rounded-xl" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <Input type="email" className="h-12 bg-gray-50 border-gray-200 focus:border-[var(--gold)] focus:ring-[var(--gold)] rounded-xl" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                        <Input type="tel" className="h-12 bg-gray-50 border-gray-200 focus:border-[var(--gold)] focus:ring-[var(--gold)] rounded-xl" placeholder="07123 456789" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Subject</label>
                      <select className="flex h-12 w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Please select...</option>
                        <option value="selling">Selling a Property</option>
                        <option value="buying">Buying a Property</option>
                        <option value="letting">Letting a Property</option>
                        <option value="renting">Renting a Property</option>
                        <option value="valuation">Request a Valuation</option>
                        <option value="other">Other Enquiry</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Message</label>
                      <Textarea
                        className="min-h-[150px] bg-gray-50 border-gray-200 focus:border-[var(--gold)] focus:ring-[var(--gold)] rounded-xl resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <Button className="w-full h-14 text-lg bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white rounded-xl shadow-lg shadow-[var(--primary)]/20 transition-all hover:scale-[1.01]">
                      <Send className="w-5 h-5 mr-2" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Offices Column */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[var(--primary)] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-12 bg-[var(--gold)]/10 rounded-bl-full -mr-10 -mt-10" />
                <h3 className="text-2xl font-serif mb-6 flex items-center gap-3">
                  <span className="p-2 bg-white/10 rounded-lg"><Phone className="h-5 w-5 text-[var(--gold)]" /></span>
                  Quick Contact
                </h3>
                <div className="space-y-4 relative z-10">
                  <p className="text-white/80">Immediate assistance during office hours:</p>
                  <a href="tel:01372743033" className="block text-3xl font-serif text-[var(--gold)] hover:text-white transition-colors">
                    01372 743 033
                  </a>
                  <a href="mailto:homes@cairds.co.uk" className="flex items-center gap-2 text-white/90 hover:text-[var(--gold)] transition-colors">
                    <Mail className="h-4 w-4" /> homes@cairds.co.uk
                  </a>
                </div>
              </motion.div>

              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-[var(--primary)] px-2">Our Offices</h3>
                {offices.map((office, idx) => (
                  <motion.div
                    key={office.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    className="group bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:border-[var(--gold)]/30 hover:shadow-xl transition-all"
                  >
                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                        <img src={office.image} alt={office.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h4 className="font-serif font-bold text-[var(--primary)]">{office.name}</h4>
                        <div className="text-sm text-gray-500 flex items-start gap-1.5">
                          <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[var(--gold)]" />
                          <span className="line-clamp-2">{office.address}</span>
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 flex-shrink-0 text-[var(--gold)]" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 flex-shrink-0 text-[var(--gold)]" />
                          <span className="text-xs whitespace-pre-line">{office.hours.split('\n')[0]}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-lg h-64 border border-gray-200"
              >
                <iframe
                  title="Cairds Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.019624232624!2d-0.2700196842290192!3d51.33437097960709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875e9b2e2e2e2e3%3A0x2e2e2e2e2e2e2e2e!2s128-130%20High%20St%2C%20Epsom%20KT19%208BT!5e0!3m2!1sen!2suk!4v1640000000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
