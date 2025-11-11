import React from 'react'
import Image from "next/image";
import {AnimatedShinyButton} from "@/components/ui/animated-shiny-button";

const AiHeader = () => {
    return (
        <header className='flex flex-row mx-20 md:mt-2 gap-72'>
            <div className='flex items-center gap-2 border-2 border-[#ff7839] rounded-full p-2'>
                <Image src='/icons/logo.svg' alt='Logo' width={40} height={40} />
                <h2 className='text-xl font-bold'>Bacillus AI</h2>
            </div>
            <div className='flex items-center justify-center gap-6 ml-65 border-2 border-[#ff7839] rounded-full p-2'>
                <AnimatedShinyButton>
                        <span className='text-white text-lg'>
                            Start Chatting
                        </span>
                </AnimatedShinyButton>
                <AnimatedShinyButton>
                        <span className='text-white text-lg'>
                            Start Chatting
                        </span>
                </AnimatedShinyButton>
            </div>
        </header>
    )
}
export default AiHeader
