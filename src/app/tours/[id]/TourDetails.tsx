'use client'

import { useState } from 'react'
import Image from 'next/image'
import { StarIcon, MapPinIcon, CheckCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import { format } from 'date-fns'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { Tour } from '@/data/tours'

export default function TourDetails({ tour }: { tour: Tour }) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [participants, setParticipants] = useState(1)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [bookingStep, setBookingStep] = useState<'participants' | 'option' | 'date' | 'ready'>('participants')

  const getCurrentPeriod = (date: Date = new Date()) => {
    const dateStr = format(date, 'yyyy-MM-dd')
    return tour.periods.find(period => 
      dateStr >= period.startDate && dateStr <= period.endDate
    )
  }

  const currentPeriod = getCurrentPeriod()
  const periodPrice = currentPeriod?.price ?? tour.price
  const isAvailable = currentPeriod?.available ?? false

  const calculateTotal = () => {
    const basePrice = periodPrice * participants
    return basePrice
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[60vh]">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold text-white mb-4">{tour.name}</h1>
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                <span>{tour.rating}</span>
                <span className="ml-1 text-sm">({tour.reviews} reviews)</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-1" />
                <span>{tour.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="prose prose-lg">
              <h2 className="text-2xl font-bold text-gray-900">About this tour</h2>
              <p className="whitespace-pre-line">{tour.description}</p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Trip Highlights */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Trip Highlights</h3>
                  <ul className="space-y-2">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <MapPinIcon className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Included */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Included</h3>
                  <ul className="space-y-2">
                    {tour.included.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Availability */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Availability</h3>
                  <ul className="space-y-2">
                    <li>Departures available until {format(new Date(tour.availability.availableUntil), 'MMMM yyyy')}</li>
                    {tour.availability.privateGroups && <li>Private groups available</li>}
                    {tour.availability.groupTours && <li>Available Group tours</li>}
                    {tour.availability.soloTravelerFee > 0 && (
                      <li className="flex items-center">
                        Solo travelers from +${tour.availability.soloTravelerFee}
                        <button 
                          className="ml-1 text-gray-400 hover:text-gray-600"
                          title="Additional fee for solo travelers"
                        >
                          <QuestionMarkCircleIcon className="h-5 w-5" />
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Categories */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Available Options</h3>
                <div className="grid grid-cols-1 gap-6">
                  {tour.categories.map((category, index) => (
                    <div 
                      key={index}
                      className="border rounded-lg p-6 hover:border-indigo-600 transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{category.name}</h4>
                          <p className="text-gray-600 mt-1">{category.description}</p>
                          <p className="text-sm text-gray-500 mt-2">Duration: {category.duration}</p>
                        </div>
                        <div className="text-xl font-bold text-indigo-600">
                          from ${category.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-lg bg-gray-50 p-6 sticky top-8">
              <h3 className="text-lg font-medium text-gray-900">Book this tour</h3>
              
              {!isAvailable ? (
                <div className="mt-4 p-4 bg-red-50 rounded-md">
                  <p className="text-red-700">This tour is not available during the current period.</p>
                </div>
              ) : (
                <>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Number of Participants</label>
                    <select
                      value={participants}
                      onChange={(e) => {
                        setParticipants(parseInt(e.target.value));
                        setBookingStep('option');
                      }}
                      className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'person' : 'people'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {bookingStep !== 'participants' && (
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700">Select Tour Option</label>
                      <div className="mt-2 space-y-2">
                        {tour.categories.map((category, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSelectedOption(category.name);
                              setBookingStep('date');
                            }}
                            className={`w-full p-3 text-left rounded-md border ${
                              selectedOption === category.name
                                ? 'border-indigo-600 bg-indigo-50'
                                : 'border-gray-300 hover:border-indigo-400'
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-medium">{category.name}</p>
                                <p className="text-sm text-gray-500">{category.duration}</p>
                              </div>
                              <span className="font-medium text-indigo-600">
                                ${category.price}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {bookingStep === 'date' && (
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Select Start Date</label>
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => {
                          setSelectedDate(date);
                          if (date) setBookingStep('ready');
                        }}
                        minDate={new Date()}
                        className="w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholderText="Select a date"
                      />
                    </div>
                  )}

                  <div className="mt-6">
                    <div className="flex items-center justify-between text-base font-medium text-gray-900">
                      <span>Total</span>
                      <span>${calculateTotal()}</span>
                    </div>
                    {currentPeriod && (
                      <p className="mt-1 text-sm text-gray-500">
                        {currentPeriod.name} pricing
                      </p>
                    )}
                    {participants === 1 && tour.availability.soloTravelerFee > 0 && (
                      <p className="mt-1 text-sm text-red-500">
                        * Solo traveler fee of ${tour.availability.soloTravelerFee} included
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    disabled={bookingStep !== 'ready' || !getCurrentPeriod(selectedDate!)?.available}
                    className={`mt-6 w-full rounded-md border border-transparent py-3 px-4 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                      bookingStep !== 'ready' || !getCurrentPeriod(selectedDate!)?.available
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                  >
                    {bookingStep === 'participants' 
                      ? 'Select Number of Participants'
                      : bookingStep === 'option'
                      ? 'Select Tour Option'
                      : bookingStep === 'date'
                      ? 'Select Start Date'
                      : !getCurrentPeriod(selectedDate!)?.available
                        ? 'Not available for selected date'
                        : 'Book Your Tour'
                    }
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
