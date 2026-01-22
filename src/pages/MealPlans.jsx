import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PlanCard, PlanDetail } from '../components/plans'
import mealPlans from '../data/mealPlans.json'
import products from '../data/products.json'

const stageFilters = [
  { value: '', label: 'All Plans' },
  { value: '1', label: 'Stage 1 (4-6m)' },
  { value: '2', label: 'Stage 2 (6-9m)' },
  { value: '3', label: 'Stage 3 (9+m)' },
]

export default function MealPlans() {
  const [searchParams] = useSearchParams()
  const [selectedStage, setSelectedStage] = useState(searchParams.get('stage') || '')
  const [selectedPlan, setSelectedPlan] = useState(null)

  // Filter plans based on stage
  const filteredPlans = useMemo(() => {
    if (!selectedStage) return mealPlans
    const stageNum = parseInt(selectedStage)
    return mealPlans.filter(plan => {
      // Plans with null stage (like weaning starter) show for all
      if (plan.stage === null) return true
      return plan.stage === stageNum
    })
  }, [selectedStage])

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-50 via-cream to-secondary-50">
        <div className="container-custom py-12 md:py-16 text-center">
          <h1 className="heading-1 text-gray-900 mb-4">
            Choose Your Meal Plan
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated bundles of organic baby food, thoughtfully designed by nutrition experts for every stage of your little one's journey.
          </p>
        </div>
      </div>

      <div className="container-custom py-8 md:py-12">
        {/* Stage Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {stageFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setSelectedStage(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedStage === filter.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              products={products}
              onSelect={setSelectedPlan}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredPlans.length === 0 && (
          <div className="text-center py-12">
            <span className="text-5xl mb-4 block">🔍</span>
            <p className="text-gray-600">No plans found for this stage.</p>
            <button
              onClick={() => setSelectedStage('')}
              className="text-primary-600 font-medium mt-2 hover:text-primary-700"
            >
              View all plans
            </button>
          </div>
        )}

        {/* Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <span className="text-4xl mb-4 block">🚚</span>
            <h3 className="font-bold text-gray-900 mb-2">Free Delivery</h3>
            <p className="text-sm text-gray-600">On all meal plans, straight to your door</p>
          </div>
          <div>
            <span className="text-4xl mb-4 block">🔄</span>
            <h3 className="font-bold text-gray-900 mb-2">Flexible Schedule</h3>
            <p className="text-sm text-gray-600">Weekly, bi-weekly, or monthly deliveries</p>
          </div>
          <div>
            <span className="text-4xl mb-4 block">❄️</span>
            <h3 className="font-bold text-gray-900 mb-2">Arrives Fresh</h3>
            <p className="text-sm text-gray-600">Flash-frozen and packed with care</p>
          </div>
        </div>
      </div>

      {/* Plan Detail Modal */}
      {selectedPlan && (
        <PlanDetail
          plan={selectedPlan}
          products={products}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </div>
  )
}
