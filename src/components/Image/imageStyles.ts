import { styled } from 'styled-components'

export const Img = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 100px;
  border: 2px solid black;

  @media screen and (max-width: 768px) {
    width: 250px;
  }
`
