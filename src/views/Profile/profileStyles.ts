import styled from 'styled-components'

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
  background-color: rgba(255, 254, 244, 0.8);
  border: 1px solid rgba(128, 0, 0, 0.3);
  margin: 0 auto;
`

export const Avatar = styled.div`
  width: 140px;
  height: 140px;
  background-image: url('/harryicon.png');
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
`

export const AdditionalContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  gap: 10px;
  align-items: center;
  margin-bottom: 100px;
`
