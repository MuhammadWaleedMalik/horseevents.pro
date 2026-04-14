import EventCategories from './EventCategories';

interface BackgroundSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  smallTitle?: string;
  showCategories?: boolean;
}

export default function BackgroundSection({
  backgroundImage,
  title,
  subtitle,
  smallTitle,
  showCategories = false,
}: BackgroundSectionProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {smallTitle && (
          <p className="text-white/90 text-sm md:text-base font-medium mb-4 uppercase tracking-wider">
            {smallTitle}
          </p>
        )}

        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight max-w-4xl mx-auto">
          {title}
        </h2>

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
