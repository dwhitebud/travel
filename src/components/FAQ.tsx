'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What's included in the tour price?",
    answer:
      'Our tour prices include professional guides, transportation, accommodation (where applicable), and specified activities. Additional excursions and customizations are available at extra cost.',
  },
  {
    question: 'How do seasonal prices work?',
    answer:
      'Tour prices vary based on peak and off-peak seasons. Peak season typically includes major holidays and summer months, while off-peak seasons offer more affordable rates.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We offer full refunds for cancellations made 30 days or more before the tour date. Cancellations within 14-29 days receive a 50% refund. Unfortunately, we cannot offer refunds for cancellations made less than 14 days before the tour.',
  },
  {
    question: 'Are there discounts for group bookings?',
    answer:
      'Yes! We offer special rates for groups of 6 or more. Additionally, couples booking together can enjoy our special double booking rates.',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function FAQ() {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-50/50">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-center text-lg leading-8 text-gray-600">
            Have a different question and can't find the answer you're looking for? Reach out to our{' '}
            <a href="/contact" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
              support team
            </a>{' '}
            and we'll get back to you as soon as we can.
          </p>
          <div className="mt-16">
            <dl className="space-y-4">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question}>
                  {({ open }) => (
                    <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-200 hover:shadow-md">
                      <dt>
                        <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-left">
                          <span className="text-lg font-medium leading-7 text-gray-900">
                            {faq.question}
                          </span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform text-indigo-600 transition-all duration-200'
                            )}
                          />
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="px-6 pb-6 pt-2">
                        <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
