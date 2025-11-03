export interface Physician {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  image: string;
  searchCount: number;
}

// Database type (matches Supabase schema with snake_case)
export interface PhysicianDB {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  image_url: string;
  search_count: number;
  created_at?: string;
}

// Helper to convert DB format to app format
export function mapPhysicianFromDB(dbPhysician: PhysicianDB): Physician {
  return {
    id: dbPhysician.id,
    name: dbPhysician.name,
    specialty: dbPhysician.specialty,
    rating: dbPhysician.rating,
    image: dbPhysician.image_url,
    searchCount: dbPhysician.search_count,
  };
}
