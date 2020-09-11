import React from 'react'
import {PresentationTitle, CoverImage, Emphasis} from './presentation.styles'

export default function Main() {
  return (
    <div>
      <PresentationTitle data-aos="fade-right" data-aos-duration="3000">Boring?</PresentationTitle>
      <Emphasis >Never Again!</Emphasis>
      <CoverImage src={require('../../assets/IMG_1008 còpia.JPG')} />
    </div>
  )
}
