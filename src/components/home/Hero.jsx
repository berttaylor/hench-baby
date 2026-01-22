import { Button } from '../shared'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-cream to-secondary-50">
      <div className="container-custom py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-6">
              Organic & Lovingly Made
            </span>
            <h1 className="heading-1 text-gray-900 mb-6">
              Nourishing Little Ones,{' '}
              <span className="text-primary-600">One Spoonful at a Time</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Discover our curated meal plans of organic baby food, thoughtfully designed for every stage of your little one's weaning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button to="/plans" size="lg">
                Explore Meal Plans
              </Button>
              <Button to="/how-it-works" variant="secondary" size="lg">
                See How It Works
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">USDA Organic</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">No Added Sugar</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Pediatrician Approved</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-30 blur-3xl" />
              <div className="absolute inset-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full opacity-50" />

              {/* Main image placeholder */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-4/5 h-4/5 bg-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-5xl">🥦</span>
                    </div>
                    <p className="text-gray-500 text-sm">Delicious Purees</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-10 -left-4 bg-white rounded-2xl shadow-lg p-3 animate-bounce">
                <span className="text-2xl">🥣</span>
              </div>
              <div className="absolute bottom-20 -right-4 bg-white rounded-2xl shadow-lg p-3 animate-bounce delay-300">
                <span className="text-2xl">🥕</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
