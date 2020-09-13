import React from 'react'

import Cover from '../cover/cover.component'
import Section1 from '../section1/section1.component'
import Section2 from '../section2/section2.component'
import Section3 from '../section3/section3.component'

import {LoadingScreen} from './main.styles'

export default function Main() {
  return (
    <div>
      <LoadingScreen>
        <div className="normal">Arnau Gómez</div>
        <div className="reverse">Arnau Gómez</div>
      </LoadingScreen>
      <Cover />
      <Section1 />
      <Section2 />
      <Section3 />
      
    </div>
  )
}
