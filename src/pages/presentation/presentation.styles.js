import styled from 'styled-components'

export const ParentContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

export const PresentationTitle = styled.h1`
  font-size: 13vw;
  position: absolute;
  margin-top: 0px;
  top: 30vh;
  left: 10vw;
  font-family: 'Cormorant Garamond', sans-serif;
  font-weight: 200;
  color: white;
`;
export const Emphasis = styled.div`
  font-family: 'Rock Salt', sans-serif;
  position: absolute;
  transform: rotate(-10deg);
  top: 50vh;
  left: 30vw;
  font-size: 3vw;
  color: red;
`

export const CoverImage = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(https://sendeyo.com/up/d/6796660b27);
  background-size: cover;
  background-position: center;
`;

export const Title1 = styled.h2`
  margin: 400px 0px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 80px;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
`