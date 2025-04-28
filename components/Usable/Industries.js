'use client'
import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Dirt from '../../assets/dirt.png'
import fleet from '../../assets/fleet.png'
import security from '../../assets/security.png'
import domestic from '../../assets/domestic.png'
import mining from '../../assets/mining.png'
import agri from '../../assets/agri.png'
import corporate from '../../assets/corporate.png'
import transport from '../../assets/Transport.png'

const Carousel = dynamic(() => import('react-multi-carousel'), {
  ssr: false,
})
import 'react-multi-carousel/lib/styles.css'

function Industries() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  const CustomArrow = ({ onClick, direction }) => (
    <button
      onClick={onClick}
      className={`
        absolute ${direction === 'left' ? 'left-6' : 'right-6'} top-1/2 -translate-y-1/2
        w-12 h-12 rounded-full border border-white/50
        flex items-center justify-center bg-transparent
        transition-all duration-300
        hover:border-[#FFD101] hover:scale-110
        z-20 hidden lg:flex
      `}
      aria-label={`${direction} slide`}
    >
      {direction === 'left' ? (
        <IoIosArrowBack className="text-white text-2xl" />
      ) : (
        <IoIosArrowForward className="text-white text-2xl" />
      )}
    </button>
  )

  const industries = [
    { image: fleet, title: 'Fleet Management' },
    { image: security, title: 'Security Services' },
    { image: domestic, title: 'Domestic Use' },
    { image: corporate, title: 'Corporate Solutions' },
    { image: mining, title: 'Mining Operations' },
    { image: agri, title: 'Agriculture' },
    { image: transport, title: 'Transport & Logistics' },
  ]

  return (
    <section className="relative my-6 flex flex-col items-center justify-center">
      {/* Background Image */}
      <Image
        src={Dirt}
        alt="Industrial background"
        width={1920}
        height={400}
        className="object-cover w-full lg:h-[700px] h-[600px] opacity-60"
        priority
      />

      <div className="absolute top-[15%] left-0 w-full h-full z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-0">
          {/* Title Section */}
          <div className="space-y-6 mb-12">
            <div className='flex'>
              <div className='w-2 h-22 bg-[#FFD101]' />
              <div className='font-andreas font-bold text-2xl lg:text-5xl lg:space-y-1'>
                <p className='px-2 bg-white py-1'>MagicSeal is engineered</p>
                <div className='bg-[#161616] py-1 items-center w-full flex'>
                  <p className='px-2 flex items-center text-[#FFD101]'>for all industries</p>
                </div>
              </div>
            </div>
            <p className="lg:text-lg text-white max-w-2xl">
              Engineered for superior performance, our tyre sealant adapts to
              various road conditions, offering unparalleled reliability.
            </p>
          </div>

          {/* Carousel Section */}
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            showDots={false}
            removeArrowOnDeviceType={["mobile"]}
            dotListClass="custom-dot-list-style"
            customLeftArrow={<CustomArrow direction="left" />}
            customRightArrow={<CustomArrow direction="right" />}
            itemClass="px-4"
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow-lg group relative"
              >
                <Image
                  src={industry.image}
                  alt={industry.title}
                  width={800}
                  height={500}
                  className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl font-bold font-poppins">
                      {industry.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Industries