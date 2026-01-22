const nutrientTargets = {
  calories: { target: 500, unit: 'cal', label: 'Calories' },
  protein: { target: 25, unit: 'g', label: 'Protein' },
  carbs: { target: 75, unit: 'g', label: 'Carbs' },
  fat: { target: 20, unit: 'g', label: 'Fat' },
  fiber: { target: 15, unit: 'g', label: 'Fiber' },
}

const nutrientColors = {
  calories: 'bg-orange-500',
  protein: 'bg-red-500',
  carbs: 'bg-blue-500',
  fat: 'bg-yellow-500',
  fiber: 'bg-green-500',
}

export default function NutritionCalculator({ totals }) {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-4">
      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span>📊</span>
        Box Nutrition
      </h4>

      <div className="space-y-3">
        {Object.entries(nutrientTargets).map(([key, { target, unit, label }]) => {
          const value = totals[key] || 0
          const percentage = Math.min((value / target) * 100, 100)

          return (
            <div key={key}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">{label}</span>
                <span className="font-medium text-gray-900">
                  {value}{unit} / {target}{unit}
                </span>
              </div>
              <div className="h-2 bg-white rounded-full overflow-hidden">
                <div
                  className={`h-full ${nutrientColors[key]} rounded-full transition-all duration-300`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>

      <p className="text-xs text-gray-500 mt-4">
        *Based on typical daily needs. Actual requirements vary by age and activity level.
      </p>
    </div>
  )
}
