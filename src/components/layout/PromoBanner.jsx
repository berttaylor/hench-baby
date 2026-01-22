import { useState } from 'react'

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-primary-600 text-white py-2 px-4 relative">
      <div className="container-custom flex items-center justify-center">
        <p className="text-sm font-medium text-center">
          <span className="hidden sm:inline">Free shipping on your first box! </span>
          <span className="sm:hidden">Free shipping on first box! </span>
          <span className="underline cursor-pointer hover:no-underline">
            Use code TINYTUMMIES
          </span>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:bg-primary-700 rounded transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
