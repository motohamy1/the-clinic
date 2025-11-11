import React from 'react'
import ReturnToHome from "@/components/ui/ReturnToHome";
import AiHeader from "@/components/ui/AIHeader";
import {AnimatedShinyButton} from "@/components/ui/animated-shiny-button";


const Page = () => {
    return (
        <main>
            <ReturnToHome className='m-2'/>
            <AiHeader />

            <div className="px-2 md:px-8 lg:px-12 mt-6 mb-6">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                    {/* Video call on the left side */}
                    <div className='basis-[380px] md:basis-[350px] shrink-0 flex flex-col md:pr-6'>
                        <div className="w-full h-[80vh] bg-gray rounded-2xl shadow-lg shadow-chart-1 flex items-center justify-center">
                            <div className="text-center space-y-6">

                            </div>
                        </div>
                    </div>

                    {/* Chatting message on the right side */}
                    <div className='flex-1 flex flex-col md:pl-6'>
                        <div className="w-full h-[80vh] bg-gray rounded-2xl shadow-lg shadow-chart-1 flex items-center justify-center ">
                            <div className="text-center space-y-6">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Page
