import React from 'react'

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

import styled from 'styled-components'

import {Section} from '../global.styles'
import {Title1} from './section1.styles'

const Section1Wrapper = styled(Section)`
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProjectsPics = styled(AwesomeSlider)`
  height: 50vh;
  width: 65vh;
  box-shadow: 0px 10px 30px 5px grey;
  margin: 30px;
`

export default function Section1() {
  return (
    <Section1Wrapper>
      <Title1 data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="500">You only have one website.</Title1>
      <ProjectsPics cssModule={AwesomeSliderStyles}>
        <div data-src="https://i.imgur.com/WZRqOia.jpg" />
        <div data-src="https://i.imgur.com/uZ8aLel.jpg" />
        <div data-src="https://i.imgur.com/meVeZE3.jpg" />
        <div data-src="https://i.imgur.com/umcQtBv.jpg" />
        <div data-src="https://i.imgur.com/J49ZsKD.jpg" />
      </ProjectsPics>
      <Title1 data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="200">Make it great.</Title1>
    </Section1Wrapper>
  )
}
