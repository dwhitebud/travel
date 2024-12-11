import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    quote:
      'Amazing experience! The tour was perfectly organized and our guide was incredibly knowledgeable. Will definitely book again!',
    author: 'Sarah Johnson',
    role: 'Adventure Enthusiast',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'The booking process was seamless and the tour exceeded our expectations. Great value for money!',
    author: 'Michael Chen',
    role: 'Cultural Explorer',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'As a solo traveler, I felt very safe and welcomed. The tour group was perfect and I made some great friends!',
    author: 'Emma Thompson',
    role: 'Solo Traveler',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-50/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Loved by Travelers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Here's what our happy customers have to say about their experiences.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="absolute -top-4 left-8">
                  <span className="inline-flex items-center rounded-full bg-indigo-600/10 px-4 py-1 text-sm font-medium text-indigo-600">
                    {testimonial.role}
                  </span>
                </div>
                <figure className="relative h-full">
                  <div className="flex gap-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-base leading-7 text-gray-900">
                    <p>"{testimonial.quote}"</p>
                  </blockquote>
                  <figcaption className="mt-6">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
