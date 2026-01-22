import { Button } from '../shared'

export default function FounderStory() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-40 h-40 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
                    <span className="text-6xl">👨‍👩‍👧</span>
                  </div>
                  <p className="text-primary-700 font-medium">The Anderson Family</p>
                </div>
              </div>
            </div>

            {/* Floating quote */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-6 max-w-xs">
              <p className="text-gray-600 italic text-sm">
                "We created what we wished existed for our own daughter."
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 text-sm font-medium rounded-full mb-6">
              Our Story
            </span>
            <h2 className="heading-2 text-gray-900 mb-6">
              From Frustrated Parents to Baby Food Revolutionaries
            </h2>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                When our daughter Lily was ready for solids, we were shocked by what we found in the baby food aisle. Watered-down purees, hidden sugars, and barely any protein.
              </p>
              <p>
                As fitness enthusiasts, we knew nutrition was the foundation of health. Why should our baby eat any differently? She deserved the same quality ingredients we fed ourselves.
              </p>
              <p>
                So we started making our own: thick, nutrient-dense purees packed with organic proteins, healthy fats, and vegetables. Friends started asking for recipes. Then they asked us to make it for them.
              </p>
              <p className="font-medium text-gray-900">
                Hench Baby was born from a simple belief: every baby deserves food that helps them grow strong.
              </p>
            </div>
            <Button to="/about">
              Read Our Full Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
