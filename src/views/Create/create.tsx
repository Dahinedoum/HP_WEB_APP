import { FC, memo } from 'react'
import { ButtonContainer } from './createStyles'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import BackButton from '../../components/BackButton/backButton'
import CreateCard from '../../components/CreateCard/createCard'

const Create: FC = ({}) => {
  return (
    <>
      <Header />
      <ButtonContainer>
        <BackButton />
      </ButtonContainer>
      <CreateCard />
      <Footer />
    </>
  )
}

export default memo(Create)
