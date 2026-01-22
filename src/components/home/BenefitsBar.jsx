const benefits = [
  {
    icon: '🌱',
    title: '100% Organic',
    description: 'USDA certified organic ingredients',
  },
  {
    icon: '🌟',
    title: 'Balanced Nutrition',
    description: 'Everything growing bodies need',
  },
  {
    icon: '🧠',
    title: 'Brain-Boosting',
    description: 'DHA & omega-3 rich formulas',
  },
  {
    icon: '🚫',
    title: 'No Added Sugar',
    description: 'Just natural sweetness',
  },
  {
    icon: '📦',
    title: 'Delivered Fresh',
    description: 'Right to your doorstep',
  },
]

export default function BenefitsBar() {
  return (
    <section className="py-8 bg-white border-b">
      <div className="container-custom">
        <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible md:justify-between">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 flex-shrink-0 min-w-[200px] md:min-w-0"
            >
              <span className="text-3xl">{benefit.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-xs">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
