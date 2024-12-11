import { tours } from '@/data/tours'
import TourDetails from './TourDetails'

export default function TourPage({ params }: { params: { id: string } }) {
  const tourId = parseInt(params.id);
  const tour = tours.find((t) => t.id === tourId);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">Tour not found</h1>
      </div>
    )
  }

  return <TourDetails tour={tour} />
}
