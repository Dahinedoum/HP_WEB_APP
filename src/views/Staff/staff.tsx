import { FC, memo, useCallback, useEffect, useState } from 'react'
import {
  Button,
  ButtonContainer,
  Cards,
  Container,
  Content,
  StyledTitle,
} from './staffStyles'
import Header from '../../components/Header/header'
import BackButton from '../../components/BackButton/backButton'
import Card from '../../components/Card/card'
import { Character } from '../../models/characters'
import { getHarryPotterStaff } from '../../services/harryPotter/staff'
import Footer from '../../components/Footer/footer'
import { useNavigate } from 'react-router-dom'
import type { Props } from './staffTypes'

const Staff: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()
  const [staffs, setStaffs] = useState<Character[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchStaff = useCallback(async () => {
    const staffList = await getHarryPotterStaff()
    setStaffs(staffList)
    setIsLoading(false)
  }, [])

  const handleGoToCreate = useCallback(() => {
    navigate('/create/staff')
  }, [navigate])

  useEffect(() => {
    fetchStaff()
  }, [fetchStaff])

  if (isLoading) {
    ;<div>AQUI VA LOADING</div>
  }

  return (
    <Container>
      <Header onLogout={onLogout} />
      <Content>
        <StyledTitle className="title">Staff</StyledTitle>

        <ButtonContainer>
          <BackButton />
          <Button onClick={handleGoToCreate}>Add</Button>
        </ButtonContainer>
        <Cards>
          {staffs.map((staff, index) => (
            <Card key={index} character={staff} isStaff={true} />
          ))}
        </Cards>
      </Content>
      <Footer />
    </Container>
  )
}

export default memo(Staff)
