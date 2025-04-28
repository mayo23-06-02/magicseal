'use client'; // Ensure client-side rendering for carousel

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Dirt from '../../assets/dirt.png';
import fleet from '../../assets/fleet.png';
import security from '../../assets/security.png'; // Fixed typo
import domestic from '../../assets/domestic.png';
import mining from '../../assets/mining.png';
import agri from '../../assets/agri.png';
import corporate from '../../assets/corporate.png';
import transport from '../../assets/Transport.png';

// Dynamically import carousel to avoid SSR issues
const Carousel = dynamic(() => import('react-multi-carousel'), {
  ssr: false,
});
import 'react-multi-carousel/lib/styles.css';

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
  };

  const industries = [
    { image: fleet, title: 'Fleet Management' },
    { image: security, title: 'Security ' },
    { image: domestic, title: 'Domestic ' },
    { image: corporate, title: 'Corporate' },
    { image: mining, title: 'Mining' },
    { image: agri, title: 'Agriculture' },
    { image: transport, title: 'Transport' },
  ];

  return (
    <section className=" relative my-6 flex flex-col items-center justify-center ">
      {/* Background Image */}
      <Image
        src={Dirt}
        alt="Industrial background"
        width={1920}
        height={400}
        className="object-cover w-full lg:h-[700px] h-[600px]  opacity-60"
        priority
      />

      <div className="absolute top-[15%] left-0 w-full h-full z-10 ">
        <div className="max-w-7xl mx-auto  px-6 lg:px-0">
          {/* Title Section */}
          <div className="space-y-6 mb-12">
            <div className='flex'>
              <div className='w-2 h-22 bg-[#FFD101] ' />
              <div className='font-andreas font-bold text-2xl lg:text-5xl lg:space-y-1'>
                <p className='px-2 bg-white py-1'>MagicSeal is engineered</p>
                <div className='bg-[#161616] py-1 items-center w-full flex'>
                  <p className=' px-2 `flex items-center text-[#FFD101]'>for all industries</p>
                </div>
              </div>
            </div>
            <p className=" lg:text-lg text-white max-w-2xl">
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
            removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
            itemClass="px-4"
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white  overflow-hidden shadow-lg"
              >
                <Image
                  src={industry.image}
                  alt={industry.title}
                  width={800}
                  height={500}
                  className="w-full h-[250px] object-cover"
                />

              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Industries;