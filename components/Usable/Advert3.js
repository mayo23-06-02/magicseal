import React from 'react'
import AD from '../../assets/Ad_book.png'
import ADSM from '../../assets/Ad_book.png'
import Image from 'next/image'
import Button from './Button'
function Advert3() {
    return (
        <div className='relative'>
            <Image src={AD} alt="Advert" width={1920} height={40} className='w-full h-[400px] hidden lg:block object-cover' />
            <Image src={ADSM} alt="Advert" width={400} height={400} className='w-full h-[400px] block lg:hidden object-cover' />
            <div>
                <div className='absolute  inset-0 '>
                    <div className='p-6 lg:px-0 max-w-7xl mx-auto w-full h-full flex flex-col justify-between'>
                        <div className='font-poppins  space-y-4 w-full'>
                            <div className='-space-y-1 lg:space-y-1 text-white'>
                                <p className='text-2xl font-poppins lg:text-5xl font-bold'>Book A Demo</p>
                                <p className='text-2xl font-poppins lg:text-5xl font-bold'>Today</p>
                            </div>
                            <p className='font-sans text-white  lg:text-2xl lg:w-6/12 font-light'>
                                Get insights from our specialists on maximizing tyre.
                                Fill out the form below and schedule your demo now!
                            </p>

                        </div>
                        <div className='w-full py-4 space-y-4 lg:space-y-0 lg:space-x-6  flex-col lg:flex-row lg:justify-end flex bg-[#161616] p-4'>
                            <input type="text" placeholder="Location" className="w-full h-10 text-sm bg-transparent border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-[#FFD101]" />
                            <input type="text" placeholder="Name" className="w-full h-10 text-sm bg-transparent border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-[#FFD101]" />
                            <Button variant='primary'>Call Me Today</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advert3