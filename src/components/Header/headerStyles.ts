import styled from 'styled-components'

export const Container = styled.header`
  background-color: white;
  color: #fff;
  height: 90px;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
  background-color: transparent;
  color: black;
  padding: 10px 20px;
  border: none;
  margin-right: 10px;

  cursor: pointer;
  border: 2px solid white;
  font-size: 15px;
  transition: all 0.3s ease-in-out;
  min-width: 115px;

  &:hover {
    background-color: goldenrod;
    border-color: gold;
    text-decoration: underline;
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
