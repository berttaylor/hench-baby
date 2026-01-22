import { Button } from '../shared'

export default function PlanDetail({ plan, products, onClose }) {
  if (!plan) return null

  const planProducts = plan.productIds.map(id =>
    products.find(p => p.id === id)
  ).filter(Boolean)

  // Calculate totals
  const totals = planProducts.reduce(
    (acc, product) => ({
      calories: acc.calories + product.nutrition.calories,
      protein: acc.protein + product.nutrition.protein,
      carbs: acc.carbs + product.nutrition.carbs,
      fat: acc.fat + product.nutrition.fat,
      fiber: acc.fiber + product.nutrition.fiber,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }
  )

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-3xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-t-3xl">
            <div className="flex items-center gap-4">
              <span className="text-6xl">{plan.emoji}</span>
              <div>
                {plan.badge && (
                  <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full mb-2">
                    {plan.badge}
                  </span>
                )}
                <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
                <p className="text-primary-600 font-medium">{plan.ageRange}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">{plan.description}</p>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Products */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-4">What's Included ({planProducts.length} items)</h3>
              <div className="grid gap-3">
                {planProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl"
                  >
                    <span className="text-3xl">{product.emoji}</span>
                    <div className="flex-grow">
                      <h4 className="font-medium text-gray-900">{product.name}</h4>
                      <p className="text-sm text-gray-500">
                        Stage {product.stage} • {product.type}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-900">
                        £{product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nutrition Summary */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Nutrition Summary (Total)</h3>
              <div className="grid grid-cols-5 gap-2">
                <div className="text-center p-3 bg-primary-50 rounded-xl">
                  <div className="text-lg font-bold text-primary-700">{totals.calories}</div>
                  <div className="text-xs text-primary-600">Calories</div>
                </div>
                <div className="text-center p-3 bg-primary-50 rounded-xl">
                  <div className="text-lg font-bold text-primary-700">{totals.protein}g</div>
                  <div className="text-xs text-primary-600">Protein</div>
                </div>
                <div className="text-center p-3 bg-primary-50 rounded-xl">
                  <div className="text-lg font-bold text-primary-700">{totals.carbs}g</div>
                  <div className="text-xs text-primary-600">Carbs</div>
                </div>
                <div className="text-center p-3 bg-primary-50 rounded-xl">
                  <div className="text-lg font-bold text-primary-700">{totals.fat}g</div>
                  <div className="text-xs text-primary-600">Fat</div>
                </div>
                <div className="text-center p-3 bg-primary-50 rounded-xl">
                  <div className="text-lg font-bold text-primary-700">{totals.fiber}g</div>
                  <div className="text-xs text-primary-600">Fiber</div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Plan Price</span>
                <span className="text-2xl font-bold text-gray-900">£{plan.price.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Free delivery on all orders. Delivered fresh to your door.
              </p>
              <div className="flex gap-4">
                <Button onClick={onClose} variant="secondary" className="flex-1">
                  Back to Plans
                </Button>
                <Button className="flex-1">
                  Choose This Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
