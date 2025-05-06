'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-multi-carousel'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import 'react-multi-carousel/lib/styles.css'
import FleetGuard from '../../assets/FleetGuard.jpg'
import FleetGuardSM from '../../assets/FleetGuardSM.jpg'
import FleetGuardLogo from '../../assets/FG.svg'
import XtremeYellow from '../../assets/dumptruck.jpg'
import XtremeYellowSM from '../../assets/dumptruck_sm.jpg'
import XtremeYellowLogo from '../../assets/XY.svg'
import AgriGuard from '../../assets/AgriGuard.jpg'
import AgriGuardSM from '../../assets/AgriGuardSM.jpg'
import AgriGuardLogo from '../../assets/AG.svg'
import RaceX from '../../assets/RaceX.jpg'
import RaceXSM from '../../assets/RaceXSM.jpg'
import RaceXLogo from '../../assets/RX.svg'
import PromotionalSection from './PromotionalSection'
import MagicSeal from '../../assets/sedan.jpg'
import MagicSealSM from '../../assets/sedanSM.jpg'
import MagicSealLogo from '../../assets/Logo.svg'
import Button from '../Usable/Button'

function LandingSection01() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
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
      desktop: MagicSeal,
      mobile: MagicSealSM,
      productLogo: MagicSealLogo,
      alt: "Magic Seal",
      title: "MagicSeal Protection",
      description: "MagicSeal is a revolutionary tyre sealant and life extender specifically designed and re-engineered from the ground up for extra heavy vehicles operating in African Conditions.",
      link: "/products/magicseal"
    },
    {
      desktop: FleetGuard,
      mobile: FleetGuardSM,
      productLogo: FleetGuardLogo,
      alt: "FleetXGuard",
      title: "FleetXGuard Protection",
      description: "FleetXGuard is a revolutionary tyre sealant and life extender specifically designed and re-engineered from the ground up for extra heavy vehicles operating in African Conditions.",
      link: "/products/fleetxguard"
    },
    {
      desktop: XtremeYellow,
      mobile: XtremeYellowSM,
      productLogo: XtremeYellowLogo,
      alt: "XtremeYellow",
      title: "XtremeYellow Protection",
      description: "XtremeYellow is a revolutionary tyre sealant and life extender specifically designed and re-engineered from the ground up for extra heavy vehicles operating in African Conditions.",
      link: "/products/xtreme-yellow"
    },
    {
      desktop: AgriGuard,
      mobile: AgriGuardSM,
      productLogo: AgriGuardLogo,
      alt: "AgriGuard",
      title: "AgriGuard Protection",
      description: "AgriGuard is a revolutionary tyre sealant and life extender specifically designed and re-engineered from the ground up for extra heavy vehicles operating in African Conditions.",
      link: "/products/agriguard"
    },
    {
      desktop: RaceX,
      mobile: RaceXSM,  
      productLogo: RaceXLogo,
      alt: "RaceX",
      title: "RaceX Protection",
      description: "RaceX is a revolutionary tyre sealant and life extender specifically designed and re-engineered from the ground up for extra heavy vehicles operating in African Conditions.",
      link: "/products/race-x"
    }
  ]

  return (
    <section className="relative w-full">
      <div className="relative z-0">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          showDots={true}
          removeArrowOnDeviceType={["mobile"]}
          dotListClass="custom-dot-list-style"
          customLeftArrow={<CustomArrow direction="left" />}
          customRightArrow={<CustomArrow direction="right" />}
          ssr={true}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative h-[600px] lg:h-[800px]">
              <Image
                src={slide.desktop}
                alt={slide.alt}
                fill
                className="hidden lg:block object-cover"
                priority={index === 0}
                sizes="100vw"
                quality={90}
              />
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
                <div className="container mx-auto px-4 lg:px-8 h-full flex items-center justify-center">
                  <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-white">
                    {slide.productLogo && (
                      <Image
                        src={slide.productLogo}
                        alt={`${slide.alt} Logo`}
                        width={500}
                        height={150}
                        className="mb-8 lg:mt-24 px-6 lg:px-0"
                      />
                    )}
                    <p className="text-xs lg:text-base px-6 lg:px-0 text-gray-400 font-oswald text-center font-light max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                    <div className="flex justify-center mt-8">
                      <Link href={slide.link}>
                        <Button 
                          variant="primary" 
                          className="px-6 py-2 text-sm lg:text-lg hover:scale-105 transition-transform"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="relative z-10 -mt-24 w-full mx-auto">
        <PromotionalSection />
      </div>
    </section>
  )
}

export default LandingSection01