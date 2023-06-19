import { FC, memo, useCallback, useEffect, useState } from 'react'
import { Character } from '../../models/characters'
import Header from '../../components/Header/header'
import Card from '../../components/Card/card'
import {
  Button,
  ButtonContainer,
  Cards,
  Container,
  Content,
  StyledTitle,
} from './studentsStyles'
import { getHarryPotterStudents } from '../../services/harryPotter/students'
import BackButton from '../../components/BackButton/backButton'
import Footer from '../../components/Footer/footer'
import { useNavigate } from 'react-router-dom'

import {
  getCachedHarryPotterCharacters,
  setCachedHarryPotterCharacters,
} from '../../services/storage/characters'

import type { Props } from './studentsTypes'
import Loading from '../../components/Loading/loading'

const Students: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()
  const [students, setStudents] = useState<Character[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchStudents = useCallback(async () => {
    const studentsList = await getHarryPotterStudents()
    setStudents(studentsList)
    setIsLoading(false)
  }, [])

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

  useEffect(() => {
    fetchStudents()
  }, [fetchStudents])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <Header onLogout={onLogout} />
      <Content>
        <StyledTitle className="title">Students</StyledTitle>

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
