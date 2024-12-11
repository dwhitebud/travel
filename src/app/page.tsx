import { HeroSection } from '@/components/HeroSection'
import { FeaturedTours } from '@/components/FeaturedTours'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <FeaturedTours />
      <Testimonials />
      <FAQ />
    </div>
  )
}
