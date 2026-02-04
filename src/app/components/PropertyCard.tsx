import { Link } from 'react-router-dom';
import { Heart, MapPin, Bed, Bath, Square, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  image: string;
  isLightSection?: boolean;
  isSold?: boolean;
}

const imageMap: { [key: string]: string } = {
  "luxury victorian mansion exterior": "https://images.unsplash.com/photo-1665865008858-9238cdb838c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWN0b3JpYW4lMjBtYW5zaW9uJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY5ODEwMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "modern waterfront home exterior": "https://images.unsplash.com/photo-1760517464773-d18e4c25bd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXRlcmZyb250JTIwaG9tZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTgxMDA1NXww&ixlib=rb-4.1.0&q=80&w=1080",
  "historic country manor exterior": "https://images.unsplash.com/photo-1760627593331-01e2edd90c73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHtoaXN0b3JpYyUyMGNvdW50cnklMjBtYW5vciUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTgxMDA1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  "modern glass house exterior": "https://images.unsplash.com/photo-1761158497156-c8f202a07b42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMGhvdXNlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY5ODEwMDU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "georgian townhouse exterior": "https://images.unsplash.com/photo-1762423780017-f9964b9070ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9yZ2lhbiUyMHRvd25ob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTgxMDA1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  "coastal cliff house exterior": "https://images.unsplash.com/photo-1756230768239-8d418d823e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2FzdGFsJTIwY2xpZmYlMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTgxMDA1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  "scottish castle exterior": "https://images.unsplash.com/photo-1562663859-6880b3ae658d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY290dGlzaCUyMGNhc3RsZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTgxMDA1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  "modernist villa exterior": "https://images.unsplash.com/photo-1707648496492-38255a8f1877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm5pc3QlMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTgxMDA1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
};

export function PropertyCard({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  type,
  image,
  isLightSection = false,
  isSold = false
}: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const imageUrl = imageMap[image] || image;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-[32px] overflow-hidden transition-all duration-500 border ${isLightSection
        ? 'bg-white border-gray-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)]'
        : 'bg-[#1A1A1C]/40 backdrop-blur-xl border-white/10 hover:border-[var(--gold)]/30'
        }`}
    >
      <Link to={`/property/${id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 ${isSold ? 'grayscale-[0.5]' : 'grayscale-[0.1] group-hover:grayscale-0'
              }`}
          />

          {/* Persistent Dark Gradient for Text Visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

          <div className="absolute top-6 left-6 flex items-center gap-2">
            <span className="backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border bg-white/10 border-white/20 text-white">
              {type}
            </span>
            {isSold && (
              <span className="bg-[var(--gold)] text-[var(--primary)] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
                Sold
              </span>
            )}
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-3 w-3 text-[var(--gold)]" />
              <span className="text-xs font-light tracking-wide text-white/80">{location}</span>
            </div>
            <h3 className="font-serif text-2xl leading-tight mb-4 text-white group-hover:text-[var(--gold)] transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-4 border-t pt-4 text-white/60 border-white/10">
              <div className="flex items-center gap-1.5">
                <Bed className="h-4 w-4" />
                <span className="text-xs">{bedrooms}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bath className="h-4 w-4" />
                <span className="text-xs">{bathrooms}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Square className="h-4 w-4" />
                <span className="text-xs whitespace-nowrap">{area.toLocaleString()} ft²</span>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className={`p-6 flex items-center justify-between border-t backdrop-blur-md ${isLightSection ? 'bg-white/90 border-gray-100' : 'bg-[#0A0A0B]/60 border-white/5'
        }`}>
        <p className="text-xl font-serif text-[var(--gold)] font-medium tracking-tight">
          {formatPrice(price)}
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all border ${isFavorite
              ? 'bg-[var(--gold)] border-[var(--gold)] text-[var(--primary)]'
              : isLightSection
                ? 'bg-gray-50 border-gray-100 text-gray-400 hover:text-gray-900 hover:border-gray-200'
                : 'bg-white/5 border-white/10 text-white/40 hover:text-white hover:border-white/20'
              }`}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          <Link to={`/property/${id}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border ${isLightSection
              ? 'border-[var(--gold)]/20 bg-[var(--gold)]/5 text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-white'
              : 'border-[var(--gold)]/20 bg-[var(--gold)]/10 text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--primary)]'
              }`}>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
