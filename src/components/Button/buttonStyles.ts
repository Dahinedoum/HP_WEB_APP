import styled from 'styled-components'

export const CustomButton = styled.button`
  display: inline-block;
  margin: 2px;
  margin-bottom: 7px;
  background-image: url('/ButtonBackground.jpg');
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: 5px;
  height: 30px;
  width: auto;
  font-size: 2.5vh;
  cursor: pointer;
  box-shadow: 0px 4px 8px ${({ theme }) => theme.colors.transparentBlack2};

  &:hover {
    box-shadow: 0px 6px 12px ${({ theme }) => theme.colors.transparentBlack3};
  }

  &:active {
    transform: scale(0.8);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 4px 8px ${({ theme }) => theme.colors.transparentBlack};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`
