import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FilterBar, ProductGrid, BoxSummary } from '../components/builder'
import products from '../data/products.json'

export default function BuildBox() {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    stage: searchParams.get('stage') || '',
    type: '',
    focus: '',
  })
  const [boxItems, setBoxItems] = useState({})

  // Update filters from URL params
  useEffect(() => {
    const stageParam = searchParams.get('stage')
    if (stageParam) {
      setFilters((prev) => ({ ...prev, stage: stageParam }))
    }
  }, [searchParams])

  // Filter products based on current filters
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (filters.stage && product.stage !== parseInt(filters.stage)) {
        return false
      }
      if (filters.type && product.type !== filters.type) {
        return false
      }
      if (filters.focus && !product.focus.includes(filters.focus)) {
        return false
      }
      return true
    })
  }, [filters])

  // Calculate totals from box items
  const totals = useMemo(() => {
    return Object.values(boxItems).reduce(
      (acc, { product, quantity }) => {
        return {
          calories: acc.calories + product.nutrition.calories * quantity,
          protein: acc.protein + product.nutrition.protein * quantity,
          carbs: acc.carbs + product.nutrition.carbs * quantity,
          fat: acc.fat + product.nutrition.fat * quantity,
          fiber: acc.fiber + product.nutrition.fiber * quantity,
        }
      },
      { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }
    )
  }, [boxItems])

  const handleAdd = (product) => {
    setBoxItems((prev) => {
      const existing = prev[product.id]
      return {
        ...prev,
        [product.id]: {
          product,
          quantity: existing ? existing.quantity + 1 : 1,
        },
      }
    })
  }

  const handleRemove = (product) => {
    setBoxItems((prev) => {
      const existing = prev[product.id]
      if (!existing) return prev

      if (existing.quantity <= 1) {
        const { [product.id]: _, ...rest } = prev
        return rest
      }

      return {
        ...prev,
        [product.id]: {
          ...existing,
          quantity: existing.quantity - 1,
        },
      }
    })
  }

  const handleClear = () => {
    setBoxItems({})
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container-custom py-8">
          <h1 className="heading-2 text-gray-900 mb-2">
            Build Your Box
          </h1>
          <p className="text-gray-600">
            Choose from 20+ organic purees and meals. Minimum 6 items per box.
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <FilterBar filters={filters} onFilterChange={setFilters} />
            <ProductGrid
              products={filteredProducts}
              boxItems={boxItems}
              onAdd={handleAdd}
              onRemove={handleRemove}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:w-80">
            <BoxSummary
              items={boxItems}
              totals={totals}
              onRemove={handleRemove}
              onClear={handleClear}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
