import { FC, memo, useCallback } from 'react'
import { Container, ButtonContainer, Button } from './headerStyles'
import { useNavigate } from 'react-router-dom'
import type { Props } from './headerTypes'
import { logout } from '../../services/firebase/auth'

const Header: FC<Props> = ({  }) => {
  const navigate = useNavigate()

  const handleGoToProfile = useCallback(() => {
    navigate('/profile')
  }, [navigate])

  const handleGoToCreate = useCallback(() => {
    navigate('/create')
  }, [navigate])

  const handleLogout = useCallback(async () => {
    await logout()
    navigate('/login')
  }, [navigate, ])

  return (
    <Container>
      <ButtonContainer>
        <Button>synchronize</Button>
        <Button onClick={handleGoToProfile}>Profile</Button>
        <Button onClick={handleLogout}>Logout</Button>
        <Button onClick={handleGoToCreate}>Create</Button>
      </ButtonContainer>
    </Container>
  )
}

export default memo(Header)
