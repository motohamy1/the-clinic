import Link from 'next/link';
import { Star } from 'lucide-react';
import { Physician } from '@/lib/types/physician';
import { AnimatedShinyButton } from "@/components/ui/animated-shiny-button"

interface PhysicianCardProps {
    physician: Physician;
}

const PhysicianCard = ({ physician }: PhysicianCardProps) => {
    const { id, name, specialty, rating, image } = physician;

    // Generate filled stars based on rating
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating);

        for (let i = 0; i < 5; i++) {
            stars.push(
                <Star
                    key={i}
                    className={`w-4 h-4 ${i < fullStars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                />
            );
        }
        return stars;
    };

    return (
        <>
            <style jsx>{`
                @property --gradient-angle {
                    syntax: "<angle>";
                    initial-value: 0deg;
                    inherits: false;
                }

                .physician-card {
                    position: relative;
                    isolation: isolate;
                    border-radius: 0.75rem;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
                }

                .physician-card::before {
                    content: "";
                    position: absolute;
                    inset: -2px;
                    border-radius: 0.75rem;
                    padding: 2px;
                    background: conic-gradient(
                        from var(--gradient-angle),
                        transparent,
                        #FF7839 10%,
                        #ff6620 20%,
                        #FF7839 30%,
                        transparent 40%
                    );
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    z-index: -1;
                }

                .physician-card:hover::before {
                    opacity: 1;
                    animation: rotate-gradient 3s linear infinite;
                }

                .physician-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(255, 120, 57, 0.3);
                }

                @keyframes rotate-gradient {
                    to {
                        --gradient-angle: 360deg;
                    }
                }
            `}</style>

            <div className="physician-card bg-grey shadow-lg">
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
                    <p className="text-gray-600 mb-3">{specialty}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-1">{renderStars()}</div>
                        <span className="text-sm font-semibold text-gray-700">{rating.toFixed(1)}</span>
                    </div>

                    {/* Book Appointment Button */}
                    <Link href={`/physicians-platform/appointment/${id}`}>
                        <AnimatedShinyButton className="w-full bg-[#FF7839] hover:bg-[#ff6620] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                            Book Appointment
                        </AnimatedShinyButton>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PhysicianCard;
