import { FC, memo } from 'react'
import { LandingContainer, LandingContent } from './landingStyles'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import { useNavigate } from 'react-router-dom'
import type { Props } from './landingTypes'

const Landing: FC<Props> = ({}) => {
  return (
    <LandingContainer>
      <Header />
      <LandingContent></LandingContent>
      <Footer />
    </LandingContainer>
  )
}

export default memo(Landing)
