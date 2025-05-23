'use client'
import React from 'react'
import Button from './Button'
import { useRouter } from 'next/navigation'
function Advert2() {
    const route = useRouter()
    const handleClick = () => {
        route.push('/about')
    }
    return (
        <div className='relative'>
            <div className='bg-[#FFD101] w-full h-[300px] lg:h-[250px] ' />
            <div>
                <div className='absolute  inset-0  '>
                    <div className='p-6 lg:px-0 max-w-7xl mx-auto w-full h-full flex flex-col justify-between'>
                        <div className='font-poppins  space-y-4 w-full'>
                            <div className='-space-y-1 lg:space-y-1 text-black'>
                                <p className='text-2xl font-andreas lg:text-5xl font-bold'>The Ultimate Tyre </p>
                                <p className='text-2xl font-andreas lg:text-5xl font-bold'>Protection Solution</p>
                            </div>
                            <p className='font-sans  lg:text-lg lg:w-6/12 w-11/12 text-black font-light'>
                                Engineered for superior performance, our tyre sealant adapts to
                                various road conditions, offering unparalleled reliability.

                            </p>
                            <div className='w-full lg:hidden lg:right-24 lg:bottom-24 z-50 lg:justify-end flex'>
                                <Button variant='secondary'>Learn More</Button>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='hidden lg:block'>
                    <div className='w-full absolute lg:right-24 lg:bottom-24 z-50 lg:justify-end flex'>
                        <Button onClick={handleClick} variant='secondary'>Learn More</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Advert2