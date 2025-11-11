import ServiceButton from "../ui/ServiceButton"
import CommentCarousel from "@/components/ui/CommentCarousel";


const HeroSection = () => {
    return (
        <div className="flex flex-col min-h-max">
            <section className="flex-1 flex items-center justify-center pt-16 md:pt-49 pb-11 px-4">
                <div className="relative w-full max-w-[280px] sm:max-w-md md:max-w-2xl aspect-square">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full">
                            {/* Top - Physicians */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2">
                                <ServiceButton
                                    title="Physicians"
                                    href="/physicians-platform"
                                    responsive
                                />
                            </div>

                            {/* left - Dentists */}
                            <div className="absolute top-1/2 left-0 -translate-y-1/2">
                                <ServiceButton
                                    title="Dentists"
                                    href="/dentists-platform"
                                    responsive
                                />
                            </div>

                            {/* right - Physical Therapy */}
                            <div className="absolute top-1/2 right-0 -translate-y-1/2">
                                <ServiceButton
                                    title="Physical Therapy"
                                    href="/physical-therapy-platform"
                                    responsive
                                />
                            </div>

                            {/* Bottom - AI Medical Hub */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                                <ServiceButton
                                    title="AI medical Hub"
                                    href="/ai-platform"
                                    responsive
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-background">
                <div className="h-[50px] md:h-[50px] mb-10 relative overflow-hidden">
                    <CommentCarousel comments={[]} />
                </div>
            </footer>
        </div>
    )
}

export default HeroSection