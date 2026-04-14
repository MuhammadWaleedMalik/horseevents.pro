interface Feature {
  title: string;
  description: string;
  items?: string[];
  link?: {
    text: string;
    href: string;
  };
}

interface FeatureSectionProps {
  title: string;
  features: Feature[];
}

export default function FeatureSection({ title, features }: FeatureSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              {feature.items && (
                <ul className="space-y-3 mt-6">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {feature.link && (
                <a
                  href={feature.link.href}
                  className="inline-block text-blue-600 hover:text-blue-700 font-medium mt-4"
                >
                  {feature.link.text}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
