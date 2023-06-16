import styled from 'styled-components'

export const Button = styled.button`
  margin-left: 30px;
  margin-top: 50px;
  margin-bottom: 10px;
  border-radius: 50%;
  font-size: 30px;
  color: white;
  border: white;
  background-color: rgba(0, 0, 0, 0.5);
  transition: transform 300ms;
  cursor: pointer;
  position: sticky;
  top: 100px;
  z-index: 2;

  &:hover {
    transform: rotate(360deg);
    background-color: rgba(0, 0, 0, 1);
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`
