import Image from 'next/image'
import React from 'react'
import LogoImage from '../../assets/Logo2.svg'

function Logo2({width, height}) {
  return (
    <div>
        <Image src={LogoImage} alt="Logo" width={width} height={height} />
    </div>
  )
}

export default Logo2