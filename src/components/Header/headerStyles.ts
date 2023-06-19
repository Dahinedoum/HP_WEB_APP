import styled from 'styled-components'

export const Container = styled.header`
  background-image: linear-gradient(to bottom, #694639, #4f2f41);
  height: 90px;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 4px ${({ theme }) => theme.colors.transparent};
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
  background-image: url('/ButtonBackground.jpg');
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.black};
  padding: 10px 20px;
  border: none;
  margin-right: 10px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 15px;
  transition: all 0.1s ease-in-out;
  min-width: 115px;
  font-family: 'Times New Roman', serif;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.transparentBlack2};

  &:hover {
    background-color: ${({ theme }) => theme.colors.brown};
    text-shadow: 0px 0px 10px ${({ theme }) => theme.colors.black};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.blue};
  }

  @media screen and (max-width: 768px) {
    min-width: auto;
    padding: 8px 16px;
    font-size: 14px;
  }
`
export const Image = styled.img`
  height: 75px;
  width: 75px;
  margin-left: 40px;
`
