import Link from 'next/link';

interface CTASectionProps {
  backgroundImage: string;
  title: string;
  description?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export default function CTASection({
  backgroundImage,
  title,
  description,
  primaryButton,
  secondaryButton,
}: CTASectionProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
          {title}
        </h2>

        {description && (
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {description}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          {primaryButton && (
            <Link
              href={primaryButton.href}
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg"
            >
              {primaryButton.text}
            </Link>
          )}
          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 text-lg"
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
