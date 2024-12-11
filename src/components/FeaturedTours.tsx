'use client'

import Image from 'next/image'
import Link from 'next/link'
import { StarIcon, UserGroupIcon } from '@heroicons/react/24/solid'

const tours = [
  {
    id: 1,
    name: 'Mountain Adventure',
    description: 'Experience the thrill of mountain climbing with expert guides.',
    price: 299,
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80',
    type: 'Adventure',
  },
  {
    id: 2,
    name: 'Cultural City Tour',
    description: 'Explore the rich history and culture of ancient cities.',
    price: 199,
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&q=80',
    type: 'Cultural',
  },
  {
    id: 3,
    name: 'Night Safari',
    description: 'Discover wildlife under the stars in their natural habitat.',
    price: 249,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
    type: 'Adventure',
  },
]

export function FeaturedTours() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <div className="flex items-center justify-between">
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
          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            {tours.map((tour) => (
              <div 
                key={tour.id} 
                className="group relative flex flex-col overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-h-4 aspect-w-3 relative overflow-hidden">
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
                      {/* Gradient overlay for text legibility */}
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
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      <Link href={`/tours/${tour.id}`}>
                        <span className="absolute inset-0" />
                        {tour.name}
                      </Link>
                    </h3>
                    <p className="mt-3 text-base text-gray-500">{tour.description}</p>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <StarIcon className="h-5 w-5 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-900">{tour.rating}</span>
                        <span className="text-sm text-gray-500">({tour.reviews} reviews)</span>
                      </div>
                      <p className="text-xl font-bold text-indigo-600">${tour.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
