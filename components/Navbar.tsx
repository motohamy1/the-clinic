import Link from 'next/link';
import Image from 'next/image';
import NavButton from './ui/navButton';

const Navbar = () => {
  return (
    <header className='fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-5xl'>
      <nav className='bg-[#d4cec4]/60 backdrop-blur-md rounded-full shadow-lg border
                        border-white/20 px-8 py-3'>
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
              className='hover:scale-155 transition-transform rounded-2xl'
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