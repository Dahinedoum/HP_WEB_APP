import styled from 'styled-components'

export const Container = styled.div`
  background: url('/map.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 4rem;

  @media screen and (max-width: 768px) {
    height: auto;
    margin-bottom: 3rem;
  }
`

export const Content = styled.div`
  width: 80%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`

export const Button = styled.button`
  top: 110px;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  border: 3px solid ${({ theme }) => theme.colors.lightBrown};
  background-color: ${({ theme }) => theme.colors.sand};
  font-size: 25px;
  min-width: 15px;
  width: 100%;
  color: ${({ theme }) => theme.colors.darkBrown};
  transition: all 0.3s ease-in-out;
  font-family: 'Old English Text MT', serif;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.transparentBlack2};

  &:hover {
    background-color: ${({ theme }) => theme.colors.ligthSand};
    color: ${({ theme }) => theme.colors.darkBrown2};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.ligthSand2};
  }

  @media screen and (max-width: 768px) {
    padding: 0 10px;
    margin-left: 50px;
    width: 150px;
    padding: 8px 16px;
    font-size: 20px;
    left: 6px;
    top: 95px;
  }
`

export const CategoryContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
  margin-top: 100px;
  justify-content: space-evenly;
`
export const CategoryContent = styled.div`
  background-color: ${({ theme }) => theme.colors.transparentLigthSand};
  padding: 16px;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.ligthSand3};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.transparentBlack3};
    transform: scale(1.05);
  }

  &:before {
    content: '';
    position: absolute;
    top: -16px;
    left: 0;
    right: 0;
    margin: auto;
    width: 20px;
    height: 20px;
    border: 2px solid ${({ theme }) => theme.colors.ligthSand3};
    border-radius: 50%;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 0;
    right: 0;
    margin: auto;
    width: 20px;
    height: 20px;
    border: 2px solid ${({ theme }) => theme.colors.ligthSand3};
    border-radius: 50%;
  }
`
export const CategoryHeaderContainer = styled.div``
