import { Button } from '../shared'
import NutritionCalculator from './NutritionCalculator'

export default function BoxSummary({ items, totals, onRemove, onClear }) {
  const itemList = Object.values(items)
  const itemCount = itemList.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = itemList.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  const MIN_ITEMS = 6
  const isMinimumMet = itemCount >= MIN_ITEMS

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden sticky top-24">
      {/* Header */}
      <div className="bg-primary-600 text-white p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <span>📦</span>
            Your Box
          </h3>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
            {itemCount} items
          </span>
        </div>
      </div>

      {/* Minimum requirement */}
      {!isMinimumMet && (
        <div className="bg-amber-50 border-b border-amber-100 p-3 text-center">
          <p className="text-sm text-amber-700">
            Add {MIN_ITEMS - itemCount} more item{MIN_ITEMS - itemCount !== 1 ? 's' : ''} to meet minimum
          </p>
        </div>
      )}

      <div className="p-4">
        {itemCount === 0 ? (
          <div className="text-center py-8">
            <span className="text-4xl mb-3 block">🍼</span>
            <p className="text-gray-500 text-sm">
              Your box is empty. Start adding some nutritious goodness!
            </p>
          </div>
        ) : (
          <>
            {/* Items list */}
            <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
              {itemList.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg"
                >
                  <span className="text-2xl">{product.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 text-sm truncate">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      ${product.price.toFixed(2)} × {quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemove(product)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Nutrition Calculator */}
            <NutritionCalculator totals={totals} />

            {/* Pricing */}
            <div className="mt-4 pt-4 border-t space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-green-600">
                  {isMinimumMet ? 'FREE' : '$5.99'}
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t">
                <span>Total</span>
                <span className="text-primary-600">
                  ${(subtotal + (isMinimumMet ? 0 : 5.99)).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 space-y-2">
              <Button className="w-full" disabled={!isMinimumMet}>
                {isMinimumMet ? 'Checkout' : `Add ${MIN_ITEMS - itemCount} More Items`}
              </Button>
              <button
                onClick={onClear}
                className="w-full text-sm text-gray-500 hover:text-gray-700 py-2 transition-colors"
              >
                Clear Box
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
