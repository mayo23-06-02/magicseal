import React from 'react'
import Tractor from '../../assets/tractor.png'
import Image from 'next/image'
import Button from '../Usable/Button'

function LandingSection02() {
    return (
        <div>
            <div className='max-w-7xl lg:grid grid-flow-row grid-cols-2 mx-auto px-4 lg:px-0 py-16 '>

                <div className='w-full'>
                    <div className='flex'>
                        <div className='w-2 h-22 bg-[#FFD101] ' />
                        <div className='font-andreas font-bold text-2xl lg:text-5xl lg:space-y-1'>
                            <p className='px-2 bg-white py-1'>WHAT IS MAGICSEAL</p>
                            <div className='bg-[#161616] py-1 items-center w-full flex'>
                                <p className=' px-2 `flex items-center text-[#FFD101]'>TYRE SEALANT?</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src={Tractor} alt="tractor" width={200} height={500} className='w-full h-[300px] lg:hidden lg:h-[800px] object-cover mt-4' />
                    </div>
                    <div className='lg:w-10/12 text-white py-12 space-y-8 text-justify font-andreas text-lg lg:text-2xl'>
                        <p>
                            Our range of products are non toxic and environmentally friendly tyre sealants that are introduced into the tyre via the valve. MagicSeal sits harmlessly inside the tyre for the tyres natural lifetime as an active and permanent puncture preventative.
                        </p>
                        <p> Unlike other products on the market, MagicSeal Tyre Sealant will cause no damage to the tyre whatsoever... it actually nourishes the rubber compound by replenishing the elastomers lost due to heat and friction, thereby keeping your tyre pliable and supple. A soft and supple tyre is far less likely to suffer catastrophic destruction whe striking a pothole or other object on the road. </p>
                    </div>
                    <Button variant='primary' >
                        Read More
                    </Button>
                </div>
                <div>
                    <Image src={Tractor} alt="tractor" width={200} height={500} className='w-full h-[300px] lg:h-[800px] hidden lg:block object-cover mt-4' />
                </div>
            </div>
        </div>
    )
}

export default LandingSection02