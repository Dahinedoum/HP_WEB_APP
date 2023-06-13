import styled from 'styled-components'

export const Button = styled.button`
  margin-left: 30px;
  margin-top: 50px;
  border-radius: 50%;
  font-size: 30px;
  color: white;
  border: white;
  background-color: black;
  transition: transform 300ms;
  cursor: pointer;

  &:hover {
    transform: rotate(360deg);
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`
