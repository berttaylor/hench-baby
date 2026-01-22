import { Button } from '../shared'

const steps = [
  {
    number: '01',
    title: 'Choose Your Plan',
    description: 'Pick a curated meal plan that matches your baby\'s stage and needs.',
    icon: '🥣',
  },
  {
    number: '02',
    title: 'We Deliver Fresh',
    description: 'Your meals ship free to your door, packed with love (and ice packs).',
    icon: '🚚',
  },
  {
    number: '03',
    title: 'Happy Mealtimes',
    description: 'Watch your little one discover delicious, nutritious food.',
    icon: '😊',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started is easy. Choose your perfect plan in under 2 minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-primary-200" />
              )}

              <div className="relative bg-white rounded-2xl p-8 text-center shadow-sm">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl">{step.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button to="/plans" size="lg">
            Explore Meal Plans
          </Button>
        </div>
      </div>
    </section>
  )
}
