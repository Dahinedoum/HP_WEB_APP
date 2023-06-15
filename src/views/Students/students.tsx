import { FC, memo, useCallback, useEffect, useState } from 'react'
import { Character } from '../../models/characters'
import Header from '../../components/Header/header'
import Card from '../../components/Card/card'
import {
  StudentsCards,
  StudentsContainer,
  StudentsContent,
} from './studentsStyles'
import { getHarryPotterStudents } from '../../services/harryPotter/students'
import BackButton from '../../components/BackButton/backButton'
import Footer from '../../components/Footer/footer'

const Students: FC = () => {
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

  if (isLoading) {
    ;<div>AQUI VA LOADING</div>
  }
  return (
    <StudentsContainer>
      <Header />
      <StudentsContent>
        <BackButton />
        <StudentsCards>
          {students.map((student, index) => (
            <Card key={index} character={student} />
          ))}
        </StudentsCards>
      </StudentsContent>
      <Footer />
    </StudentsContainer>
  )
}

export default memo(Students)
