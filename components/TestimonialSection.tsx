interface TestimonialSectionProps {
  backgroundImage: string;
  quote: string;
  title: string;
}

export default function TestimonialSection({
  backgroundImage,
  quote,
  title,
}: TestimonialSectionProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/90 text-sm md:text-base font-medium mb-8 uppercase tracking-wider text-center">
            {title}
          </p>

          <blockquote className="text-white text-xl md:text-2xl lg:text-3xl font-medium text-center leading-relaxed">
            "{quote}"
          </blockquote>
        </div>
      </div>
    </section>
  );
}
