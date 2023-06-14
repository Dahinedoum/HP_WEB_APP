import { FC, memo } from 'react'
import {
  PerfilContainer,
  Avatar,
  InfoContainer,
  AdditionalContainer,
  ButtonContainer,
} from './profileStyles'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import BackButton from '../../components/BackButton/backButton'

const Perfil: FC = ({}) => {
  return (
    <>
      <Header />
      <ButtonContainer>
        <BackButton />
      </ButtonContainer>
      <PerfilContainer>
        <Avatar />
        <InfoContainer>Ánimo compi!!!!!</InfoContainer>
      </PerfilContainer>
      <AdditionalContainer></AdditionalContainer>
      <Footer />
    </>
  )
}

export default memo(Perfil)
