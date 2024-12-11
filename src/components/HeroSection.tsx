'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export function HeroSection() {
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    const searchParams = new URLSearchParams()
    if (searchValue) {
      searchParams.set('search', searchValue)
    }
    router.push(`/tours${searchValue ? `?${searchParams.toString()}` : ''}`)
  }

  return (
    <div className="relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Experience the World</span>
              <span 
                className="block mt-2 bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent"
              >
                One Adventure at a Time
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-lg text-gray-100 sm:text-xl md:mt-8 md:max-w-3xl">
              Embark on carefully curated journeys that blend adventure, culture, and comfort. 
              From hidden gems to iconic destinations, create memories that last a lifetime.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-white">
              <div>
                <div className="text-4xl font-bold">50+</div>
                <div className="text-sm mt-1 text-gray-200">Destinations</div>
              </div>
              <div>
                <div className="text-4xl font-bold">1000+</div>
                <div className="text-sm mt-1 text-gray-200">Happy Travelers</div>
              </div>
              <div>
                <div className="text-4xl font-bold">4.9</div>
                <div className="text-sm mt-1 text-gray-200">Average Rating</div>
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-lg space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="block w-full rounded-full border-2 border-white/20 bg-white/10 px-6 py-4 pl-12 text-lg text-white backdrop-blur-sm transition-all duration-300 placeholder:text-gray-300 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 sm:text-base"
                  placeholder="Where do you want to go?"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
                </div>
              </div>
              <button 
                onClick={handleSearch}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-all duration-200"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
