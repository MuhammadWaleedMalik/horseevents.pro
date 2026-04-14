import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">
              Getting started is easy. Create your account now.
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#signup"
                className="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Sign Up For Free
              </Link>
              <Link
                href="#signin"
                className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-50 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>

          <div className="space-y-4 text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Use and Privacy</h4>
              <Link href="#terms" className="block hover:text-gray-900 transition-colors">
                terms of use and privacy
              </Link>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Get in touch</h4>
              <a
                href="mailto:info@saddlebook.com"
                className="block hover:text-gray-900 transition-colors"
              >
                info@saddlebook.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-sm">ABOUT US</p>
          <p className="text-gray-600 text-sm">
            © 2026, SaddleBook, Inc. All rights reserved.
          </p>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-gray-800 transition-colors">
          Chat with us
        </button>
      </div>
    </footer>
  );
}
