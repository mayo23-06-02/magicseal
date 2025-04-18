import React from 'react'
import Tyre from '../../assets/tyre.png'
import Image from 'next/image'
import Button from '../Usable/Button'
import BG_Wheel from '../../assets/wheels.png'

function LandingSection03() {
    return (
        <section className="relative w-full bg-white">
            {/* Background Image */}
            <div 
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: `url(${BG_Wheel.src})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '400px',
                }}
            />

            <div className='relative max-w-7xl lg:gap-12 lg:grid grid-flow-row grid-cols-2 mx-auto px-4 lg:px-0 py-16'>
                {/* Left Column - Image */}
                <div>
                    <Image 
                        src={Tyre} 
                        alt="Tyre with MagicSeal protection" 
                        width={200} 
                        height={500} 
                        className='w-full h-[300px] lg:h-[600px] hidden lg:block object-cover mt-4 rounded-lg' 
                    />
                </div>

                {/* Right Column - Content */}
                <div className='w-full'>
                    <div className='flex'>
                        <div className='w-2 h-22 bg-[#FFD101]' />
                        <div className='font-andreas font-bold text-2xl lg:text-5xl lg:space-y-1'>
                            <h2 className='px-2'>HOW DOES IT</h2>
                            <div className='bg-[#161616] py-1 items-center w-full flex'>
                                <p className='px-2 flex items-center text-[#FFD101]'>WORK?</p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Image */}
                    <div>
                        <Image 
                            src={Tyre} 
                            alt="Tyre with MagicSeal protection" 
                            width={200} 
                            height={500} 
                            className='w-full h-[300px] lg:hidden object-cover mt-4 rounded-lg' 
                        />
                    </div>

                    {/* Content */}
                    <div className='lg:w-full py-12 space-y-8 text-justify font-oswald text-lg lg:text-2xl'>
                        <p>
                            Our tyre sealants are a proprietary of blends of coolants, actual rubber, minerals, binders, clays, and aramid fibre - the stuff used in bullet proof jackets. The mixture sits inside the tyre harmlessly for up to 20 years and will instantly respond to and heal any puncture up to 16mm
                        </p>
                        <p>
                            No stopping to change tyres at the side of the road! In most instances the driver is blissfully unaware that they had a puncture. The resulting repair is made permanent by driving a few minutes. Any uncured repair will hold for up to a month without the need for driving.
                        </p>
                    </div>
                    <Button variant='primary'>
                        Read More
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default LandingSection03