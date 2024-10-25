import { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';

export function PropertySort() {
  const [sort, setSort] = useState('newest');

  return (
    <div className="flex items-center">
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        <option value="newest">Newest</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="beds">Beds</option>
        <option value="sqft">Square Feet</option>
      </select>
    </div>
  );
}