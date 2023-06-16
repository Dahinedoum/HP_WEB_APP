import { FC, memo, useCallback, useEffect, useState } from 'react'
import { Character } from '../../models/characters'
import Header from '../../components/Header/header'
import Card from '../../components/Card/card'
import {
  Button,
  ButtonContainer,
  StudentsCards,
  StudentsContainer,
  StudentsContent,
} from './studentsStyles'
import { getHarryPotterStudents } from '../../services/harryPotter/students'
import BackButton from '../../components/BackButton/backButton'
import Footer from '../../components/Footer/footer'
import { useNavigate } from 'react-router-dom'

const Students: FC = () => {
  const navigate = useNavigate()
  const [students, setStudents] = useState<Character[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchStudents = useCallback(async () => {
    const studentsList = await getHarryPotterStudents()
    setStudents(studentsList)
    setIsLoading(false)
  }, [])

  const handleGoToCreate = useCallback(() => {
    navigate('/create/student')
  }, [navigate])

  useEffect(() => {
    fetchStudents()
  }, [fetchStudents])

  if (isLoading) {
    ;<div>AQUI VA LOADING</div>
  }
  return (
    <StudentsContainer>
      <Header />
      <StudentsContent>
        <ButtonContainer>
          <BackButton />
          <Button onClick={handleGoToCreate}>Add</Button>
        </ButtonContainer>
        <StudentsCards>
          {students.map((student, index) => (
            <Card key={index} character={student} isStudent={true} />
          ))}
        </StudentsCards>
      </StudentsContent>
      <Footer />
    </StudentsContainer>
  )
}

export default memo(Students)
