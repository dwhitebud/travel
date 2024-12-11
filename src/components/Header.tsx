'use client'

import Link from 'next/link'
import { UserCircleIcon } from '@heroicons/react/24/outline'

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              TourBooking
            </Link>
          </div>
          <div className="ml-10 space-x-8">
            <Link 
              href="/tours" 
              className="text-base font-medium text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Tours
            </Link>
            <Link 
              href="/about" 
              className="text-base font-medium text-gray-600 hover:text-indigo-600 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-base font-medium text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/signin"
              className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-500 transition-colors"
            >
              <UserCircleIcon className="mr-2 h-5 w-5" />
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
