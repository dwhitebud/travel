'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StarIcon, FunnelIcon } from '@heroicons/react/24/solid'
import { Tour, tours } from '@/data/tours'
import { Dropdown } from '@/components/ui/Dropdown'

type FilterOptions = {
  type: string[]
  difficulty: string[]
  priceRange: string
  sortBy: 'price-asc' | 'price-desc' | 'rating-desc'
}

export default function ToursPage() {
  const [filters, setFilters] = useState<FilterOptions>({
    type: [],
    difficulty: [],
    priceRange: 'all',
    sortBy: 'rating-desc'
  })

  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Get unique types and difficulties from tours
  const tourTypes = useMemo(() => [...new Set(tours.map(tour => tour.type))], [])
  const difficulties = useMemo(() => [...new Set(tours.map(tour => tour.difficulty))], [])

  const filteredTours = useMemo(() => {
    return tours.filter(tour => {
      // Type filter
      if (filters.type.length > 0 && !filters.type.includes(tour.type)) {
        return false
      }

      // Difficulty filter
      if (filters.difficulty.length > 0 && !filters.difficulty.includes(tour.difficulty)) {
        return false
      }

      // Price range filter
      if (filters.priceRange !== 'all') {
        const [min, max] = filters.priceRange.split('-').map(Number)
        if (tour.price < min || (max && tour.price > max)) {
          return false
        }
      }

      return true
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'rating-desc':
          return b.rating - a.rating
        default:
          return 0
      }
    })
  }, [filters])

  const handleTypeChange = (type: string) => {
    setFilters(prev => ({
      ...prev,
      type: prev.type.includes(type)
        ? prev.type.filter(t => t !== type)
        : [...prev.type, type]
    }))
  }

  const handleDifficultyChange = (difficulty: string) => {
    setFilters(prev => ({
      ...prev,
      difficulty: prev.difficulty.includes(difficulty)
        ? prev.difficulty.filter(d => d !== difficulty)
        : [...prev.difficulty, difficulty]
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Explore Our Tours
          </h1>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <FunnelIcon className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`md:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden'} md:block`}>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
              
              {/* Sort By */}
              <div className="mb-6">
                <Dropdown
                  label="Sort By"
                  value={filters.sortBy}
                  onChange={(value) => setFilters(prev => ({ ...prev, sortBy: value as FilterOptions['sortBy'] }))}
                  options={[
                    { value: 'rating-desc', label: 'Highest Rated' },
                    { value: 'price-asc', label: 'Price: Low to High' },
                    { value: 'price-desc', label: 'Price: High to Low' }
                  ]}
                />
              </div>

              {/* Tour Type */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Tour Type</h3>
                <div className="space-y-2">
                  {tourTypes.map(type => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.type.includes(type)}
                        onChange={() => handleTypeChange(type)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-600">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Difficulty</h3>
                <div className="space-y-2">
                  {difficulties.map(difficulty => (
                    <label key={difficulty} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.difficulty.includes(difficulty)}
                        onChange={() => handleDifficultyChange(difficulty)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-600">{difficulty}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <Dropdown
                  label="Price Range"
                  value={filters.priceRange}
                  onChange={(value) => setFilters(prev => ({ ...prev, priceRange: value }))}
                  options={[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-1000', label: 'Under $1,000' },
                    { value: '1000-2500', label: '$1,000 - $2,500' },
                    { value: '2500-5000', label: '$2,500 - $5,000' },
                    { value: '5000-999999', label: '$5,000+' }
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Tours Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour: Tour) => (
                <Link 
                  href={`/tours/${tour.id}`}
                  key={tour.id}
                  className="group relative flex flex-col overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-lg"
                >
                  <div className="aspect-h-3 aspect-w-4 relative overflow-hidden">
                    {tour.image ? (
                      <>
                        <Image
                          src={tour.image}
                          alt={tour.name}
                          width={600}
                          height={800}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 animate-pulse" />
                    )}
                    <div className="absolute top-0 right-0 p-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-600 text-white shadow-sm">
                        {tour.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-4">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {tour.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">{tour.description}</p>
                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <StarIcon className="h-5 w-5 text-yellow-400" />
                          <span className="text-sm font-medium text-gray-900">{tour.rating}</span>
                          <span className="text-sm text-gray-500">({tour.reviews} reviews)</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-gray-500">From</span>
                          <p className="text-xl font-bold text-indigo-600">${tour.price}</p>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center space-x-3 text-sm text-gray-500">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          {tour.difficulty}
                        </span>
                        <span>{tour.location}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredTours.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900">No tours found</h3>
                <p className="mt-2 text-sm text-gray-500">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
