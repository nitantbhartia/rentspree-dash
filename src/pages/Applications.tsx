import { ApplicationList } from '../components/applications/ApplicationList';
import { ApplicationStats } from '../components/applications/ApplicationStats';

export function Applications() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Rental Applications</h1>
        <ApplicationStats />
        <ApplicationList />
      </div>
    </div>
  );
}