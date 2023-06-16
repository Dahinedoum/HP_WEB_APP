import styled from 'styled-components'

export const Container = styled.div``

export const Title = styled.h3`
  font-size: 24px;
  line-height: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Input = styled.input`
  padding: 8px;
  border-radius: 16px; /* Cambia el valor del border-radius para hacerlo más redondeado */
  border: 2px solid #8c7d6b;
  margin-bottom: 16px;
  display: block;
  margin: 0 auto;
  max-width: 300px;
  background-color: #8c7d6b;
  color: #fff;
  font-weight: bold;
  font-family: 'Press Start 2P', cursive;
  outline: none;

  &:focus {
    border-color: #ffc600;
    box-shadow: 0 0 5px 2px #ffc600;
  }
`

export const Button = styled.button`
  background-color: #8c7d6b;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-top: 16px;

  &:hover {
    background-color: #5d503f;
  }
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
