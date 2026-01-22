import { Link } from 'react-router-dom'
import { Card } from '../shared'

const stages = [
  {
    stage: 1,
    title: 'Stage 1',
    ageRange: '4-6 months',
    description: 'Smooth single-ingredient purees for first tastes',
    color: 'from-green-400 to-green-600',
    bgColor: 'bg-green-50',
    emoji: '🥣',
    features: ['Single ingredients', 'Ultra-smooth texture', 'Iron-fortified'],
  },
  {
    stage: 2,
    title: 'Stage 2',
    ageRange: '6-9 months',
    description: 'Blended combos with new textures and proteins',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    emoji: '🥗',
    features: ['2-3 ingredients', 'Thicker texture', 'Added proteins'],
  },
  {
    stage: 3,
    title: 'Stage 3',
    ageRange: '9+ months',
    description: 'Chunky meals for developing chewing skills',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    emoji: '🍲',
    features: ['Complex combos', 'Soft chunks', 'Full meals'],
  },
]

export default function ShopByStage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">
            Meal Plans for Every Stage
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our meal plans are designed to grow with your baby, introducing new textures and flavours at the right time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stages.map((stage) => (
            <Link
              key={stage.stage}
              to={`/plans?stage=${stage.stage}`}
              className="group"
            >
              <Card hover className="h-full">
                <div className={`${stage.bgColor} rounded-xl p-6 mb-6 text-center`}>
                  <span className="text-6xl">{stage.emoji}</span>
                </div>

                <div className="text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${stage.color} mb-3`}>
                    {stage.ageRange}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {stage.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {stage.description}
                  </p>

                  <ul className="space-y-2">
                    {stage.features.map((feature, index) => (
                      <li key={index} className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
