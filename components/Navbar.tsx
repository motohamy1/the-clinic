'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavButton from './ui/navButton';
import BubbleMenu from './ui/BubbleMenu';
import { useState, useEffect } from 'react';

interface NavbarProps {
  onMenuStateChange?: (isOpen: boolean) => void;
}

const Navbar = ({ onMenuStateChange }: NavbarProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Menu items for BubbleMenu
  const menuItems = [
    {
      label: 'home',
      href: '/',
      ariaLabel: 'Home',
      rotation: -5,
      hoverStyles: { bgColor: '#8C9B81', textColor: '#ffffff' }
    },
    {
      label: 'solutions',
      href: '/solutions',
      ariaLabel: 'Solutions',
      rotation: 3,
      hoverStyles: { bgColor: '#A8B89D', textColor: '#ffffff' }
    },
    {
      label: 'contact',
      href: '/contact',
      ariaLabel: 'Contact',
      rotation: 5,
      hoverStyles: { bgColor: '#7A8970', textColor: '#ffffff' }
    },
    {
      label: 'profile',
      href: '/profile',
      ariaLabel: 'Profile',
      rotation: -3,
      hoverStyles: { bgColor: '#6B7A61', textColor: '#ffffff' }
    }
  ];

  // Show BubbleMenu on mobile (only after client-side hydration)
  if (!isClient) {
    // Return desktop navbar during SSR to avoid hydration mismatch
    return (
      <header className='fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-5xl'>
        <nav className='bg-[#d4cec4]/60 backdrop-blur-md rounded-full shadow-lg border border-white/20 px-8 py-3'>
          <div className='flex items-center justify-between gap-4'>
            <div className='flex items-center gap-4'>
              <Link href='/'>
                <NavButton name="Home" />
              </Link>
              <Link href='/features'>
                <NavButton name="Solutions" />
              </Link>
            </div>
            <Link href='/' className='shrink-0'>
              <Image
                src='/icons/logogreen.svg'
                alt='Logo'
                width={65}
                height={65}
                className='hover:scale-145 transition-transform rounded-2xl'
              />
            </Link>
            <div className='flex items-center gap-4'>
              <Link href='/contact'>
                <NavButton name="Contact" />
              </Link>
              <Link href='/profile'>
                <NavButton name="Profile" />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  if (isMobile) {
    return (
      <BubbleMenu
        logo={<span style={{ fontWeight: 700 }}>The Clinic</span>}
        items={menuItems}
        menuAriaLabel="Toggle navigation"
        menuBg="#d4cec4"
        menuContentColor="#333333"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
    );
  }

//     items={menuItems}
//   menuAriaLabel="Toggle navigation"
//   menuBg="#d4cec4"
//   menuContentColor="#333333"
//   useFixedPosition={true}
//   animationEase="back.out(1.5)"
//   animationDuration={0.5}
//   staggerDelay={0.12}
//   onMenuClick={onMenuStateChange}
// />


  // Show regular navbar on desktop
  return (
    <header className='fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-5xl'>
      <nav className='bg-[#d4cec4]/60 backdrop-blur-md rounded-full shadow-lg border border-white/20 px-8 py-3'>
        <div className='flex items-center justify-between gap-4'>
          {/* Left section */}
          <div className='flex items-center gap-4'>
            <Link href='/'>
              <NavButton name="Home" />
            </Link>
            <Link href='/features'>
              <NavButton name="Solutions" />
            </Link>
          </div>

          {/* Center Logo */}
          <Link href='/' className='shrink-0'>
            <Image
              src='/icons/logogreen.svg'
              alt='Logo'
              width={65}
              height={65}
              className='hover:scale-145 transition-transform rounded-2xl'
            />
          </Link>

          {/* Right section */}
          <div className='flex items-center gap-4'>
            <Link href='/contact'>
              <NavButton name="Contact" />
            </Link>
            <Link href='/profile'>
              <NavButton name="Profile" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar