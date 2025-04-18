import React from 'react'
import AD from '../../assets/Ad.png'
import ADSM from '../../assets/Ad_sm.png'
import Image from 'next/image'
import Button from './Button'
function Advert() {
  return (
    <div className='relative'>
        <Image src={AD} alt="Advert" width={1920} height={400} className='w-full h-[300px] hidden lg:block object-cover' />
        <Image src={ADSM} alt="Advert" width={400} height={400} className='w-full h-[250px] block lg:hidden object-cover' />
        <div>
            <div className='absolute  inset-0 bg-black bg-opacity-40'>
                <div className='p-6 lg:px-0 max-w-7xl mx-auto w-full h-full flex flex-col justify-between'>
                    <div className='font-poppins text-white space-y-4 w-full'>
                        <div className='-space-y-1 lg:space-y-1'>
                            <p className='text-2xl font-poppins lg:text-5xl font-bold'>Extends Tyre Life</p>
                            <p className='text-2xl font-poppins lg:text-5xl font-bold'>By Up To <f className='text-[#FFD101]'>30%</f></p>
                        </div>
                        <p className='font-sans  lg:text-2xl w-10/12 font-light'>
                            The Ultimate Solution for Puncture Prevention and Tyre Longevity
                        </p>
                        <div className='w-full lg:justify-end flex'>
                            <Button variant='primary'>Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advert