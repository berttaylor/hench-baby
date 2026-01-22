const credentials = [
  {
    icon: '👩‍⚕️',
    title: 'Pediatrician Developed',
    description: 'Every recipe is created with guidance from board-certified pediatricians.',
  },
  {
    icon: '🔬',
    title: 'Nutritionist Approved',
    description: 'Balanced macros and micronutrients for optimal growth and development.',
  },
  {
    icon: '🏆',
    title: 'Award Winning',
    description: 'Recognized for taste and nutrition by parents and industry experts.',
  },
  {
    icon: '🧪',
    title: 'Third-Party Tested',
    description: 'Every batch tested for heavy metals and contaminants. Safety first.',
  },
]

const stats = [
  { value: '50K+', label: 'Happy Babies' },
  { value: '4.9', label: 'Parent Rating' },
  { value: '100%', label: 'Organic' },
  { value: '0g', label: 'Added Sugar' },
]

export default function NutritionCredentials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">
            Backed by Science, Loved by Babies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We take nutrition seriously. Every ingredient is carefully selected for maximum benefit.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-primary-50 rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Credentials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((credential, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">{credential.icon}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                {credential.title}
              </h3>
              <p className="text-sm text-gray-600">
                {credential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
