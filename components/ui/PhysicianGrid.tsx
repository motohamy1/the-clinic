import { Physician } from '@/lib/types/physician';
import PhysicianCard from './PhysicianCard';

interface PhysicianGridProps {
  physicians: Physician[];
  basePath?: string; // e.g. "/physicians-platform" or "/dentists-platform"
}

const PhysicianGrid = ({ physicians, basePath = '/physicians-platform' }: PhysicianGridProps) => {
  // Handle empty state
  if (physicians.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <p className="text-xl text-gray-600 mb-2">No physicians found matching your search</p>
        <p className="text-gray-500">Try searching by name or specialty</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-6 lg:px-8 py-6 md:py-8 max-w-7xl mx-auto">
      {physicians.map((physician) => (
        <PhysicianCard key={physician.id} physician={physician} basePath={basePath} />
      ))}
    </div>
  );
};

export default PhysicianGrid;
