import ServiceButton from "../ui/ServiceButton"

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-16 px-4">
        <div className="relative w-full max-w-[280px] sm:max-w-md md:max-w-2xl aspect-square">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                    {/* Top - Physicians */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                        <ServiceButton
                            title="Physicians"
                            href="/physicians"
                            responsive
                        />
                    </div>

                    {/* left - Dentists */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2">
                        <ServiceButton
                            title="Dentists"
                            href="/dentists"
                            responsive
                        />
                    </div>

                    {/* right - Physical Therapy */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2">
                        <ServiceButton
                            title="Physical Therapy"
                            href="/physical-therapy"
                            responsive
                        />
                    </div>

                     {/* Bottom - AI Medical Hub */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                        <ServiceButton 
                            title="AI medical Hub" 
                            href="/ai-hub"
                            responsive
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default HeroSection