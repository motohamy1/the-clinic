'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type ReturnToHomeProps = {
  className?: string;
};

const ReturnToHome = ({ className }: ReturnToHomeProps) => {
  const router = useRouter()

  const handleBack = () => {
    // Try to go back in history; if there's no history, fallback to home
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <div className={['flex', className].filter(Boolean).join(' ')}>
      <button onClick={handleBack} aria-label='Go back one page'>
        <Image
          src='/images/left-arrow.png'
          alt='Arrow'
          width={30}
          height={10}
          className='bg-[#ff7839]
                     cursor-pointer py-1 px-1 md:py-1 md:px-2 rounded-xl md:rounded-2xl
                     hover:scale-110 duration-300 w-[30px] h-[20px] md:w-[50px] md:h-[30px]'
        />
      </button>
    </div>
  )
}

export default ReturnToHome
