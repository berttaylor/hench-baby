import { Badge } from '../shared'

const stageColors = {
  1: 'stage1',
  2: 'stage2',
  3: 'stage3',
}

const stageLabels = {
  1: 'Stage 1',
  2: 'Stage 2',
  3: 'Stage 3',
}

export default function ProductCard({ product, quantity = 0, onAdd, onRemove }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
      {/* Image / Emoji area */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 text-center">
        <span className="text-6xl">{product.emoji}</span>
        <Badge
          variant={stageColors[product.stage]}
          size="sm"
          className="absolute top-3 left-3"
        >
          {stageLabels[product.stage]}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Nutrition quick view */}
        <div className="flex gap-3 text-xs text-gray-500 mb-4">
          <span>{product.nutrition.calories} cal</span>
          <span>•</span>
          <span>{product.nutrition.protein}g protein</span>
        </div>

        {/* Price and Add to Box */}
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg text-primary-600">
            ${product.price.toFixed(2)}
          </span>

          {quantity > 0 ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onRemove(product)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="font-semibold text-gray-900 w-6 text-center">
                {quantity}
              </span>
              <button
                onClick={() => onAdd(product)}
                className="w-8 h-8 rounded-full bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          ) : (
            <button
              onClick={() => onAdd(product)}
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-full transition-colors"
            >
              Add to Box
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
