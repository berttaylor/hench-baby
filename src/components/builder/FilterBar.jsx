const stages = [
  { value: '', label: 'All Stages' },
  { value: '1', label: 'Stage 1 (4-6m)' },
  { value: '2', label: 'Stage 2 (6-9m)' },
  { value: '3', label: 'Stage 3 (9+m)' },
]

const types = [
  { value: '', label: 'All Types' },
  { value: 'puree', label: 'Purees' },
  { value: 'meal', label: 'Meals' },
  { value: 'snack', label: 'Snacks' },
]

const focuses = [
  { value: '', label: 'All Benefits' },
  { value: 'protein', label: 'High Protein' },
  { value: 'iron', label: 'Iron Rich' },
  { value: 'brain', label: 'Brain Boost' },
  { value: 'energy', label: 'Energy' },
  { value: 'healthy-fats', label: 'Healthy Fats' },
]

export default function FilterBar({ filters, onFilterChange }) {
  const handleChange = (key, value) => {
    onFilterChange({ ...filters, [key]: value })
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
      <div className="flex flex-wrap gap-4">
        {/* Stage Filter */}
        <div className="flex-1 min-w-[150px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Stage
          </label>
          <select
            value={filters.stage}
            onChange={(e) => handleChange('stage', e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {stages.map((stage) => (
              <option key={stage.value} value={stage.value}>
                {stage.label}
              </option>
            ))}
          </select>
        </div>

        {/* Type Filter */}
        <div className="flex-1 min-w-[150px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <select
            value={filters.type}
            onChange={(e) => handleChange('type', e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {types.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Focus Filter */}
        <div className="flex-1 min-w-[150px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Benefits
          </label>
          <select
            value={filters.focus}
            onChange={(e) => handleChange('focus', e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {focuses.map((focus) => (
              <option key={focus.value} value={focus.value}>
                {focus.label}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        {(filters.stage || filters.type || filters.focus) && (
          <div className="flex items-end">
            <button
              onClick={() => onFilterChange({ stage: '', type: '', focus: '' })}
              className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
