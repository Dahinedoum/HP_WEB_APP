import styled from 'styled-components'

export const Container = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
`

export const Form = styled.form`
  height: 500px;
  width: 340px;
  background-color: rgba(160, 144, 152, 0.5);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 50px;
  border: 2px solid rgba(208, 184, 184, 0.1);
  padding: 30px;
  color: #ffffff;

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
  color: #ffffff;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 5px;
  }
`

export const Input = styled.input`
  height: 35px;
  background-color: rgba(255, 254, 244, 0.8);
  padding: 0 10px;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 300;
  color: #000000;
  border-radius: 12px;
  border: none;

  &:focus {
    background-color: rgba(255, 254, 244, 0.9);
  }

  @media screen and (max-width: 768px) {
    height: 30px;
  }
`

export const Button = styled.button`
  margin-top: 50px;
  width: 100%;
  background-color: rgba(252, 218, 139, 0.5);
  color: #ffffff;
  padding: 15px 0;
  font-size: 17px;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(252, 218, 139, 0.7);
    transition: 300ms ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-top: 5px;
  }
`
export const InputError = styled.span`
  color: red;
  font-size: 11px;
  line-height: 0.9;
  margin-top: 8px;
`

export const Info = styled.p`
  color: #dff9ff;
  display: block;
  font-size: 14px;
  margin-top: 30px;
  text-align: center;
`
