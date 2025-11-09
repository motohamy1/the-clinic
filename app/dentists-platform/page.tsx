'use client'
import { useState, useEffect } from 'react';
import Search from '@/components/Search'
import PhysicianGrid from '@/components/ui/PhysicianGrid'
import { Physician } from '@/lib/types/physician'
import { fetchPhysicians } from '@/lib/services/physicianService'
import PhysicianHeader from '@/components/ui/PhysicianHeader';

const DentistPlatform = () => {
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

            <PhysicianHeader
                titleLabel="Dentists Platform"
                buttonLabel="Dentists"
                basePath="/dentists-platform"
            />

            <div className="flex px-4">
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

            {!loading && !error && <PhysicianGrid physicians={filteredPhysicians} basePath="/dentists-platform" />}
        </main>
    )
}

export default DentistPlatform