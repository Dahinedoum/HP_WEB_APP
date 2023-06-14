import { FC, memo, useCallback } from 'react'
import {
  CategoryContainer,
  CategoryContent,
  CategoryHeaderContainer,
  LandingContainer,
  LandingContent,
  Button,
} from './landingStyles'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import Image from '../../components/Image/image'
import { useNavigate } from 'react-router-dom'
import type { Props } from './landingTypes'

const Landing: FC<Props> = ({}) => {
  const navigate = useNavigate()
  const handleGoToAllCharacters = useCallback(() => {
    navigate('/characters')
  }, [navigate])

  const handleGoToStudents = useCallback(() => {
    navigate('/students')
  }, [navigate])

  const handleGoToStaff = useCallback(() => {
    navigate('/staff')
  }, [navigate])

  return (
    <LandingContainer>
      <Header />
      <LandingContent>
        <CategoryContainer>
          <CategoryContent>
            <CategoryHeaderContainer>
              <Image src="/hogwarts-5078578_1920.jpg" alt="" />
            </CategoryHeaderContainer>
            <Button onClick={handleGoToAllCharacters}>
              View All Characters
            </Button>
          </CategoryContent>
          <CategoryContent>
            <CategoryHeaderContainer>
              <Image src="/travel-3238442_1920.jpg" alt="" />
            </CategoryHeaderContainer>
            <Button onClick={handleGoToStudents}>View Students</Button>
          </CategoryContent>
          <CategoryContent>
            <CategoryHeaderContainer>
              <Image src="/library-948965_1920.jpg" alt="" />
            </CategoryHeaderContainer>
            <Button onClick={handleGoToStaff}>View Staff</Button>
          </CategoryContent>
          <CategoryContent>
            <CategoryHeaderContainer>
              <Image src="/harry-potter-2348767_1920.jpg" alt="" />
            </CategoryHeaderContainer>
            <Button>View Spells</Button>
          </CategoryContent>
        </CategoryContainer>
      </LandingContent>
      <Footer />
    </LandingContainer>
  )
}

export default memo(Landing)
