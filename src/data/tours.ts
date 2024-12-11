export interface TourPeriod {
  name: string;
  startDate: string;
  endDate: string;
  price: number;
  available: boolean;
}

export interface TourCategory {
  name: string;
  duration: string;
  price: number;
  description: string;
}

export interface TourAvailability {
  availableUntil: string;
  privateGroups: boolean;
  groupTours: boolean;
  soloTravelerFee: number;
}

export interface Tour {
  id: number;
  name: string;
  description: string;
  highlights: string[];
  included: string[];
  price: number;
  rating: number;
  reviews: number;
  image: string;
  type: string;
  location: string;
  difficulty: string;
  availability: TourAvailability;
  categories: TourCategory[];
  periods: TourPeriod[];
}

export const tours: Tour[] = [
  {
    id: 1,
    name: 'Rocky Mountain Explorer',
    description: 'An unforgettable journey through the Canadian Rockies, featuring pristine lakes, glaciers, and wildlife encounters.',
    highlights: [
      'Lake Louise & Moraine Lake',
      'Banff National Park',
      'Columbia Icefield',
      'Wildlife Viewing',
      'Mountain Hot Springs'
    ],
    included: [
      'Luxury Mountain Lodge Accommodation',
      'All Ground Transportation',
      'Professional Guide',
      'Daily Breakfast & Select Meals',
      'National Park Fees'
    ],
    price: 2499,
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80',
    type: 'Adventure',
    location: 'Canadian Rockies',
    difficulty: 'Moderate',
    availability: {
      availableUntil: '2026-04-01',
      privateGroups: true,
      groupTours: true,
      soloTravelerFee: 399
    },
    categories: [
      {
        name: '5-Day Classic Explorer',
        duration: '5 days',
        price: 2499,
        description: 'Perfect introduction to the Canadian Rockies'
      },
      {
        name: '7-Day Complete Journey',
        duration: '7 days',
        price: 3299,
        description: 'Extended adventure with Jasper National Park'
      },
      {
        name: '10-Day Ultimate Experience',
        duration: '10 days',
        price: 4599,
        description: 'Comprehensive tour including helicopter rides and exclusive experiences'
      }
    ],
    periods: [
      {
        name: 'Summer Peak',
        startDate: '2024-06-15',
        endDate: '2024-09-15',
        price: 2499,
        available: true
      },
      {
        name: 'Fall Colors',
        startDate: '2024-09-16',
        endDate: '2024-10-31',
        price: 2299,
        available: true
      },
      {
        name: 'Winter Wonderland',
        startDate: '2024-12-01',
        endDate: '2025-03-31',
        price: 2699,
        available: true
      }
    ]
  },
  {
    id: 2,
    name: 'Mediterranean Odyssey',
    description: 'Journey through the heart of ancient civilizations, exploring historic cities, coastal villages, and culinary delights.',
    highlights: [
      'Athens Acropolis',
      'Santorini Sunset',
      'Ancient Olympia',
      'Meteora Monasteries',
      'Greek Island Hopping'
    ],
    included: [
      '4-Star Hotel Accommodation',
      'Island Ferry Transfers',
      'Expert Local Guides',
      'Daily Breakfast & Select Dinners',
      'Wine Tasting Experiences'
    ],
    price: 3299,
    rating: 4.9,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&q=80',
    type: 'Cultural',
    location: 'Greece',
    difficulty: 'Easy',
    availability: {
      availableUntil: '2026-04-01',
      privateGroups: true,
      groupTours: true,
      soloTravelerFee: 499
    },
    categories: [
      {
        name: '8-Day Classical Greece',
        duration: '8 days',
        price: 3299,
        description: 'Essential Greek mainland and Santorini experience'
      },
      {
        name: '12-Day Greek Islands',
        duration: '12 days',
        price: 4499,
        description: 'Extended journey including Mykonos, Crete, and Rhodes'
      },
      {
        name: '15-Day Complete Mediterranean',
        duration: '15 days',
        price: 5799,
        description: 'Luxury tour including exclusive islands and experiences'
      }
    ],
    periods: [
      {
        name: 'Summer Season',
        startDate: '2024-06-01',
        endDate: '2024-09-30',
        price: 3299,
        available: true
      },
      {
        name: 'Shoulder Season',
        startDate: '2024-04-01',
        endDate: '2024-05-31',
        price: 2999,
        available: true
      },
      {
        name: 'Autumn Special',
        startDate: '2024-10-01',
        endDate: '2024-11-30',
        price: 2899,
        available: true
      }
    ]
  },
  {
    id: 3,
    name: 'African Safari Adventure',
    description: 'Experience the ultimate wildlife safari across the Serengeti and Masai Mara, witnessing the great migration and African wildlife.',
    highlights: [
      'Great Migration',
      'Ngorongoro Crater',
      'Masai Village Visit',
      'Big Five Sightings',
      'Luxury Safari Camps'
    ],
    included: [
      'Luxury Tented Camp & Lodge Stays',
      'All Safari Game Drives',
      'Expert Wildlife Guides',
      'All Meals & Beverages',
      'Small Aircraft Transfers'
    ],
    price: 5999,
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
    type: 'Adventure',
    location: 'Tanzania & Kenya',
    difficulty: 'Easy',
    availability: {
      availableUntil: '2026-04-01',
      privateGroups: true,
      groupTours: true,
      soloTravelerFee: 899
    },
    categories: [
      {
        name: '7-Day Serengeti Safari',
        duration: '7 days',
        price: 5999,
        description: 'Classic Tanzania safari experience'
      },
      {
        name: '10-Day Tanzania & Kenya',
        duration: '10 days',
        price: 7999,
        description: 'Comprehensive East Africa wildlife adventure'
      },
      {
        name: '14-Day Ultimate Africa',
        duration: '14 days',
        price: 11999,
        description: 'Luxury safari including gorilla trekking in Rwanda'
      }
    ],
    periods: [
      {
        name: 'Migration Season',
        startDate: '2024-07-01',
        endDate: '2024-10-31',
        price: 5999,
        available: true
      },
      {
        name: 'Green Season',
        startDate: '2024-11-01',
        endDate: '2024-12-20',
        price: 5299,
        available: true
      },
      {
        name: 'Peak Season',
        startDate: '2024-12-21',
        endDate: '2025-03-31',
        price: 6499,
        available: true
      }
    ]
  }
];
