import Image from 'next/image'
import React from 'react'
import LogoImage from '../../assets/Logo.svg'

function Logo({width, height}) {
  return (
    <div>
        <Image src={LogoImage} alt="Logo" width={width} height={height} />
    </div>
  )
}

export default Logo