import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  description?: string;
  gradient?: string;
}

export function PageHero({ title, description, gradient = "from-rose-600 to-rose-700" }: PageHeroProps) {
  return (
    <section className={`relative h-[300px] flex items-center justify-center bg-gradient-to-r ${gradient}`}>
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-xl max-w-2xl mx-auto">{description}</p>
        )}
      </div>
    </section>
  );
}
