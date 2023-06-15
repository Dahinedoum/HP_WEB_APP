import styled from 'styled-components';

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

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
`;



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
`;

export const InputController = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: auto;
  background-color: transparent;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  backdrop-filter: saturate(180%);
  transform: scale(0.95);
  margin-top: 50px ;

  &:hover {
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
  }
`;


