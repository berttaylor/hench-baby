import { Button, Card } from '../components/shared'

const values = [
  {
    icon: '🌱',
    title: 'Organic First',
    description: 'Every ingredient is USDA certified organic. No pesticides, no GMOs, no compromises on what goes into your baby\'s body.',
  },
  {
    icon: '🌟',
    title: 'Balanced Nutrition',
    description: 'We pack optimal nutrition into every jar. The right balance of nutrients for growing bodies and developing brains.',
  },
  {
    icon: '🔬',
    title: 'Science-Backed',
    description: 'Our recipes are developed with paediatricians and nutritionists. Every formula is designed for optimal infant development.',
  },
  {
    icon: '🌍',
    title: 'Sustainably Sourced',
    description: 'We partner with ethical farms and use eco-friendly packaging. Good for babies, good for the planet.',
  },
  {
    icon: '❤️',
    title: 'Made with Love',
    description: 'We\'re parents too. Every product is something we\'d proudly feed our own children. Quality you can trust.',
  },
  {
    icon: '🔒',
    title: 'Safety Obsessed',
    description: 'Third-party tested for heavy metals and contaminants. We exceed industry standards because your baby deserves the safest food.',
  },
]

const team = [
  {
    name: 'Sarah Anderson',
    role: 'Co-Founder & CEO',
    bio: 'Mum of two who was overwhelmed by the weaning process. Created Tiny Tummies to help other parents navigate feeding with confidence.',
    emoji: '👩‍💼',
  },
  {
    name: 'Mike Anderson',
    role: 'Co-Founder & COO',
    bio: 'Operations expert and dad who believes every baby deserves the best start. Manages logistics and partnerships.',
    emoji: '👨‍💼',
  },
  {
    name: 'Dr. Emily Chen',
    role: 'Chief Nutrition Officer',
    bio: 'Board-certified paediatrician with 15 years of experience. Ensures every recipe supports optimal infant development.',
    emoji: '👩‍⚕️',
  },
  {
    name: 'Chef Marcus Williams',
    role: 'Head of Product Development',
    bio: 'Former Michelin-star chef turned baby food innovator. Makes nutrition taste delicious.',
    emoji: '👨‍🍳',
  },
]

const timeline = [
  {
    year: '2020',
    title: 'The Overwhelm',
    description: 'Sarah and Mike struggle to find trusted guidance on what to feed their daughter Lily during weaning.',
  },
  {
    year: '2021',
    title: 'Creating the Plan',
    description: 'Working with a paediatric nutritionist, they create a meal plan that takes the guesswork out of weaning.',
  },
  {
    year: '2022',
    title: 'Tiny Tummies is Born',
    description: 'What started as helping friends becomes a real company. First commercial kitchen opens.',
  },
  {
    year: '2023',
    title: 'Nationwide Launch',
    description: 'Tiny Tummies ships to all 50 states. Partnership with leading paediatric nutritionists begins.',
  },
  {
    year: '2024',
    title: '50,000 Happy Tummies',
    description: 'Milestone reached! Thousands of families trust Tiny Tummies for their little ones\' nutrition.',
  },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-cream to-secondary-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-6">
                Our Story
              </span>
              <h1 className="heading-1 text-gray-900 mb-6">
                We Believe Every Baby Deserves the{' '}
                <span className="text-primary-600">Best Start</span>
              </h1>
              <p className="text-xl text-gray-600">
                Founded by parents who were overwhelmed by weaning,
                Tiny Tummies is on a mission to make feeding little ones simple, joyful, and nutritious.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-[100px]">👨‍👩‍👧</span>
                  <p className="text-primary-700 font-medium mt-4">The Anderson Family</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">
              How It All Started
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                In 2020, when our daughter Lily was ready for her first solid foods, we were completely
                overwhelmed. Every book gave different advice. Every website contradicted the last.
              </p>
              <p>
                We spent hours researching when we should have been enjoying precious moments with our baby.
                We wished someone would just tell us what to feed her and when – a simple plan we could trust.
              </p>
              <p>
                So we created one. Working with a paediatric nutritionist, we designed meal plans that took
                all the guesswork out of weaning. We started making the food ourselves – organic purees
                and meals that we knew met the highest standards.
              </p>
              <p>
                Lily thrived. She was hitting milestones, full of energy, and actually excited
                about mealtime. Friends noticed. Then they asked for our meal plans. Then they asked us to
                make the food for them too.
              </p>
              <p className="font-medium text-gray-900">
                That's when we realised: this wasn't just about our family. Every parent deserves
                a helping hand during the weaning journey. Tiny Tummies was born.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-2 text-gray-900 mb-12 text-center">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-20">
                    <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-bold rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-primary-200 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full" />
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These aren't just words on a wall. They guide every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} hover>
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Parents, experts, and passionate people dedicated to baby nutrition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                  <span className="text-5xl">{member.emoji}</span>
                </div>
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">
            Join the Tiny Tummies Family
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start your baby's weaning journey with confidence today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/plans" variant="white" size="lg">
              Explore Meal Plans
            </Button>
            <Button to="/how-it-works" variant="secondary" size="lg" className="!border-white !text-white hover:!bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
