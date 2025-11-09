
import PhysicianHeader from '@/components/ui/PhysicianHeader'
import {AnimatedShinyButton} from "@/components/ui/animated-shiny-button";


const Consultation = () => {
    return (
        <main className="min-h-screen pb-8">
            <PhysicianHeader
                titleLabel="Physical Therapy Platform"
                buttonLabel="Physical Therapy"
                basePath="/physical-therapy-platform"
            />

            <div className="container mx-auto px-6 md:px-8 lg:px-12 mt-20">
                <div className="flex flex-col md:flex-row gap-12 items-stretch">
                    {/* Video call on the left side */}
                    <div className='flex-1 flex flex-col justify-center items-center py-8 md:pr-6'>
                        <div className="w-full h-full min-h-[400px] bg-gray rounded-2xl shadow-lg shadow-chart-1 flex items-center justify-center">
                            <div className="text-center space-y-6">
                                <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="text-gray-500 text-lg">Video Call Area</p>
                                <AnimatedShinyButton className='h-14 px-8' >
                                    <span className="text-white text-lg">Start Video Call</span>
                                </AnimatedShinyButton>
                            </div>
                        </div>
                    </div>

                    {/* Chatting message on the right side */}
                    <div className='flex-1 flex flex-col justify-center items-center py-8 md:pl-6'>
                        <div className="w-full h-full min-h-[400px] bg-gray rounded-2xl shadow-lg shadow-chart-1 flex items-center justify-center ">
                            <div className="text-center space-y-6">
                                <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <p className="text-gray-500 text-lg">Chat Messaging Area</p>
                                <AnimatedShinyButton className='h-14 px-8' >
                                    <span className="text-white text-lg">Start Chatting</span>
                                </AnimatedShinyButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Consultation