import { FC, memo, useCallback } from 'react'
import { Container, ButtonContainer, Button } from './headerStyles'
import { useNavigate } from 'react-router-dom'
import type { Props } from './headerTypes'

const Header: FC<Props> = ({}) => {
  const navigate = useNavigate()

  const handleGoToProfile = useCallback(() => {
    navigate('/profile')
  }, [navigate])

  return (
    <Container>
      <ButtonContainer>
        <Button>synchronize</Button>
        <Button onClick={handleGoToProfile}>Profile</Button>
        <Button>Logout</Button>
      </ButtonContainer>
    </Container>
  )
}

export default memo(Header)
