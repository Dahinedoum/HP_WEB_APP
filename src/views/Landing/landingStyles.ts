import styled from 'styled-components'

export const LandingContainer = styled.div`
  background: url('/map.jpg');
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
  border: 3px solid #bfa38e;
  background-color: #e8d9b9;
  font-size: 30px;
  min-width: 15px;
  width: 100%;
  color: #5e4934;
  transition: all 0.3s ease-in-out;
  font-family: "Old English Text MT", serif;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #d9c9a9;
    color: #422e1e;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #bfa38e;
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
  margin-top: 100px;
  justify-content: space-evenly;
`

export const CategoryContent = styled.div`
  background-color: rgba(232, 217, 185, 0.7);  padding: 16px;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d6c3a2;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }

  &:before {
    content: '';
    position: absolute;
    top: -16px;
    left: 0;
    right: 0;
    margin: auto;
    width: 20px;
    height: 20px;
    border: 2px solid #d6c3a2;
    border-radius: 50%;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 0;
    right: 0;
    margin: auto;
    width: 20px;
    height: 20px;
    border: 2px solid #d6c3a2;
    border-radius: 50%;
  }`
export const CategoryHeaderContainer = styled.div``

export const ImageBackground = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
`
