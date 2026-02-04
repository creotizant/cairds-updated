export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  images: string[];
  description: string;
  amenities: string[];
  featured: boolean;
  availability: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxurious Victorian Estate",
    location: "Edinburgh, Scotland",
    price: 1250000,
    bedrooms: 6,
    bathrooms: 5,
    area: 4500,
    type: "Estate",
    images: [
      "luxury victorian mansion exterior",
      "luxury mansion interior living",
      "luxury mansion kitchen",
      "luxury mansion bedroom",
      "luxury mansion garden"
    ],
    description: "A stunning Victorian estate featuring period architecture, modern amenities, and extensive grounds. This magnificent property combines historical charm with contemporary luxury living.",
    amenities: ["Garden", "Parking", "Security System", "Central Heating", "Double Glazing", "Period Features"],
    featured: true,
    availability: "Available"
  },
  {
    id: "2",
    title: "Modern Waterfront Estate",
    location: "Cornwall, England",
    price: 2750000,
    bedrooms: 5,
    bathrooms: 4,
    area: 3800,
    type: "Estate",
    images: [
      "modern waterfront home exterior",
      "modern luxury home interior",
      "modern kitchen luxury",
      "modern bedroom ocean view",
      "waterfront property pool"
    ],
    description: "Contemporary masterpiece with breathtaking ocean views. This estate features floor-to-ceiling windows, an infinity pool, and direct beach access.",
    amenities: ["Sea Views", "Swimming Pool", "Beach Access", "Smart Home", "Wine Cellar", "Home Cinema"],
    featured: true,
    availability: "Available"
  },
  {
    id: "3",
    title: "Historic Country Manor",
    location: "Cotswolds, England",
    price: 1850000,
    bedrooms: 7,
    bathrooms: 6,
    area: 5200,
    type: "Manor",
    images: [
      "historic country manor exterior",
      "manor house interior",
      "country estate grounds",
      "manor house dining room",
      "country estate stables"
    ],
    description: "Grade II listed manor house set in 15 acres of parkland. Rich in history with original features throughout including stone fireplaces and oak paneling.",
    amenities: ["Parkland", "Stables", "Guest Cottage", "Tennis Court", "Orchard", "Historic Features"],
    featured: true,
    availability: "Available"
  },
  {
    id: "4",
    title: "Contemporary Glass Estate",
    location: "Lake District, England",
    price: 1450000,
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    type: "Estate",
    images: [
      "modern glass house exterior",
      "contemporary home interior",
      "modern home mountain view",
      "luxury modern kitchen",
      "modern home outdoor deck"
    ],
    description: "Award-winning contemporary design with panoramic lake and mountain views. Features sustainable architecture and state-of-the-art technology.",
    amenities: ["Lake Views", "Eco-Friendly", "Underfloor Heating", "Solar Panels", "Home Automation", "Gym"],
    featured: false,
    availability: "Available"
  },
  {
    id: "5",
    title: "Georgian Townhouse Estate",
    location: "Bath, England",
    price: 1650000,
    bedrooms: 5,
    bathrooms: 4,
    area: 3600,
    type: "Townhouse",
    images: [
      "georgian townhouse exterior",
      "georgian home interior",
      "period townhouse living room",
      "townhouse garden city",
      "elegant townhouse bedroom"
    ],
    description: "Magnificent Georgian townhouse in the heart of Bath. Beautifully restored with high ceilings, ornate cornicing, and walled garden.",
    amenities: ["City Centre", "Walled Garden", "Original Features", "Cellar", "Roof Terrace", "Period Windows"],
    featured: false,
    availability: "Available"
  },
  {
    id: "6",
    title: "Coastal Cliffside Estate",
    location: "Devon, England",
    price: 2200000,
    bedrooms: 6,
    bathrooms: 5,
    area: 4200,
    type: "Estate",
    images: [
      "coastal cliff house exterior",
      "ocean view home interior",
      "cliff house terrace",
      "luxury coastal bedroom",
      "coastal property gardens"
    ],
    description: "Spectacular clifftop position with 180-degree sea views. Architect-designed with expansive terraces and direct coastal path access.",
    amenities: ["Sea Views", "Terraces", "Coastal Access", "Landscaped Gardens", "Triple Garage", "Study"],
    featured: false,
    availability: "Available"
  },
  {
    id: "7",
    title: "Scottish Highland Castle",
    location: "Highlands, Scotland",
    price: 3500000,
    bedrooms: 10,
    bathrooms: 8,
    area: 8000,
    type: "Castle",
    images: [
      "scottish castle exterior",
      "castle interior hall",
      "highland castle grounds",
      "castle turret room",
      "castle estate woodland"
    ],
    description: "Magnificent castle estate dating from the 16th century. Set in 200 acres including woodland, lochs, and formal gardens.",
    amenities: ["Historic Castle", "200 Acres", "Fishing Rights", "Woodland", "Formal Gardens", "Gate Lodge"],
    featured: true,
    availability: "Available"
  },
  {
    id: "8",
    title: "Modernist Villa Estate",
    location: "Surrey, England",
    price: 1950000,
    bedrooms: 5,
    bathrooms: 4,
    area: 3900,
    type: "Villa",
    images: [
      "modernist villa exterior",
      "modernist home interior",
      "villa courtyard pool",
      "modern villa bedroom",
      "villa architecture details"
    ],
    description: "Striking modernist villa designed by acclaimed architect. Features clean lines, open-plan living, and beautiful landscaped gardens.",
    amenities: ["Architectural Design", "Swimming Pool", "Landscaped Gardens", "Home Office", "Climate Control", "Security"],
    featured: false,
    availability: "Available"
  }
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};

export const getFeaturedProperties = (): Property[] => {
  return properties.filter(property => property.featured);
};
