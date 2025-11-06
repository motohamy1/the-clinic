import { Star } from 'lucide-react';
import { Physician } from '@/lib/types/physician';
import CommentCarousel  from "@/components/ui/CommentCarousel";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

interface DoctorCardProps {
    physician: Physician;
}

const techLogos = [
    { node: <SiReact size={48} color="#a7a29c" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs size={48} color="#5f4b3bff" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript size={48} color="#a7a29c" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss size={48} color="#a77c48ff" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const DoctorCard = ({ physician }: DoctorCardProps) => {
    const { name, specialty, rating, image, comments } = physician;

    // Generate filled stars based on rating
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating);

        for (let i = 0; i < 5; i++) {
            stars.push(
                <Star
                    key={i}
                    className={`w-5 h-5 ${i < fullStars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                />
            );
        }
        return stars;
    };

    // Map comments to LogoItem format for LogoLoop
    const commentLogos = comments.map((comment, index) => ({
        node: <span className="text-sm text-gray-700 font-medium">{comment}</span>,
        title: `Comment ${index + 1}`,
    }));

    return (
        <>


            <div className=" shadow-2xl max-w-md w-full bg-grey rounded-2xl">
                {/* Image */}
                <div className="relative h-80 w-full overflow-hidden rounded-2xl">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="text-4xl p-6 bg-grey-800">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
                    <p className="text-lg text-gray-600 mb-4">{specialty}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1">{renderStars()}</div>
                        <span className="text-lg font-bold text-gray-700">{rating.toFixed(1)}</span>
                    </div>
                </div>
                {/* Comments Section */}
                <div className="border-2xl border-gray-200 bg-gray">
                    <CommentCarousel
                        comments={comments || []}
                        interval={4000}
                    />
                </div>
            </div>
        </>
    );
};

export default DoctorCard;
