'use client';
import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

interface CommentCarouselProps {
    comments: string[];
    interval?: number; // Time in milliseconds to show each comment
    className?: string;
}

const CommentCarousel: React.FC<CommentCarouselProps> = ({
                                                             comments,
                                                             interval = 3000,
                                                             className = ''
                                                         }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (!comments || comments.length === 0) return;

        const timer = setInterval(() => {
            setIsAnimating(true);

            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
                setIsAnimating(false);
            }, 500); // Half of transition time
        }, interval);

        return () => clearInterval(timer);
    }, [comments, interval]);

    if (!comments || comments.length === 0) {
        return (
            <div className={`flex items-center justify-center p-6 ${className}`}>
                <p className="text-gray-400 italic">No comments yet</p>
            </div>
        );
    }

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <div className="flex items-start gap-3 p-6">
                <Quote className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div className="flex-1 min-h-[60px] flex items-center">
                    <p
                        className={`text-sm md:text-base text-gray-700 font-medium transition-all duration-500 ${
                            isAnimating
                                ? 'opacity-0 translate-y-4'
                                : 'opacity-100 translate-y-0'
                        }`}
                    >
                        {comments[currentIndex]}
                    </p>
                </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 pb-4">
                {comments.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex
                                ? 'w-8 bg-amber-500'
                                : 'w-2 bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to comment ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CommentCarousel;