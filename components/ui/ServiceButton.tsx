import Link from "next/link"


interface ServiceButtonProps {
    title: string;
    href: string;
    size?: 'sm' | 'md' | 'lg';
    responsive?: boolean;
}

const ServiceButton = ({ title, href, size='md', responsive=false} : ServiceButtonProps) => {
    const sizeClasses = {
        sm: 'w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 text-xs sm:text-sm md:text-base',
        md: 'w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 text-sm sm:text-base md:text-lg',
        lg: 'w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 text-base sm:text-lg md:text-xl',
    };

    // Responsive sizing: sm on mobile, md on tablet, lg on desktop
    const responsiveClass = 'w-24 h-24 text-xs sm:w-32 sm:h-32 sm:text-sm md:w-48 md:h-48 md:text-lg';

  return (
    <Link 
        href={href} 
        className={`${responsive ? responsiveClass : sizeClasses[size]} service_button`}
        
    >
        <span className="text-center px-2 sm:px-3 md:px-4">{title}</span>
    </Link>
  )
}

export default ServiceButton