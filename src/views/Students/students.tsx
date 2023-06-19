import { FC, memo, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Character } from '../../models/characters'
import Header from '../../components/Header/header'
import Card from '../../components/Card/card'
import Loading from '../../components/Loading/loading'
import BackButton from '../../components/BackButton/backButton'
import Footer from '../../components/Footer/footer'
import { getHarryPotterStudents } from '../../services/harryPotter/students'
import {
  getCachedHarryPotterCharacters,
  setCachedHarryPotterCharacters,
} from '../../services/storage/characters'
import type { Props } from './studentsTypes'
import {
  Button,
  ButtonContainer,
  Cards,
  Container,
  Content,
  StyledTitle,
} from './studentsStyles'

const Students: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()
  const [students, setStudents] = useState<Character[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchStudents = useCallback(async () => {
    const studentsList = await getHarryPotterStudents()
    setStudents(studentsList)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchStudents()
  }, [fetchStudents])

  const handleRemoveCharacter = useCallback((characterId: string) => {
    const currentCharacters = getCachedHarryPotterCharacters()
    const filteredCharacters = currentCharacters.filter(
      (CachedHarryPotterCharacter) =>
        characterId !== CachedHarryPotterCharacter.id
    )
    setCachedHarryPotterCharacters(filteredCharacters)
    setStudents(filteredCharacters)
  }, [])

  const handleGoToCreate = useCallback(() => {
    navigate('/create/student')
  }, [navigate])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <Header onLogout={onLogout} />
      <Content>
        <StyledTitle>Students</StyledTitle>

        <ButtonContainer>
          <BackButton />
          <Button onClick={handleGoToCreate}>Add</Button>
        </ButtonContainer>
        <Cards>
          {students.map((student, index) => (
            <Card
              key={index}
              character={student}
              isStudent={true}
              onRemove={handleRemoveCharacter}
            />
          ))}
        </Cards>
      </Content>
      <Footer />
    </Container>
  )
}

export default memo(Students)
