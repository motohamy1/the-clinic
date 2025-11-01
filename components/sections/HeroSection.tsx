import ServiceButton from "../ui/ServiceButton"
import LogoLoop from '../LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
    { node: <SiReact size={48} color="#a7a29c" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs size={48} color="#5f4b3bff" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript size={48} color="#a7a29c" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss size={48} color="#a77c48ff" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const HeroSection = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="flex-1 flex items-center justify-center pt-16 md:pt-49 pb-11 px-4">
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
            <footer className="bg-background">
                <div className="h-[80px] md:h-[120px] relative overflow-hidden">
                    <LogoLoop
                        logos={techLogos}
                        speed={50}
                        direction="left"
                        logoHeight={48}
                        gap={60}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#ffffff"
                        ariaLabel="Technology partners"
                    />
                </div>
            </footer>
        </div>
    )
}

export default HeroSection