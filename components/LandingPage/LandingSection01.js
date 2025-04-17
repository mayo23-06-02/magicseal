import React from 'react'
import DumpTruck from '../../assets/dumptruck.jpg'
import Image from 'next/image'

function LandingSection01() {
  return (
    <div>
        <Image src={DumpTruck} alt="Dump Truck" width={1920} height={1000} />
        
    </div>
  )
}

export default LandingSection01