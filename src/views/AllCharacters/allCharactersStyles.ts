import styled from 'styled-components'

export const Container = styled.div`
  background: url('/carta.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`
export const StyledTitle = styled.h1`
  font-size: 50px;
  color: blanchedalmond;
  text-align: center;
  margin: 20px;
  font-family: "Old English Text MT", cursive;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  margin-top: 100px;
  margin-left: 20px;
  margin-right: 10px;
`

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  position: sticky;
  top: 100px;
  z-index: 2;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

export const Button = styled.button`
  margin-right: 30px;
  margin-top: 50px;
  margin-bottom: 10px;
  border-radius: 50px;
  font-size: 20px;
  color: white;
  border: white;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: sticky;
  top: 100px;
  z-index: 2;

  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`
