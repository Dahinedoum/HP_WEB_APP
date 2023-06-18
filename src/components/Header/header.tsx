import { FC, memo, useCallback } from 'react'
import { Container, ButtonContainer, Button, Image } from './headerStyles'
import { useNavigate } from 'react-router-dom'
import type { Props } from './headerTypes'

import { logout } from '../../services/firebase/auth'

import { resetCharactersCache } from '../../services/storage/characters'
import { resetSpellsCache } from '../../services/storage/spells'
import { resetStaffCache } from '../../services/storage/staff'
import { resetStudentsCache } from '../../services/storage/students'
import { removeToken } from '../../services/storage/token'
import { resetUserInfo } from '../../services/storage/user'

const Header: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()

  const handleReset = useCallback(() => {
    resetCharactersCache()
    resetSpellsCache()
    resetStaffCache()
    resetStudentsCache()
    navigate('/')
  }, [navigate])

  const handleGoToProfile = useCallback(() => {
    navigate('/profile')
  }, [navigate])

  const handleLogout = useCallback(async () => {
    await logout()
    removeToken()
    resetUserInfo()
    onLogout()
    navigate('/login')
  }, [navigate])

  return (
    <Container>
      <Image src="/logo.png" />
      <ButtonContainer>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleGoToProfile}>Profile</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </ButtonContainer>
    </Container>
  )
}

export default memo(Header)
