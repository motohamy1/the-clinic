import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ReturnToHome = () => {
  return (
    <div className='flex '>
      <Link href='/' className='flex gap-3 ml-3 py-3'>
        <Image
          src='/images/Arrow.png'
          alt='Arrow'
          width={50}
          height={30}
          className='cursor-pointer py-6 px-2  rounded-2xl
                     hover:scale-110 duration-300
                      shadow-[0_4px_15px_rgba(255,120,57,0.6)]'
        />
        <h2 className='text-xl py-4 rounded-2xl
                       '>
          Back to home
        </h2>
      </Link>
    </div>
  )
}

export default ReturnToHome