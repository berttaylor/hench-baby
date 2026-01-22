import { Card, Button } from '../shared'

export default function PlanCard({ plan, products, onSelect }) {
  const planProducts = plan.productIds.map(id =>
    products.find(p => p.id === id)
  ).filter(Boolean)

  return (
    <Card hover className="h-full flex flex-col">
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full whitespace-nowrap">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6 pt-2">
        <span className="text-5xl mb-4 block">{plan.emoji}</span>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
        <p className="text-sm text-primary-600 font-medium">{plan.ageRange}</p>
      </div>

      {/* Price */}
      <div className="text-center mb-6">
        <span className="text-3xl font-bold text-gray-900">£{plan.price.toFixed(2)}</span>
        <span className="text-gray-500 text-sm ml-1">/ delivery</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm text-center mb-6">
        {plan.description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
            <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Products Preview */}
      <div className="mb-6">
        <p className="text-xs text-gray-500 mb-2 font-medium">Includes:</p>
        <div className="flex flex-wrap gap-1">
          {planProducts.slice(0, 5).map((product) => (
            <span
              key={product.id}
              className="text-lg"
              title={product.name}
            >
              {product.emoji}
            </span>
          ))}
          {planProducts.length > 5 && (
            <span className="text-xs text-gray-400 self-center ml-1">
              +{planProducts.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* CTA */}
      <Button
        onClick={() => onSelect(plan)}
        className="w-full"
      >
        View Plan Details
      </Button>
    </Card>
  )
}
