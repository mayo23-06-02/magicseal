'use client'
import React from 'react'
import Image from 'next/image'
import Button from '../Usable/Button'
import Truck from '../../assets/Truckextend.jpg'
import Tyre from '../../assets/instant.jpg'
import Demo from '../../assets/Demo.jpg'

function PromotionalSection() {
  const cards = [
    {
      image: Truck,
      title: ['Extends up to 30%', 'Tyre Lifespan'],
      description: 'Reduces wear and tear, saving you money on replacements.',
      buttonText: 'Learn more'
    },
    {
      image: Tyre,
      title: ['Instant Puncture', 'Protection'],
      description: 'Seals holes as they happen, preventing flat tyres.',
      buttonText: 'Learn more'
    },
    {
      image: Demo,
      title: ['Book Demo Today'],
      isForm: true,
      buttonText: 'Call Me Today'
    }
  ]

  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex flex-col lg:flex-row gap-1 pt-1 lg:gap-0'>
        {cards.map((card, index) => (
          <div key={index} className='relative max-w-[800px] w-full'>
            <Image 
              src={card.image} 
              alt={card.title[0]} 
              width={550} 
              height={200} 
              className="w-full h-[250px] object-cover"
            />
            <div className='absolute inset-0 bg-black bg-opacity-40'>
              <div className='p-6 h-full flex flex-col justify-between'>
                <div className='font-poppins text-white space-y-4'>
                  <div className='-space-y-1'>
                    {card.title.map((line, i) => (
                      <p key={i} className='text-2xl font-bold'>{line}</p>
                    ))}
                  </div>
                  {card.description && (
                    <p className='font-sans text-sm w-10/12 font-light'>
                      {card.description}
                    </p>
                  )}
                </div>

                {card.isForm ? (
                  <div className='space-y-4'>
                    <input 
                      type="text" 
                      placeholder="Location" 
                      className="w-full h-10 text-sm bg-transparent border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-[#FFD101]" 
                    />
                    <input 
                      type="text" 
                      placeholder="Mobile Number" 
                      className="w-full h-10 text-sm bg-transparent border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-[#FFD101]" 
                    />
                    <Button className="mt-4">{card.buttonText}</Button>
                  </div>
                ) : (
                  <Button>{card.buttonText}</Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PromotionalSection