import styled from 'styled-components'

export const LandingContainer = styled.div`
  background: url('/diningRoom.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    height: auto;
    margin-bottom: 3rem;
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
  border-radius: 20px;
  cursor: pointer;
  border: 3px solid black;
  font-size: 23px;
  min-width: 15px;
  width: 100%;
  background-color: goldenrod;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(204, 86, 86, 0.8);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #3f51b5;
  }

  @media screen and (max-width: 768px) {
    padding: 0 10px;
    margin-left: 50px;
    width: 150px;
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
  margin-top: 300px;
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
