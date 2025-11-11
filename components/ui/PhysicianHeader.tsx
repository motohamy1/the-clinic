'use client'
import { AnimatedShinyButton } from "@/components/ui/animated-shiny-button";
import ReturnToHome from './ReturnToHome'
import { usePathname } from 'next/navigation'

interface PhysicianHeaderProps {
    titleLabel?: string;
    buttonLabel?: string;
    basePath?: string; // e.g. "/physicians-platform" or "/dentists-platform"
}

const PhysicianHeader = ({
    titleLabel = 'Physicians Platform',
    buttonLabel = 'Physicians',
    basePath = '/physicians-platform',
}: PhysicianHeaderProps) => {
    const pathname = usePathname()

    // Check if we're on any appointment page under the given basePath
    const isAppointmentPage = pathname?.startsWith(`${basePath}/appointment`)

    return (
        <>
            <header className="px-4 pt-4 md:pt-4 pb-3 md:pb-4">
                <div className="mb-2 md:mb-4">
                    <ReturnToHome />
                </div>
                <div className='flex justify-center'>
                    <h1 className='inline-block text-center font-bold text-xl md:text-2xl 
                         text-primary bg-gradient-to-r from-[#FF7839] to-[#ff7839]
                         shadow-[0_4px_15px_rgba(255,120,57,0.6)]
                         px-4 md:px-6 py-2 hover:scale-110 transition-all rounded-2xl'>
                        {titleLabel}
                    </h1>
                </div>
            </header>

            {/* Three nav buttons */}
            <nav className='flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-6 md:mt-10 px-4'>
                <AnimatedShinyButton
                    url={basePath}
                    isActive={pathname === basePath}
                >
                    {buttonLabel}
                </AnimatedShinyButton>
                <AnimatedShinyButton
                    url={basePath}
                    isActive={!!isAppointmentPage}
                >
                    Appointment
                </AnimatedShinyButton>
                <AnimatedShinyButton
                    url={`${basePath}/consultation`}
                    isActive={pathname === `${basePath}/consultation`}
                >
                    Consultation
                </AnimatedShinyButton>
            </nav>
        </>
    )
};

export default PhysicianHeader