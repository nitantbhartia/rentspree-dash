import { Bed, Bath, Square } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    address: string;
    price: number;
    beds: number;
    baths: number;
    sqft: number;
    image: string;
  };
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link to={`/properties/${property.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-shadow hover:shadow-md">
        <div className="aspect-w-16 aspect-h-9 relative">
          <img
            src={property.image}
            alt={property.title}
            className="object-cover w-full h-48"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
            {property.title}
          </h3>
          <p className="text-gray-500 text-sm mt-1">{property.address}</p>
          <p className="text-2xl font-bold text-gray-900 mt-4">
            ${property.price.toLocaleString()}/mo
          </p>
          <div className="flex items-center gap-4 mt-4 text-gray-600">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{property.beds} {property.beds === 1 ? 'bed' : 'beds'}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{property.baths} {property.baths === 1 ? 'bath' : 'baths'}</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="h-4 w-4" />
              <span>{property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}