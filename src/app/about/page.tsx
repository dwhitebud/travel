import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            About <span className="text-indigo-600">TourBooking</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover the world with us through carefully curated experiences and unforgettable adventures.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
              <p className="mt-4 text-lg text-gray-500">
                Founded with a passion for exploration and adventure, TourBooking has been connecting travelers 
                with extraordinary experiences since our inception. We believe in creating memories that last 
                a lifetime through authentic, immersive travel experiences.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-500">
                We strive to make unique travel experiences accessible to everyone. Our mission is to inspire 
                and enable people to explore the world, embrace new cultures, and create lasting connections 
                through thoughtfully designed tours.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">What Sets Us Apart</h2>
              <p className="mt-4 text-lg text-gray-500">
                Our commitment to quality, attention to detail, and focus on sustainable tourism practices 
                make us different. We work with local guides and communities to ensure authentic experiences 
                while supporting local economies.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Our Values</h2>
              <ul className="mt-4 space-y-4 text-lg text-gray-500">
                <li>• Authenticity in every experience</li>
                <li>• Sustainability in tourism</li>
                <li>• Cultural respect and understanding</li>
                <li>• Excellence in service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
