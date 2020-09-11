import React from 'react'
import {PresentationTitle, CoverImage, Emphasis} from './presentation.styles'

export default function Main() {
  return (
    <div>
      <PresentationTitle>Boring?</PresentationTitle>
      <Emphasis>Never Again!</Emphasis>
      <CoverImage src={require('../../assets/IMG_1008 còpia.JPG')} />
    </div>
  )
}
