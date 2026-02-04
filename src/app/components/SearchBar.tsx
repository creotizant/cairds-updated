import { Search } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

interface SearchBarProps {
  onSearch?: (location: string, priceRange: string, propertyType: string) => void;
  variant?: 'hero' | 'inline';
}

export function SearchBar({ onSearch, variant = 'inline' }: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const location = formData.get('location') as string;
    const priceRange = formData.get('priceRange') as string;
    const propertyType = formData.get('propertyType') as string;

    if (onSearch) {
      onSearch(location, priceRange, propertyType);
    }
  };

  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit} className="w-full">
        <div className="bg-[#1A1A1C]/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-2.5 flex flex-col md:flex-row gap-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
          <div className="flex-1 flex items-center px-6 py-2 border-r border-white/5">
            <div className="flex-1">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--gold)] block mb-1">Estate Location</label>
              <input
                type="text"
                name="location"
                placeholder="Where should we look?"
                className="w-full border-none outline-none text-[15px] text-white placeholder:text-white/30 bg-transparent font-light"
              />
            </div>
          </div>

          <div className="flex-1 flex items-center px-6 py-2 border-r border-white/5 md:max-w-[200px]">
            <div className="flex-1">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--gold)] block mb-1">Price Range</label>
              <select
                name="priceRange"
                className="w-full border-none outline-none text-[15px] text-white bg-transparent appearance-none cursor-pointer font-light"
              >
                <option value="" className="bg-[#1A1A1C]">Any price</option>
                <option value="0-1000000" className="bg-[#1A1A1C]">Under £1M</option>
                <option value="1000000-2000000" className="bg-[#1A1A1C]">£1M - £2M</option>
                <option value="2000000-3000000" className="bg-[#1A1A1C]">£2M - £3M</option>
                <option value="3000000+" className="bg-[#1A1A1C]">Over £3M</option>
              </select>
            </div>
          </div>

          <div className="flex-1 flex items-center px-6 py-2 md:max-w-[200px]">
            <div className="flex-1">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--gold)] block mb-1">Estate Type</label>
              <select
                name="propertyType"
                className="w-full border-none outline-none text-[15px] text-white bg-transparent appearance-none cursor-pointer font-light"
              >
                <option value="" className="bg-[#1A1A1C]">Any type</option>
                <option value="Estate" className="bg-[#1A1A1C]">Estate</option>
                <option value="Manor" className="bg-[#1A1A1C]">Manor</option>
                <option value="Castle" className="bg-[#1A1A1C]">Castle</option>
                <option value="Villa" className="bg-[#1A1A1C]">Villa</option>
                <option value="Townhouse" className="bg-[#1A1A1C]">Townhouse</option>
              </select>
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="rounded-xl bg-[var(--gold)] hover:bg-white text-[var(--primary)] font-bold px-10 h-16 transition-all duration-300 transform active:scale-95 shadow-[0_10px_20px_rgba(255,215,0,0.15)] group"
          >
            <Search className="h-4 w-4 mr-2 group-hover:translate-x-0.5 transition-transform" />
            Discover
          </Button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          type="text"
          name="location"
          placeholder="Location"
          className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/30"
        />
        <select
          name="priceRange"
          className="flex-1 px-3 py-2 border border-white/10 rounded-md text-sm bg-white/5 text-white"
        >
          <option value="" className="bg-gray-900">Any price</option>
          <option value="0-1000000" className="bg-gray-900">Under £1M</option>
          <option value="1000000-2000000" className="bg-gray-900">£1M - £2M</option>
          <option value="2000000-3000000" className="bg-gray-900">£2M - £3M</option>
          <option value="3000000+" className="bg-gray-900">Over £3M</option>
        </select>
        <select
          name="propertyType"
          className="flex-1 px-3 py-2 border border-white/10 rounded-md text-sm bg-white/5 text-white"
        >
          <option value="" className="bg-gray-900">Any type</option>
          <option value="Estate" className="bg-gray-900">Estate</option>
          <option value="Manor" className="bg-gray-900">Manor</option>
          <option value="Castle" className="bg-gray-900">Castle</option>
          <option value="Villa" className="bg-gray-900">Villa</option>
          <option value="Townhouse" className="bg-gray-900">Townhouse</option>
        </select>
        <Button type="submit" className="bg-[var(--gold)] hover:bg-white text-[var(--primary)] font-semibold">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </form>
  );
}
