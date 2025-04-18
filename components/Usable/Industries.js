'use client'; // Ensure client-side rendering for carousel

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Dirt from '../../assets/dirt.png';
import fleet from '../../assets/fleet.png';
import security from '../../assets/security.png'; // Fixed typo
import domestic from '../../assets/domestic.png';
import mining from '../../assets/mining.png';
import sport from '../../assets/sports.png';
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
    { image: security, title: 'Security Services' },
    { image: domestic, title: 'Domestic Use' },
    { image: mining, title: 'Mining Operations' },
    { image: sport, title: 'Sports & Recreation' },
    { image: transport, title: 'Transport & Logistics' },
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
            <h2 className="text-2xl lg:text-5xl font-bold  font-poppins">
              MagicSeal is engineered
              <br />
              for all industries
            </h2>
            <p className=" lg:text-lg  max-w-2xl">
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
                  width={400}
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