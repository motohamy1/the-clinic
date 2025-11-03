import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ReturnToHome = () => {
  return (
    <div className='flex'>
      <Link href='/' className='flex items-center gap-2 md:gap-3 ml-2 md:ml-3 py-1 md:py-2'>
        <Image
          src='/images/Arrow.png'
          alt='Arrow'
          width={30}
          height={20}
          className='cursor-pointer py-1 px-1 md:py-2 md:px-2 rounded-xl md:rounded-2xl
                     hover:scale-110 duration-300 w-[30px] h-[20px] md:w-[50px] md:h-[30px]'
        />
        <h2 className='text-base md:text-xl rounded-xl md:rounded-2xl
                       hover:scale-110 duration-300'>
          Back to home
        </h2>
      </Link>
    </div>
  )
}

export default ReturnToHome