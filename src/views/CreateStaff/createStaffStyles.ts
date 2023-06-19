import styled from 'styled-components'

export const Container = styled.div`
  background-image: url('/Background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  height: 100vh;
`

export const ButtonContainer = styled.div`
  margin-left: 0;
`

export const Title = styled.h3`
  font-size: 24px;
  line-height: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const Label = styled.label`
  margin-top: 10px;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 5px;
  }
`
export const Input = styled.input`
  height: 35px;
  background-color: ${({ theme }) => theme.colors.transparentOldWhite};
  padding: 0 10px;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 12px;
  border: none;

  &:focus {
    background-color: ${({ theme }) => theme.colors.transparentOldWhite2};
  }

  @media screen and (max-width: 768px) {
    height: 30px;
  }
`

export const Button = styled.button`
  margin-top: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.transparentYellow};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 16px;
  font-size: 17px;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.transparentYellow2};
    transition: 300ms ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-top: 5px;
  }
`
export const Form = styled.form`
  height: 500px;
  width: 340px;
  background-color: ${({ theme }) => theme.colors.transparentGrey};
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.transparentPaleRed};
  padding: 30px;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 768px) {
    width: auto;
    height: auto;
  }
`
export const FormContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`

export const InputController = styled.div`
  text-align: center;
  display: flex;
  flex-flow: column;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`
