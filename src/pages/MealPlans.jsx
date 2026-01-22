import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PlanCard, PlanDetail } from '../components/plans'
import { Button, Card } from '../components/shared'
import mealPlans from '../data/mealPlans.json'
import products from '../data/products.json'

const stageFilters = [
  { value: '', label: 'All Plans' },
  { value: '1', label: 'Stage 1 (4-6m)' },
  { value: '2', label: 'Stage 2 (6-9m)' },
  { value: '3', label: 'Stage 3 (9+m)' },
]

const allergenFilters = [
  {
    id: 'dairy',
    label: 'Dairy',
    keywords: ['milk', 'cheddar', 'yogurt', 'butter', 'cheese', 'cream'],
  },
  {
    id: 'egg',
    label: 'Egg',
    keywords: ['egg'],
  },
  {
    id: 'fish',
    label: 'Fish',
    keywords: ['salmon', 'cod', 'fish'],
  },
  {
    id: 'wheat',
    label: 'Wheat',
    keywords: ['wheat', 'pasta'],
  },
  {
    id: 'soy',
    label: 'Soy',
    keywords: ['soy'],
  },
  {
    id: 'tree-nuts',
    label: 'Tree Nuts',
    keywords: ['almond', 'cashew', 'walnut', 'pecan', 'pistachio', 'hazelnut', 'coconut'],
  },
  {
    id: 'peanut',
    label: 'Peanut',
    keywords: ['peanut'],
  },
]

export default function MealPlans() {
  const [searchParams] = useSearchParams()
  const [selectedStage, setSelectedStage] = useState(searchParams.get('stage') || '')
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [selectedAllergens, setSelectedAllergens] = useState([])

  const productsById = useMemo(
    () => new Map(products.map((product) => [product.id, product])),
    [products]
  )

  const toggleAllergen = (id) => {
    setSelectedAllergens((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  // Filter plans based on stage
  const filteredPlans = useMemo(() => {
    let plans = mealPlans

    if (selectedStage) {
      const stageNum = parseInt(selectedStage)
      plans = plans.filter((plan) => {
        // Plans with null stage (like weaning starter) show for all
        if (plan.stage === null) return true
        return plan.stage === stageNum
      })
    }

    if (selectedAllergens.length) {
      const keywordLookup = selectedAllergens.flatMap((id) => {
        const match = allergenFilters.find((filter) => filter.id === id)
        return match ? match.keywords : []
      })

      plans = plans.filter((plan) => {
        const planProducts = plan.productIds
          .map((id) => productsById.get(id))
          .filter(Boolean)

        return !planProducts.some((product) => {
          const ingredientList = product.ingredients.join(' ').toLowerCase()
          return keywordLookup.some((keyword) => ingredientList.includes(keyword))
        })
      })
    }

    return plans
  }, [selectedStage, selectedAllergens, productsById])

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
        {/* Quick Picks */}
        <div className="mb-10">
          <div className="text-center mb-6">
            <h2 className="heading-3 text-gray-900 mb-2">
              Not sure where to start?
            </h2>
            <p className="text-gray-600">
              Pick your baby's age and we'll point you to the right stage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <span className="text-4xl mb-3 block">🍼</span>
              <h3 className="font-bold text-gray-900 mb-2">6 months old</h3>
              <p className="text-sm text-gray-600 mb-4">Smooth textures and first combos.</p>
              <Button onClick={() => setSelectedStage('2')} variant="secondary" size="sm">
                Show Stage 2 Plans
              </Button>
            </Card>
            <Card className="text-center">
              <span className="text-4xl mb-3 block">🥄</span>
              <h3 className="font-bold text-gray-900 mb-2">1 year old</h3>
              <p className="text-sm text-gray-600 mb-4">More textures and hearty meals.</p>
              <Button onClick={() => setSelectedStage('3')} variant="secondary" size="sm">
                Show Stage 3 Plans
              </Button>
            </Card>
            <Card className="text-center">
              <span className="text-4xl mb-3 block">🧭</span>
              <h3 className="font-bold text-gray-900 mb-2">Still exploring?</h3>
              <p className="text-sm text-gray-600 mb-4">Browse everything to compare.</p>
              <Button onClick={() => setSelectedStage('')} size="sm">
                View All Plans
              </Button>
            </Card>
          </div>
        </div>

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

        {/* Allergy Support */}
        <div className="mb-10">
          <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h2 className="heading-3 text-gray-900 mb-2">Allergy-aware planning</h2>
                <p className="text-gray-600 max-w-2xl">
                  New to solids? Always check ingredients and introduce new foods one at a time. Use the filters
                  below to avoid known allergens.
                </p>
              </div>
              <Button href="mailto:hello@tinytummies.com" variant="secondary" size="sm">
                Ask a Nutritionist
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {allergenFilters.map((filter) => {
                const isSelected = selectedAllergens.includes(filter.id)
                return (
                  <button
                    key={filter.id}
                    onClick={() => toggleAllergen(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                      isSelected
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {filter.label}
                  </button>
                )
              })}
              {selectedAllergens.length > 0 && (
                <button
                  onClick={() => setSelectedAllergens([])}
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Clear filters
                </button>
              )}
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Filters are based on ingredient names and are not medical advice. Always consult your pediatrician for allergy guidance.
            </p>
          </div>
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
