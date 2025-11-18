'use client'
import React from 'react'
import ReturnToHome from "@/components/ui/ReturnToHome";
import {AnimatedShinyButton} from "@/components/ui/animated-shiny-button";
import Link from "next/link";
import Image from "next/image";


const Page = () => {
    return (
        <main>
            <ReturnToHome className='m-2'/>
            {/*<AiHeader />*/}

            {/* Mobile Layout */}
            <div className="lg:hidden px-4 py-2">
                {/* Mobile Header */}
                <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center gap-2'>
                        <Image src='/icons/logo.svg' alt='Logo' width={32} height={32} />
                        <h2 className='text-lg font-bold'>Bacillus AI</h2>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-medium text-sm'>
                            U
                        </div>
                    </div>
                </div>
                
                {/* Mobile Chat Area */}
                <div className="h-[calc(100vh-120px)] bg-gray rounded-3xl flex flex-col shadow-lg shadow-[#ff7839]">
                    {/* Welcome content */}
                    <div className='flex-1 flex items-center justify-center p-4'>
                        <div className='text-center space-y-3'>
                            <Image src='/icons/logo.svg' alt='Logo' width={60} height={45} className='mx-auto'/>
                            <h2 className='text-xl font-bold text-gray-900'>Welcome To Bacillus AI</h2>
                            <p className='text-sm text-gray-600'>How can I help you today?</p>
                        </div>
                    </div>
                    
                    {/* Mobile Input Area */}
                    <div className='p-4 border-t border-gray-200 rounded-2xl shadow-lg shadow-[#ff7839]'>
                        <div className='flex items-end gap-3'>
                            <textarea 
                                placeholder='Type your message...'
                                className='flex-1 bg-transparent rounded-2xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff7839] border border-gray-200 resize-none min-h-[44px] max-h-32 overflow-y-auto'
                                rows={1}
                                onInput={(e) => {
                                    const target = e.target as HTMLTextAreaElement;
                                    target.style.height = 'auto';
                                    target.style.height = Math.min(target.scrollHeight, 128) + 'px';
                                }}
                            />
                            <button className='bg-[#ff7839] rounded-full p-3 hover:bg-[#e66a2f] transition-colors flex-shrink-0'>
                                <Image src='/icons/send.svg' alt='Send' width={20} height={20}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block px-12 mt-6 mb-6">
                <div className="flex flex-row gap-4 items-start">
                    {/*  the left side */}
                    <div className='basis-[350px] shrink-0 flex flex-col pr-6'>
                        <div className='flex items-center gap-2 rounded-full p-2 h-16'>
                            <Image src='/icons/logo.svg' alt='Logo' width={40} height={40} />
                            <h2 className='text-xl font-bold'>Bacillus AI</h2>
                        </div>
                        <div className="w-full h-[81vh] bg-gray rounded-2xl shadow-lg shadow-chart-1 flex flex-col">
                            <div className="pt-6 px-6">
                                <Link href='/new-chat' className='w-full'>
                                    <button className="w-full h-14 px-8 cursor-pointer rounded-full bg-gray-900 text-white font-medium text-lg
                                                    hover:bg-[#ff7839] transition-all duration-200">
                                        <span>New Chat</span>
                                    </button>
                                </Link>
                            </div>
                            <div className='flex-1'></div>
                            <div className='px-6 py-12 rounded-2xl bg-[#ff7839]'>
                                <div className='flex items-center justify-center gap-3'>
                                    <div className='w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-medium'>
                                        U
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-sm font-medium text-gray-900'>User Name</p>
                                        <p className='text-xs text-gray-500'>user@example.com</p>
                                    </div>
                                    <Image src='/icons/Log-out.svg' alt='Log Out' width={20} height={20} className='cursor-pointer'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  the right side */}
                    <div className='flex-1 flex flex-col pl-6'>
                        <div className='flex items-center justify-center rounded-full p-2 h-16'>
                            <AnimatedShinyButton>
                            <span className='text-white text-lg'>
                                Start Chatting
                            </span>
                            </AnimatedShinyButton>
                        </div>
                        <div className="w-full h-[81vh] bg-gray rounded-2xl shadow-lg shadow-chart-1 flex flex-col">
                            {/* Welcome content - centered */}
                            <div className='flex-1 flex items-center justify-center overflow-auto'>
                                <div className='text-center space-y-4'>
                                    <Image src='/icons/logo.svg' alt='Logo' width={80} height={60} className='mx-auto'/>
                                    <h2 className='text-2xl font-bold text-gray-900'>Welcome To Bacillus AI</h2>
                                    <p className='text-gray-600'>How can I help you today?</p>
                                </div>
                            </div>
                            
                            {/* Chat input area */}
                            <div className='bg-transparent rounded-2xl m-6 p-6 shadow-lg shadow-[#ff7839]/90'>
                                <div className='flex items-end gap-4'>
                                    <textarea
                                        placeholder='Type your message here...'
                                        className='flex-1 bg-transparent rounded-2xl px-6 py-5 text-gray-900 placeholder-gray-500 focus:outline-none text-lg resize-none min-h-[60px] max-h-40 overflow-y-auto'
                                        rows={1}
                                        onInput={(e) => {
                                            const target = e.target as HTMLTextAreaElement;
                                            target.style.height = 'auto';
                                            target.style.height = Math.min(target.scrollHeight, 160) + 'px';
                                        }}
                                    />
                                    <button className='bg-[#ff7839] rounded-full p-4 hover:bg-[#e66a2f] transition-colors flex-shrink-0'>
                                        <Image src='/icons/send.svg' alt='Send' width={24} height={24}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Page
