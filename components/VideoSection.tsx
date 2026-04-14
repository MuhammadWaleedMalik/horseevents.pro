interface VideoSectionProps {
  title: string;
  subtitle: string;
}

export default function VideoSection({ title, subtitle }: VideoSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          {title}
        </h2>
        <p className="text-gray-600 text-center mb-12 text-lg">{subtitle}</p>

        <div className="max-w-3xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <div className="absolute inset-0 bg-gray-200 rounded-lg shadow-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-600">Video Player Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
