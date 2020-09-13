import styled from 'styled-components'

export const ProfilePicture = styled.img`
width: 20vh;
border-radius: 50%;
margin: 0px;
`
export const Title = styled.h2`
text-align: center;
font-size: 3em;
font-weight: 200;
margin: 0.5em;
`
export const Paragraph = styled.p`
text-align: center;
font-size: 1.5em;
font-weight: 400;
margin: 0.2em;
`
export const EmphasisParagraph = styled(Paragraph)`
border: solid 1px #ff6b6b;
color: #ff6b6b;
font-size: 2em;
padding: 0.5em;
margin: 1.5em;
`

export const Icons = styled.div`
text-align: center;
margin: 0.5em;
font-size: 3em;
color: grey;
i {
  margin: 0.2em 0.5em;
}
`