import React from 'react'

import styled from 'styled-components'


import {Section} from '../global.styles'
import {ProfilePicture, Title, Paragraph, EmphasisParagraph, Icons} from './section2.styles'

const Section2Wrapper = styled(Section)`
  padding-top: 20vh;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default function Section2() {
  return (
    <Section2Wrapper >
      <ProfilePicture src={require("./Webp.net-resizeimage (8).jpg")} data-aos="zoom-in-up"/>
      <Title>Hi, I'm Arnau Gómez</Title>
      <Paragraph>A Web Developer with awesome Design skills.</Paragraph>
      <Paragraph>I specialize in interactive web apps within the React and MERN ecosystem.</Paragraph>
      <EmphasisParagraph data-aos="zoom-in-up">Currently looking for the next "wow" project to collaborate with "wow" people.</EmphasisParagraph>
      <Paragraph>I speak</Paragraph>
      <Icons> <i data-aos="zoom-in-up" class="fab fa-html5"></i>
        <i data-aos="zoom-in-up" data-aos-delay="100" class="fab fa-css3-alt"></i>
        <i data-aos="zoom-in-up" data-aos-delay="200" class="fab fa-js    "></i>
        <i data-aos="zoom-in-up" data-aos-delay="300" class="fab fa-python    "></i>
        <i data-aos="zoom-in-up" data-aos-delay="400" class="fab fa-php"></i>
        <div data-aos="zoom-in-up" data-aos-delay="500">C++</div>
      </Icons>
      <Paragraph>And I love working with</Paragraph>
      <Icons>
        <i data-aos="zoom-in-up" class="fab fa-react"></i>
        <img data-aos="zoom-in-up" data-aos-delay="100" style={{height: "0.8em", width: "auto"}} src={require('./redux-logo.png')} alt="redux logo"/>
        <i class="fab fa-bootstrap" data-aos="zoom-in-up" data-aos-delay="200" ></i>
        <i class="fab fa-sass" data-aos="zoom-in-up" data-aos-delay="300"></i>
        <i class="fab fa-node-js" data-aos="zoom-in-up" data-aos-delay="400"></i>
        <i class="fab fa-git" data-aos="zoom-in-up" data-aos-delay="500"></i>
        <i class="fab fa-figma" data-aos="zoom-in-up" data-aos-delay="600"></i>
        <i class="fab fa-wordpress" data-aos="zoom-in-up" data-aos-delay="700"></i>
      </Icons>
    </Section2Wrapper>
  )
}
