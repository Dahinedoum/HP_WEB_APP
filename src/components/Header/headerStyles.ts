import styled from 'styled-components'

export const Container = styled.header`
  background-color: black;
  height: 90px;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 3;

  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 0 10px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  margin-right: 40px;

  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`

export const Button = styled.button`
  background-color: #d2b178;
  color: black;
  padding: 10px 20px;
  border: none;
  margin-right: 10px;
  cursor: pointer;
  font-size: 15px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  min-width: 115px;

  &:hover {
    background-color: #965e25;
    text-shadow: 0px 0px 10px #ffffff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #3f51b5;
  }

  @media screen and (max-width: 768px) {
    min-width: auto;
    padding: 8px 16px;
    font-size: 14px;
  }
`
export const Image = styled.img`
height:75px;
width: 75px;
margin-left: 40px ;
`