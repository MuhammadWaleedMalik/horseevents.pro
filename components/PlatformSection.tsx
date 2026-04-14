import EventCategories from './EventCategories';

interface PlatformSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

export default function PlatformSection({
  backgroundImage,
  title,
  subtitle,
}: PlatformSectionProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <p className="text-white/90 text-sm md:text-base font-medium mb-4 uppercase tracking-wider">
          {title}
        </p>

        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight max-w-5xl mx-auto">
          {subtitle}
        </h2>

        <EventCategories />
      </div>
    </section>
  );
}
