'use client'
import { AnimatedShinyButton } from "@/components/ui/animated-shiny-button";
import ReturnToHome from './ReturnToHome'
import { usePathname } from 'next/navigation'

const PhysicianHeader = () => {
    const pathname = usePathname()

    // Check if we're on any appointment page
    const isAppointmentPage = pathname?.includes('/appointment')

    return (
        <>
            <header className="px-4 pt-2 md:pt-4 pb-3 md:pb-4">
                <div className="mb-2 md:mb-4">
                    <ReturnToHome />
                </div>
                <div className='flex justify-center'>
                    <h1 className='inline-block text-center font-bold text-xl md:text-2xl 
                         text-primary bg-gradient-to-r from-[#FF7839] to-[#ff7839]
                         shadow-[0_4px_15px_rgba(255,120,57,0.6)]
                         px-4 md:px-6 py-2 hover:scale-110 transition-all rounded-2xl'>
                        Physicians Platform
                    </h1>
                </div>
            </header>

            {/* Three nav buttons */}
            <nav className='flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-6 md:mt-10 px-4'>
                <AnimatedShinyButton
                    url="/physicians-platform"
                    isActive={pathname === '/physicians-platform'}
                >
                    Physicians
                </AnimatedShinyButton>
                <AnimatedShinyButton
                    url="/physicians-platform"
                    isActive={isAppointmentPage}
                >
                    Appointment
                </AnimatedShinyButton>
                <AnimatedShinyButton
                    url="/physicians-platform/consultation"
                    isActive={pathname === '/physicians-platform/consultation'}
                >
                    Consultation
                </AnimatedShinyButton>
            </nav>
        </>
    )
};

export default PhysicianHeader