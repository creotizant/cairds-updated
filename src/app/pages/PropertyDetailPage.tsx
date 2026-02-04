import { useParams, Link } from 'react-router-dom';
import { getPropertyById, properties } from '@/data/properties'; // Importing properties to show similar ones
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import {
  MapPin, Bed, Bath, Square, Calendar, Share2, Heart,
  Check, ChevronLeft, ChevronRight, Phone, Mail, ArrowRight
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PropertyCard } from '@/app/components/PropertyCard';

const imageMap: { [key: string]: string } = {
  "luxury victorian mansion exterior": "https://images.unsplash.com/photo-1665865008858-9238cdb838c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWN0b3JpYW4lMjBtYW5zaW9uJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY5ODEwMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "luxury mansion interior living": "https://images.unsplash.com/photo-1768346564414-3e1ffb751e30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYW5zaW9uJTIwaW50ZXJpb3IlMjBsaXZpbmd8ZW58MXx8fHwxNzY5ODEwMTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "luxury mansion kitchen": "https://images.unsplash.com/photo-1635111300313-5b29bb9a8a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYW5zaW9uJTIwa2l0Y2hlbnxlbnwxfHx8fDE3Njk4MTAxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "luxury mansion bedroom": "https://images.unsplash.com/photo-1690832307571-d78b5d346651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYW5zaW9uJTIwYmVkcm9vbXxlbnwxfHx8fDE3Njk4MTAxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "luxury mansion garden": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1080",
  "modern waterfront home exterior": "https://images.unsplash.com/photo-1760517464773-d18e4c25bd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXRlcmZyb250JTIwaG9tZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTgxMDA1NXww&ixlib=rb-4.1.0&q=80&w=1080",
  "modern luxury home interior": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1080",
  "modern kitchen luxury": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1080",
  "modern bedroom ocean view": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1080",
  "waterfront property pool": "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1080",
  "historic country manor exterior": "https://images.unsplash.com/photo-1760627593331-01e2edd90c73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGNvdW50cnklMjBtYW5vciUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTgxMDA1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  "manor house interior": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1080",
  "country estate grounds": "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=1080",
  "manor house dining room": "https://images.unsplash.com/photo-1574643156929-51fa098b0394?w=1080",
  "country estate stables": "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1080"
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export function PropertyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const property = getPropertyById(id || '');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-3xl shadow-xl">
          <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-2">Property Not Found</h2>
          <p className="text-slate-500 mb-6">The property you are looking for does not exist or has been removed.</p>
          <Link to="/properties">
            <Button className="rounded-full bg-[var(--primary)] text-white hover:bg-[var(--gold)] hover:text-[var(--primary)] text-lg px-8">
              Browse Collection
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Find similar properties (excluding current)
  const similarProperties = properties
    .filter(p => p.id !== property.id && (p.type === property.type || Math.abs(p.price - property.price) < 500000))
    .slice(0, 3);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[var(--gold)] selection:text-[var(--primary)]">

      {/* Property Hero / Gallery */}
      <div className="relative h-[60vh] lg:h-[75vh] bg-[var(--primary)] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={imageMap[property.images[currentImageIndex]] || property.images[currentImageIndex]}
              alt={`${property.title}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/90 via-transparent to-transparent lg:via-[var(--primary)]/20" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation & Controls */}
        <div className="absolute inset-0 container mx-auto px-4 lg:px-8 flex flex-col justify-between py-6">
          <div className="flex justify-between items-start pt-20">
            <Link to="/properties">
              <Button variant="ghost" className="bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-md rounded-full border border-white/10 group">
                <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Collection
              </Button>
            </Link>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsFavorite(!isFavorite)}
                className={`rounded-full backdrop-blur-md border border-white/10 ${isFavorite ? 'bg-[var(--gold)] text-[var(--primary)] border-[var(--gold)]' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex justify-between items-end pb-8">
            {/* Title Overlay for Hero */}
            <div className="text-white max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-[var(--gold)] text-[var(--primary)] hover:bg-[var(--gold)] uppercase tracking-wider text-[10px] py-1 px-3 border-0">
                  {property.type}
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-md uppercase tracking-wider text-[10px] py-1 px-3 border-0">
                  {property.availability}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium leading-tight mb-2">
                {property.title}
              </h1>
              <div className="flex items-center text-white/80 text-lg font-light">
                <MapPin className="h-5 w-5 mr-2 text-[var(--gold)]" />
                {property.location}
              </div>
            </div>

            {/* Gallery Controls */}
            <div className="hidden lg:flex gap-2">
              <Button onClick={prevImage} size="icon" variant="outline" className="rounded-full h-12 w-12 border-white/20 bg-black/20 text-white hover:bg-white hover:text-[var(--primary)] hover:border-white transition-colors">
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button onClick={nextImage} size="icon" variant="outline" className="rounded-full h-12 w-12 border-white/20 bg-black/20 text-white hover:bg-white hover:text-[var(--primary)] hover:border-white transition-colors">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:-mt-20 relative z-10">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16">

          {/* Left Column: Details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Key Stats Bar */}
            <div className="bg-white rounded-[24px] shadow-xl p-8 mb-10 flex flex-wrap justify-between items-center gap-8 border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-slate-50 rounded-full flex items-center justify-center text-[var(--primary)]">
                  <Bed className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--primary)]">{property.bedrooms}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Bedrooms</div>
                </div>
              </div>
              <div className="w-px h-12 bg-slate-100 hidden sm:block"></div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-slate-50 rounded-full flex items-center justify-center text-[var(--primary)]">
                  <Bath className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--primary)]">{property.bathrooms}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Bathrooms</div>
                </div>
              </div>
              <div className="w-px h-12 bg-slate-100 hidden sm:block"></div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-slate-50 rounded-full flex items-center justify-center text-[var(--primary)]">
                  <Square className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--primary)]">{property.area.toLocaleString()}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Square Ft</div>
                </div>
              </div>
              <div className="w-px h-12 bg-slate-100 hidden sm:block"></div>
              <div className="text-right">
                <div className="text-sm text-slate-400 font-medium mb-1">Price</div>
                <div className="text-3xl font-serif font-bold text-[var(--gold)]">{formatPrice(property.price)}</div>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-lg text-slate-600 max-w-none mb-12">
              <h3 className="text-2xl font-serif font-bold text-[var(--primary)] mb-6">About this property</h3>
              <p className="whitespace-pre-line leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
              <h3 className="text-2xl font-serif font-bold text-[var(--primary)] mb-8">Property Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.amenities.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-[var(--gold)]/30 transition-colors">
                    <div className="h-6 w-6 rounded-full bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)] flex-shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Thumbnail Grid for Desktop */}
            <div className="hidden lg:grid grid-cols-4 gap-4 mb-20">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden group ${currentImageIndex === idx ? 'ring-2 ring-[var(--gold)]' : ''}`}
                >
                  <ImageWithFallback
                    src={imageMap[img] || img}
                    alt={`Gallery ${idx}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors ${currentImageIndex === idx ? 'bg-transparent' : ''}`} />
                </button>
              ))}
            </div>

            {/* Similar Properties */}
            <div className="border-t border-slate-100 pt-12">
              <h3 className="text-2xl font-serif font-bold text-[var(--primary)] mb-8">You may also like</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {similarProperties.map(p => (
                  <PropertyCard key={p.id} {...p} image={p.images[0]} isLightSection={true} />
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Sticky Contact */}
          <div className="lg:pl-8">
            <div className="sticky top-32 space-y-6">

              {/* Agent Card */}
              <div className="bg-white rounded-[24px] shadow-xl border border-slate-100 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 bg-slate-200 rounded-full overflow-hidden">
                    {/* Placeholder Agent Image */}
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                      alt="Agent"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-[var(--primary)]">James Anderson</div>
                    <div className="text-sm text-[var(--gold)] font-medium">Senior Sales Negotiator</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <Button className="w-full rounded-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 h-10 gap-2">
                    <Phone className="h-4 w-4" /> 01372 743 033
                  </Button>
                  <Button variant="outline" className="w-full rounded-full border-slate-200 text-slate-600 hover:text-[var(--primary)] h-10 gap-2">
                    <Mail className="h-4 w-4" /> Email Agent
                  </Button>
                </div>

                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
                  <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400 font-medium tracking-widest">Enquire Now</span></div>
                </div>

                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full h-12 rounded-xl bg-slate-50 border border-slate-100 px-4 text-sm focus:ring-1 focus:ring-[var(--gold)] focus:outline-none" />
                  <input type="email" placeholder="Email Address" className="w-full h-12 rounded-xl bg-slate-50 border border-slate-100 px-4 text-sm focus:ring-1 focus:ring-[var(--gold)] focus:outline-none" />
                  <input type="tel" placeholder="Phone Number" className="w-full h-12 rounded-xl bg-slate-50 border border-slate-100 px-4 text-sm focus:ring-1 focus:ring-[var(--gold)] focus:outline-none" />
                  <textarea rows={4} placeholder="I'm interested in this property..." className="w-full rounded-xl bg-slate-50 border border-slate-100 p-4 text-sm focus:ring-1 focus:ring-[var(--gold)] focus:outline-none resize-none"></textarea>

                  <Button className="w-full rounded-full bg-[var(--gold)] text-[var(--primary)] font-bold hover:bg-[var(--gold)]/90 h-12">
                    Request Viewing
                  </Button>
                </form>
              </div>

              {/* Office Info Mini Card */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                <p className="text-slate-500 text-sm mb-4">Property Reference: <span className="font-mono text-slate-900 font-bold">#{id?.padStart(6, '0')}</span></p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Marketed by Cairds Epsom</p>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
