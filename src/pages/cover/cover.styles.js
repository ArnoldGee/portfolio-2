import styled from 'styled-components'

export const ParentContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;

export const PresentationBeforeTitle = styled.div`
  font-size: 3vw;
  margin-bottom: -20px;
  color: white;
  margin-left: 10vw;
`

export const PresentationTitle = styled.h1`
  font-size: 13vw;

  margin-top: 0px;

  margin-left: 10vw;
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
  color: #ff6b6b;
`

export const CoverImage = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(https://i.imgur.com/25bbXhZ.jpg);
  background-size: cover;
  background-position: center;
`;