import { useState } from 'react'
import { Button, Card } from '../components/shared'

const steps = [
  {
    number: '01',
    title: 'Choose Your Products',
    description: 'Browse our selection of 20+ organic purees and meals. Filter by stage, type, or nutritional focus to find the perfect options for your baby.',
    details: [
      'Select from Stage 1, 2, or 3 products',
      'Mix and match different types',
      'See nutrition info for each item',
      'Minimum 6 items per box',
    ],
    icon: '🛒',
    color: 'from-green-400 to-green-600',
  },
  {
    number: '02',
    title: 'We Prepare & Ship',
    description: 'Our team carefully prepares your order with love. Each item is flash-frozen to lock in freshness and nutrients, then packed with care.',
    details: [
      'Flash-frozen for maximum freshness',
      'Eco-friendly packaging',
      'Insulated boxes with ice packs',
      'Free shipping on all orders',
    ],
    icon: '📦',
    color: 'from-blue-400 to-blue-600',
  },
  {
    number: '03',
    title: 'Deliver & Enjoy',
    description: 'Your box arrives at your doorstep, ready to feed your growing baby. Simply thaw, warm, and serve nutrient-dense goodness!',
    details: [
      'Delivered to your door',
      'Easy thaw-and-serve',
      'Store in freezer up to 3 months',
      'Portion-controlled servings',
    ],
    icon: '🍽️',
    color: 'from-purple-400 to-purple-600',
  },
]

const deliveryInfo = [
  {
    icon: '🚚',
    title: 'Free Shipping',
    description: 'On all orders over 6 items',
  },
  {
    icon: '📅',
    title: 'Flexible Schedule',
    description: 'Weekly, bi-weekly, or monthly',
  },
  {
    icon: '❄️',
    title: 'Temperature Controlled',
    description: 'Arrives frozen and fresh',
  },
  {
    icon: '🔄',
    title: 'Easy Modifications',
    description: 'Skip, pause, or cancel anytime',
  },
]

const faqs = [
  {
    question: 'How do I store the food?',
    answer: 'All our products arrive frozen and can be stored in your freezer for up to 3 months. Once thawed, refrigerate and use within 48 hours.',
  },
  {
    question: 'Is your food really organic?',
    answer: 'Yes! All our products are USDA Certified Organic. We source from trusted farms and every ingredient is verified organic.',
  },
  {
    question: 'Can I customize my subscription?',
    answer: 'Absolutely! You have full control over your box contents. Swap items, adjust quantities, or change your delivery schedule anytime.',
  },
  {
    question: 'What if my baby doesn\'t like something?',
    answer: 'We offer a happiness guarantee! If your baby doesn\'t enjoy a product, we\'ll replace it or give you a credit for your next order.',
  },
  {
    question: 'How do I know which stage is right for my baby?',
    answer: 'Stage 1 (4-6 months) is for first foods - smooth, single-ingredient purees. Stage 2 (6-9 months) introduces more textures and combinations. Stage 3 (9+ months) has soft chunks for developing chewing skills.',
  },
  {
    question: 'Are your products tested for heavy metals?',
    answer: 'Yes! Every batch is third-party tested for heavy metals and contaminants. Safety is our top priority, and we exceed industry standards.',
  },
]

export default function HowItWorks() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-cream to-secondary-50 py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-gray-900 mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started with Hench Baby is easy. Build your custom box in under 2 minutes and start feeding your baby the nutrition they deserve.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                } gap-8 md:gap-16 items-center`}
              >
                {/* Visual */}
                <div className="flex-1">
                  <div className="relative">
                    <div className={`w-full aspect-square max-w-md mx-auto bg-gradient-to-br ${step.color} rounded-3xl p-8 flex items-center justify-center`}>
                      <span className="text-[120px]">{step.icon}</span>
                    </div>
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-600">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="heading-3 text-gray-900 mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">
              Delivery Details
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make it easy to get nutritious food to your doorstep.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryInfo.map((info, index) => (
              <Card key={index} className="text-center">
                <span className="text-4xl mb-4 block">{info.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-sm text-gray-600">{info.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of parents raising strong, healthy babies with Hench Baby.
          </p>
          <Button to="/build" variant="white" size="lg">
            Build Your First Box
          </Button>
        </div>
      </section>
    </div>
  )
}
