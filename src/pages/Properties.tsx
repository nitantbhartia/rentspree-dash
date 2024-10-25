import { PropertyCard } from '../components/properties/PropertyCard';
import { PropertyFilters } from '../components/properties/PropertyFilters';
import { PropertySort } from '../components/properties/PropertySort';

const SAMPLE_PROPERTIES = [
  {
    id: 1,
    title: 'Modern Downtown Apartment',
    address: '123 Main St, Los Angeles, CA 90012',
    price: 2500,
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400',
  },
  {
    id: 2,
    title: 'Luxury Beach House',
    address: '456 Ocean Ave, Santa Monica, CA 90401',
    price: 4500,
    beds: 3,
    baths: 2.5,
    sqft: 2000,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400',
  },
  {
    id: 3,
    title: 'Cozy Studio in Hollywood',
    address: '789 Vine St, Los Angeles, CA 90028',
    price: 1800,
    beds: 0,
    baths: 1,
    sqft: 500,
    image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=400',
  },
];

export function Properties() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Available Properties</h1>
          <div className="flex space-x-4">
            <PropertySort />
            <PropertyFilters />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}