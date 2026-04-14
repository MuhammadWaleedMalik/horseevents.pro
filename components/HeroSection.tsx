import EventCategories from './EventCategories';

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  smallTitle?: string;
  showCategories?: boolean;
}

export default function HeroSection({
  backgroundImage,
  title,
  subtitle,
  smallTitle,
  showCategories = true,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {smallTitle && (
          <p className="text-white/90 text-sm md:text-base font-medium mb-4 uppercase tracking-wider">
            {smallTitle}
          </p>
        )}

        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
          {title}
        </h1>

        {subtitle && (
          <p className="text-white/90 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}

        {showCategories && <EventCategories />}
      </div>
    </section>
  );
}
