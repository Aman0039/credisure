import React from 'react'

const LazyLoading = () => {
  return (
    <div className="min-h-screen bg-linear-to-r from-lime-300/60 to lime-200 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-200 border-t-gray-700"></div>

        {/* Loading Text */}
        <h1 className="text-2xl font-semibold text-gray-700">
          Loading...
        </h1>
      </div>
    </div>
  )
}

export default LazyLoading