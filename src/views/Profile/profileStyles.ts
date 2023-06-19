import styled from 'styled-components'

export const Container = styled.div``

export const ButtonContainer = styled.div`
  margin-top: 90px;
  margin-left: 50px;
`

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background: linear-gradient(315deg, #e8d9b9 0%, #d9c9a9 74%);
  border: 1px solid ${({ theme }) => theme.colors.transparentBlack3};
  border-radius: 50%;
  box-shadow: 0 0 0 5px ${({ theme }) => theme.colors.darkGrey};
  margin: 0 auto;
`

export const Avatar = styled.div`
  width: 150px;
  height: 140px;
  background-image: url('/hat.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 15px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: black;
`

export const InfoItem = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
`
export const Title = styled.h2`
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.oldYellow};
  font-size: 35px;
  font-weight: 500;
  font-family: 'Old English Text MT', cursive;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const AdditionalContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  gap: 10px;
  align-items: center;
  margin-bottom: 100px;
`
