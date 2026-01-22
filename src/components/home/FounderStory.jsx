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
                "We wished someone would just tell us what to feed her."
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 text-sm font-medium rounded-full mb-6">
              Our Story
            </span>
            <h2 className="heading-2 text-gray-900 mb-6">
              From Overwhelmed Parents to Meal Plan Creators
            </h2>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                When our daughter Lily was ready for solids, we were completely overwhelmed. Every book gave different advice. Every website contradicted the last. We spent more time researching than actually feeding her.
              </p>
              <p>
                We wished someone would just tell us what to feed her and when. A simple plan we could trust. So we created one, working with a paediatric nutritionist to design the perfect weaning journey.
              </p>
              <p>
                Friends started asking for our meal plans. Then they asked us to make the food too. The rest, as they say, is history.
              </p>
              <p className="font-medium text-gray-900">
                Tiny Tummies was born from a simple belief: every parent deserves a helping hand, and every baby deserves the best possible start.
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
