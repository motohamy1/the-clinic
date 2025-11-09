'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import PhysicianHeader from '@/components/ui/PhysicianHeader'
import DoctorCard from '@/components/DoctorCard'
import { Physician } from '@/lib/types/physician'
import { supabase } from '@/lib/supabase/client'
import { mapPhysicianFromDB, PhysicianDB } from '@/lib/types/physician'
import { AnimatedShinyButton } from '@/components/ui/animated-shiny-button'

const Appointment = () => {
    const params = useParams()
    const physicianId = params.id as string
    const [physician, setPhysician] = useState<Physician | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchPhysician = async () => {
            try {
                setLoading(true)
                const { data, error } = await supabase
                    .from('physicians')
                    .select('*')
                    .eq('id', physicianId)
                    .single()

                if (error) throw error

                if (data) {
                    setPhysician(mapPhysicianFromDB(data as PhysicianDB))
                }
            } catch (err) {
                console.error('Error fetching physician:', err)
                setError('Failed to load physician details')
            } finally {
                setLoading(false)
            }
        }

        if (physicianId) {
            fetchPhysician()
        }
    }, [physicianId])

    if (loading) {
        return (
            <main className="min-h-screen pb-8">
                <PhysicianHeader
                    titleLabel="Physical Therapy Platform"
                    buttonLabel="Physical Therapy"
                    basePath="/physical-therapy-platform"
                />
                <div className="flex justify-center items-center py-16">
                    <p className="text-xl text-gray-600">Loading...</p>
                </div>
            </main>
        )
    }

    if (error || !physician) {
        return (
            <main className="min-h-screen pb-8">
                <PhysicianHeader
                     titleLabel="Physical Therapy Platform"
                     buttonLabel="Physical Therapy"
                     basePath="/physical-therapy-platform"
                />
                <div className="flex justify-center items-center py-16">
                    <p className="text-xl text-red-600">{error || 'Physician not found'}</p>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen pb-8">
            <PhysicianHeader />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-20">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    {/* Text Section - Left Side */}
                    <div className='flex-1 space-y-14 '>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                            Congratulation!!
                        </h1>
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600">
                            You have met your Ideal Doctor,<br />
                            Wish it would help you in fast Recovery.
                        </h2>
                        <div className='flex mt-65 gap-8'>
                            <AnimatedShinyButton >
                                <span className="text-white">Appointment Now</span>
                            </AnimatedShinyButton>
                            <AnimatedShinyButton >
                                <span className="text-white">Schedule later</span>
                            </AnimatedShinyButton>
                        </div>
                    </div>

                    {/* Doctor Card - Right Side */}
                    <div className='flex-1 flex justify-center md:justify-end'>
                        <DoctorCard physician={physician} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Appointment