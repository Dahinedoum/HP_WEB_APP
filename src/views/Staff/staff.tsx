import { FC, memo, useCallback, useEffect, useState } from 'react'
import { Cards, Container, Content } from './staffStyles'
import Header from '../../components/Header/header'
import BackButton from '../../components/BackButton/backButton'
import Card from '../../components/Card/card'
import { Character } from '../../models/characters'
import { getHarryPotterStaff } from '../../services/harryPotter/staff'

const Staff: FC = () => {
  const [staffs, setStaffs] = useState<Character[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchStaff = useCallback(async () => {
    const studentsList = await getHarryPotterStaff()
    setStaffs(studentsList)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchStaff()
  }, [fetchStaff])

  return (
    <Container>
      <Header />
      <Content>
        <BackButton />
        <Cards>
          {staffs.map((staff, index) => (
            <Card key={index} character={staff} />
          ))}
        </Cards>
      </Content>
    </Container>
  )
}

export default memo(Staff)
