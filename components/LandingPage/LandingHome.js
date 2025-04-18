import React from 'react'
import LandingSection01 from './LandingSection01'
import LandingSection02 from './LandingSection02'
import Advert from '../Usable/Advert'
import LandingSection03 from './LandingSection03'
import Advert2 from '../Usable/Advert2'
import Advert3 from '../Usable/Advert3'
import Industries from '../Usable/Industries'

function LandingHome() {
  return (
    <div>
        <LandingSection01 />
        <LandingSection02 />
        <Advert />
        <LandingSection03 />
        <Advert3 />
        <Industries />
        <Advert2 />

    </div>
  )
}

export default LandingHome