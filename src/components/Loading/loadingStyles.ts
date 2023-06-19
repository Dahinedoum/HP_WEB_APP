import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
  gap: 12px;
`

export const Gif = styled.div`
  background-image: url('/Gify.gif');
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto;
  height: 700px;
  width: 700px;

  @media screen and (max-width: 768px) {
    height: 200px;
    width: 200px;
  }
`
