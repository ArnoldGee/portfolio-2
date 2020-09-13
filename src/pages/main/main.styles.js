import styled, {keyframes} from 'styled-components'

const normalSlide = keyframes`
from {
  transform: translateX(50px)
}
to {
  transform: translateX(-50px)
}
`
const reverseSlide = keyframes`
from {
  transform: translateX(-50px) rotate(180deg)
}
to {
  transform: translateX(50px) rotate(180deg)
}
`

const fadeOut = keyframes`
from {
  opacity: 1
}
to {
  opacity: 0
}
`

export const LoadingScreen = styled.div`
  background-color: black;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeOut}  0.5s 1.5s ease-out forwards;
  div {
    color: white;
    text-transform: uppercase;
    font-size: 40px;
    margin-top: 0px;
  }
  .normal{
    animation: ${normalSlide} 2s ease-out forwards;
  }
  .reverse{
    animation: ${reverseSlide} 2s ease-out forwards;
    
  }
`
