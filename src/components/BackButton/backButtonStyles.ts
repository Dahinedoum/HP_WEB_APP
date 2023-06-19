import styled from 'styled-components'

export const Button = styled.button`
  margin-left: 30px;
  margin-top: 50px;
  margin-bottom: 10px;
  border-radius: 50%;
  border: none;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.transparentBlack};
  transition: transform 300ms;
  cursor: pointer;
  position: sticky;
  top: 100px;
  z-index: 2;

  &:hover {
    transform: rotate(360deg);
    background-color: ${({ theme }) => theme.colors.black};
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`
