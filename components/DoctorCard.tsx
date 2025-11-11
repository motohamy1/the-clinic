import { Star } from 'lucide-react';
import { Physician } from '@/lib/types/physician';
import CommentCarousel  from "@/components/ui/CommentCarousel";

interface DoctorCardProps {
    physician: Physician;
}


const DoctorCard = ({ physician }: DoctorCardProps) => {
    const { name, specialty, rating, image, comments } = physician;

    // Test comments - fallback if physician.comments is empty
    const testComments = [
        "One of the kindest doctors I've ever met. Highly professional and caring!",
        "Dr. Smith took the time to listen to all my concerns. Excellent bedside manner.",
        "Very thorough examination and explained everything clearly. I felt safe and comfortable.",
        "Best doctor in the area! Made my recovery so much smoother.",
        "Compassionate, knowledgeable, and patient. I recommend them to everyone!"
    ];

    // Use physician comments if available, otherwise use test comments
    const displayComments = comments && comments.length > 0 ? comments : testComments;


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
                <div className="relative h-95 w-full overflow-hidden rounded-2xl">
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
                        comments={displayComments}
                        interval={4000}
                    />
                </div>
            </div>
        </>
    );
};

export default DoctorCard;
