import ProductCard from './ProductCard'

export default function ProductGrid({ products, boxItems, onAdd, onRemove }) {
  if (products.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
        <span className="text-5xl mb-4 block">🔍</span>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          No products found
        </h3>
        <p className="text-gray-500">
          Try adjusting your filters to see more options.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          quantity={boxItems[product.id]?.quantity || 0}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}
