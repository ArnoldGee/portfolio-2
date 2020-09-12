import React from 'react'
import {ParentContainer, PresentationTitle, CoverImage, Emphasis, Title1} from './presentation.styles'

export default function Main() {
  return (
    <div>
      <ParentContainer>
        <PresentationTitle data-aos="fade-up" data-aos-duration="1000">Boring?</PresentationTitle>
        <Emphasis >Never Again!</Emphasis>
      </ParentContainer>
      <CoverImage />
      <Title1 data-aos="zoom-in-up" data-aos-duration="1000">You only have one website.</Title1>
      <Title1 data-aos="zoom-in-up" data-aos-duration="1000">Make it great</Title1>
    </div>
  )
}
