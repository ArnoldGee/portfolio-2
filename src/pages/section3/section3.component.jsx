import React from 'react'

import styled from 'styled-components'

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import {Section} from '../global.styles'

const Section3Wrapper = styled(Section)`
  margin-top: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h2`
text-align: center;
font-size: 3em;
font-weight: 200;
margin: 0.5em;
`

const ProjectsWrapper = styled(AwesomeSlider)`
  height: 100vh;
  width: 100vw;
  max-width: 2000px;
`

export default function Section3() {
  return (
    <Section3Wrapper>
      <Title>Work & Projects</Title>
      <ProjectsWrapper cssModule={AwesomeSliderStyles} animation="cubeAnimation">
        <div data-src="https://i.imgur.com/WZRqOia.jpg" />
        <div data-src="https://i.imgur.com/uZ8aLel.jpg" />
        <div data-src="https://i.imgur.com/meVeZE3.jpg" />
        <div data-src="https://i.imgur.com/umcQtBv.jpg" />
        <div data-src="https://i.imgur.com/J49ZsKD.jpg" />
      </ProjectsWrapper>
    </Section3Wrapper>
  )
}

