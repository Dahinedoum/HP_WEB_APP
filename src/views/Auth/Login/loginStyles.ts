import styled from 'styled-components'
import { Link as DefaultLink } from 'react-router-dom'

export const Container = styled.div`
  background-image: url('/Background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const FormContent = styled.div``

export const Title = styled.h3`
  font-size: 24px;
  line-height: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const InputController = styled.div`
  display: flex;
  flex-flow: column;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

export const Label = styled.label`
  margin-top: 30px;
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
  padding: 15px 0;
  font-size: 17px;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.transparentYellow2};
    transition: 300ms ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-top: 5px;
  }
`
export const InputError = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 11px;
  line-height: 0.9;
  margin-top: 8px;
`

export const Info = styled.p`
  color: ${({ theme }) => theme.colors.lightBlue};
  display: block;
  font-size: 14px;
  margin-top: 30px;
  text-align: center;
`

export const Link = styled(DefaultLink)`
  color: ${({ theme }) => theme.colors.oldYellow};
  font-size: 14px;
  margin-top: 16px;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.oldYellow};
    text-shadow: 0px 0px 10px ${({ theme }) => theme.colors.yellow};
    transition: 200ms ease-in-out;
  }
`
