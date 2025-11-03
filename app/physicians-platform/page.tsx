'use client'
import { useState, useEffect } from 'react';
import ReturnToHome from '@/components/ui/ReturnToHome'
import { AnimatedShinyButton } from "@/components/ui/animated-shiny-button"
import Search from '@/components/Search'
import PhysicianGrid from '@/components/ui/PhysicianGrid'
import { Physician } from '@/lib/types/physician'
import { fetchPhysicians } from '@/lib/services/physicianService'

const PhysiciansPlatform = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [physicians, setPhysicians] = useState<Physician[]>([]);
  const [filteredPhysicians, setFilteredPhysicians] = useState<Physician[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch physicians on mount
  useEffect(() => {
    const loadPhysicians = async () => {
      try {
        setLoading(true);
        const data = await fetchPhysicians();
        setPhysicians(data);
        setFilteredPhysicians(data);
      } catch (err) {
        setError('Failed to load physicians. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPhysicians();
  }, []);

  // Filter physicians based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredPhysicians(physicians);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = physicians.filter(
        (physician) =>
          physician.name.toLowerCase().includes(query) ||
          physician.specialty.toLowerCase().includes(query)
      );
      setFilteredPhysicians(filtered);
    }
  }, [searchQuery, physicians]);

  return (
    <main className="min-h-screen pb-8">

      {/* Header with a return to home button and a title */}
      <header className="px-4 pt-2 md:pt-4 pb-3 md:pb-4">
        <div className="mb-2 md:mb-4">
          <ReturnToHome />
        </div>
        <div className='flex justify-center'>
          <h1 className='inline-block text-center font-bold text-xl md:text-2xl 
                         text-primary bg-gradient-to-r from-[#FF7839] to-[#ff7839]
                         shadow-[0_4px_15px_rgba(255,120,57,0.6)]
                         px-4 md:px-6 py-2 transition-all rounded-2xl'>
            Physicians Platform
          </h1>
        </div>
      </header>

      {/* Three nav buttons */}
      <nav className='flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-6 md:mt-10 px-4'>
        <AnimatedShinyButton url="/physicians-platform">
          Physicians
        </AnimatedShinyButton>
        <AnimatedShinyButton url="/appointment">
          Appointment
        </AnimatedShinyButton>
        <AnimatedShinyButton url="/consultation">
          Consultation
        </AnimatedShinyButton>
      </nav>
      <div className="px-4 md:px-8 lg:px-12 mt-4">
        <Search
          placeholder="Search for a physician"
          value={searchQuery}
          onChange={setSearchQuery}
        />
      </div>

      {loading && (
        <div className="flex justify-center items-center py-16">
          <p className="text-xl text-gray-600">Loading physicians...</p>
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center py-16">
          <p className="text-xl text-red-600">{error}</p>
        </div>
      )}

      {!loading && !error && <PhysicianGrid physicians={filteredPhysicians} />}
    </main>
  )
}

export default PhysiciansPlatform