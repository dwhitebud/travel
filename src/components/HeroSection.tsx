'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span 
                className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              >
                Discover Your Next
              </span>
              <span className="block mt-2">Adventure</span>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-lg text-gray-600 sm:text-xl md:mt-8 md:max-w-3xl">
              Book amazing tours with customizable options. Perfect for solo travelers and couples.
            </p>
            <div className="mx-auto mt-8 max-w-lg sm:flex sm:justify-center md:mt-10">
              <div className="relative w-full">
                <div className="relative">
                  <input
                    type="text"
                    className="block w-full rounded-full border-2 border-gray-200 bg-white/90 px-6 py-4 pl-12 text-lg backdrop-blur-sm transition-all duration-300 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 sm:text-base"
                    placeholder="Where do you want to go?"
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white" />
    </div>
  )
}
