import { supabase } from '../supabase/client';
import { Physician, PhysicianDB, mapPhysicianFromDB } from '../types/physician';

export async function fetchPhysicians(): Promise<Physician[]> {
  const { data, error } = await supabase
    .from('physicians')
    .select('*')
    .order('search_count', { ascending: false });

  if (error) {
    console.error('Error fetching physicians:', error);
    throw error;
  }

  return (data as PhysicianDB[]).map(mapPhysicianFromDB);
}

export async function searchPhysicians(query: string): Promise<Physician[]> {
  if (!query.trim()) {
    return fetchPhysicians();
  }

  const { data, error } = await supabase
    .from('physicians')
    .select('*')
    .or(`name.ilike.%${query}%,specialty.ilike.%${query}%`);

  if (error) {
    console.error('Error searching physicians:', error);
    throw error;
  }

  return (data as PhysicianDB[]).map(mapPhysicianFromDB);
}
