import { Button, Card } from '../components/shared'
import bertSmiling from '../../bert_smiling.png'

const deliveryHighlights = [
  {
    title: 'Cold-Chain Packed',
    description: 'Insulated boxes with ice packs keep every meal frozen and safe from kitchen to doorstep.',
  },
  {
    title: 'Flexible Frequency',
    description: 'Weekly, bi-weekly, or monthly deliveries that grow with your baby\'s stage.',
  },
  {
    title: 'Pause Anytime',
    description: 'Travel week? Skip, pause, or reschedule without any extra fees.',
  },
]

const deliveryDetails = [
  {
    label: 'Delivery Window',
    value: '2-4 business days after your order ships.',
  },
  {
    label: 'Tracking',
    value: 'Real-time tracking link sent via email and SMS.',
  },
  {
    label: 'Storage',
    value: 'Arrives frozen. Store in freezer up to 3 months.',
  },
  {
    label: 'Free Shipping',
    value: 'Included on all meal plans, no minimums.',
  },
]

const priorityPerks = [
  {
    title: 'Tomorrow-Friendly',
    description: 'Select priority delivery at checkout to see next-day options in your area.',
  },
  {
    title: 'Live Availability',
    description: 'We confirm the earliest arrival date before you place your order.',
  },
  {
    title: 'Cold-Chain Guaranteed',
    description: 'Priority shipments stay frozen with extra ice packs and insulated liners.',
  },
]

export default function Delivery() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-cream to-secondary-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-6">
                Delivery
              </span>
              <h1 className="heading-1 text-gray-900 mb-6">
                Fresh Meals, <span className="text-primary-600">Right on Time</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We pack every Tiny Tummies box with care so your baby's meals arrive frozen, safe, and ready
                for the week ahead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/plans" size="lg">
                  Choose a Plan
                </Button>
                <Button to="/how-it-works" variant="secondary" size="lg">
                  See How It Works
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                <img
                  src={bertSmiling}
                  alt="Bert smiling with a Tiny Tummies delivery box"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md">
                <p className="text-primary-700 font-medium">Bert approves the delivery!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Delivery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">
              Need Food for Tomorrow?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Priority delivery helps last-minute parents get meals fast. We'll show the soonest arrival date during checkout.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {priorityPerks.map((perk) => (
              <Card key={perk.title} hover className="text-center">
                <h3 className="font-bold text-gray-900 mb-3">{perk.title}</h3>
                <p className="text-sm text-gray-600">{perk.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reliable delivery that keeps nutrition at its best from our kitchen to yours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deliveryHighlights.map((item) => (
              <Card key={item.title} hover className="text-center">
                <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="heading-2 text-gray-900 mb-4">
                Delivery Details
              </h2>
              <p className="text-lg text-gray-600">
                We ship nationwide with temperature-controlled packaging so every box arrives ready for the freezer.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {deliveryDetails.map((detail) => (
                <Card key={detail.label}>
                  <p className="text-xs uppercase tracking-wider text-primary-600 font-semibold mb-2">
                    {detail.label}
                  </p>
                  <p className="text-gray-700 font-medium">{detail.value}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">
            Ready for Your First Box?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Choose a plan and we'll handle the rest. Your baby's meals are just a delivery away.
          </p>
          <Button to="/plans" variant="white" size="lg">
            Explore Meal Plans
          </Button>
        </div>
      </section>
    </div>
  )
}
