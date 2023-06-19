import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import Image from '../../components/Image/image'
import type { Props } from './landingTypes'
import {
  CategoryContainer,
  CategoryContent,
  CategoryHeaderContainer,
  Container,
  Content,
  Button,
} from './landingStyles'

const Landing: FC<Props> = ({ onLogout }) => {
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

  const handleGoToSpells = useCallback(() => {
    navigate('/spells')
  }, [navigate])

  return (
    <Container>
      <Header onLogout={onLogout} />
      <Content>
        <CategoryContainer>
          <CategoryContent>
            <CategoryHeaderContainer>
              <Image src="/AllCharacters.png" alt="" />
            </CategoryHeaderContainer>
            <Button onClick={handleGoToAllCharacters}>
              View All Characters
            </Button>
          </CategoryContent>
          <CategoryContent>
            <CategoryHeaderContainer>
              <Image src="/Car.png" alt="" />
            </CategoryHeaderContainer>
            <Button onClick={handleGoToStudents}>View Students</Button>
          </CategoryContent>
          <CategoryContent>
            <CategoryHeaderContainer>
              <Image src="/Staff.png" alt="" />
            </CategoryHeaderContainer>
            <Button onClick={handleGoToStaff}>View Staff</Button>
          </CategoryContent>
          <CategoryContent>
            <CategoryHeaderContainer>
              <Image src="/Spells.png" alt="" />
            </CategoryHeaderContainer>
            <Button onClick={handleGoToSpells}>View Spells</Button>
          </CategoryContent>
        </CategoryContainer>
      </Content>
      <Footer />
    </Container>
  )
}

export default memo(Landing)
