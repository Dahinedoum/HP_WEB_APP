import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../services/firebase/auth'
import { setToken } from '../../../services/storage/token'
import { setUserInfo } from '../../../services/storage/user'
import type { Props } from './loginTypes'

const useLogic = (onLogin: Props['onLogin']) => {
  const navigate = useNavigate()
  const handleOnSubmit = useCallback(
    async (values: { email: string; password: string }) => {
      try {
        const user = await login(values.email, values.password)
        if (user) {
          const token = await user.getIdToken()
          const userInfo = user
          setUserInfo(userInfo)
          setToken(token)
          onLogin()
          navigate('/landing')
        }
      } catch (error) {
        console.log(error)
      }
    },
    [navigate, onLogin]
  )
  return { handleOnSubmit }
}

export default useLogic
