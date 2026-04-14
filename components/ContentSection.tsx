interface ContentSectionProps {
  title: string;
  subtitle?: string;
  content?: React.ReactNode;
  backgroundImage?: string;
  darkMode?: boolean;
}

export default function ContentSection({
  title,
  subtitle,
  content,
  backgroundImage,
  darkMode = false,
}: ContentSectionProps) {
  const bgClass = backgroundImage
    ? 'relative bg-cover bg-center'
    : darkMode
    ? 'bg-gray-900'
    : 'bg-white';

  const textColor = darkMode || backgroundImage ? 'text-white' : 'text-gray-900';
  const subtitleColor = darkMode || backgroundImage ? 'text-white/80' : 'text-gray-600';

  return (
    <section className={`py-20 ${bgClass}`} style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}>
      {backgroundImage && <div className="absolute inset-0 bg-black/60"></div>}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <p className={`text-sm md:text-base font-medium mb-4 uppercase tracking-wider ${subtitleColor}`}>
              {subtitle}
            </p>
          )}
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-8 ${textColor}`}>
            {title}
          </h2>
          {content && <div className={`${subtitleColor} space-y-4`}>{content}</div>}
        </div>
      </div>
    </section>
  );
}
