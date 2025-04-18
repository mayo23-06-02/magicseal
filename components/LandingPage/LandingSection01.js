'use client'
import React from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import 'react-multi-carousel/lib/styles.css'
import DumpTruck from '../../assets/dumptruck.jpg'
import DumpTruckSM from '../../assets/dumptruck_sm.jpg'
import PromotionalSection from './PromotionalSection'

function LandingSection01() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
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

  const slides = [
    {
      desktop: DumpTruck,
      mobile: DumpTruckSM,
      alt: "Dump Truck",
      title: "The Ultimate Tyre Protection Solution",
      description: "Engineered for superior performance, our tyre sealant adapts to various road conditions, offering unparalleled reliability."
    }
    // Add more slides here with the same structure
  ]

  return (
    <section className="relative w-full">
      <div className="relative z-0">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          showDots={false}
          
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          customLeftArrow={<CustomArrow direction="left" />}
          customRightArrow={<CustomArrow direction="right" />}
          ssr={true}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative h-[600px] lg:h-[800px]">
              {/* Desktop Image */}
              <Image
                src={slide.desktop}
                alt={slide.alt}
                fill
                className="hidden lg:block object-cover"
                priority={index === 0}
                sizes="100vw"
                quality={90}
              />
              {/* Mobile Image */}
              <Image
                src={slide.mobile}
                alt={slide.alt}
                fill
                className="block lg:hidden object-cover"
                priority={index === 0}
                sizes="100vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30">
                <div className="absolute bottom-1/4 left-0 top-[40%] right-0 text-white px-4 lg:px-20 max-w-7xl mx-auto">
                  <div className="max-w-7xl  text-white">
                    <h1 className="text-3xl text-center lg:text-start lg:text-7xl font-bold mb-4 font-poppins max-w-[800px]">
                      {slide.title}
                    </h1>
                    <p className=" lg:text-2xl text-center lg:text-start font-light mb-8 max-w-[700px]">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="relative z-10 lg:-mt-24  w-full mx-auto">
        <PromotionalSection />
      </div>
    </section>
  )
}

export default LandingSection01