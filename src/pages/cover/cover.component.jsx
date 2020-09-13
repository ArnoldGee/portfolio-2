import React from 'react'

import {ParentContainer, PresentationBeforeTitle, PresentationTitle, CoverImage, Emphasis} from './cover.styles'

export default function Cover() {
  return (
    <CoverImage>
      <ParentContainer>
        <div>
          <PresentationBeforeTitle data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">Is your website</PresentationBeforeTitle>
          <PresentationTitle data-aos="fade-up" data-aos-delay="1400"  data-aos-duration="1000">Boring?</PresentationTitle>
        </div>
        <Emphasis >Never Again!</Emphasis>
      </ParentContainer>
    </CoverImage>
  )
}
