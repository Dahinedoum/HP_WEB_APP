import styled from 'styled-components'

export const LandingContainer = styled.div`
  background: url('/anden.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`

export const LandingContent = styled.div`
  width: 80%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`

export const LandingCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const Button = styled.button`
  top: 110px;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid white;
  font-size: 16px;
  min-width: 15px;
  width: 100%;
  background-color: rgba(204, 86, 86, 0.5);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(204, 86, 86, 0.8);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #3f51b5;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 0 10px;
    margin-right: 0;
    min-width: 70px;
    padding: 8px 16px;
    font-size: 8px;
    left: 6px;
    top: 95px;
  }
`

export const CategoryContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
  margin-top: 100px;
  justify-content: space-evenly;
`

export const CategoryContent = styled.div``
export const CategoryHeaderContainer = styled.div``

export const ImageBackground = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
`
