'use client'

import Image from 'next/image'
import Link from 'next/link'
import { StarIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import { Tour, tours } from '@/data/tours';

export function FeaturedTours() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Featured Tours
          </h2>
          <Link 
            href="/tours" 
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
          >
            View all tours →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour: Tour) => (
            <Link 
              href={`/tours/${tour.id}`}
              key={tour.id}
              className="group relative flex flex-col overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 animate-pulse" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-indigo-400">
                        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
                
              </div>
              <div className="flex flex-1 flex-col justify-between p-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {tour.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">{tour.description}</p>
                </div>
                <div className="mt-6">
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
