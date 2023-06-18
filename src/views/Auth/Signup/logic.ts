import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../../services/firebase/auth'
import { setToken } from '../../../services/storage/token'
import { setUserInfo } from '../../../services/storage/user'
import type { Props } from './signupTypes'

const useLogic = (onSignup: Props['onSignup']) => {
  const navigate = useNavigate()
  const handleOnSubmit = useCallback(
    async (values: { email: string; password: string; name: string }) => {
      try {
        const user = await signup(values.email, values.password)
        if (user) {
          const token = await user.getIdToken()
          const userInfo = user.providerData
          setUserInfo(userInfo)
          setToken(token)
          onSignup()
          navigate('/landing')
        }
      } catch (error) {
        console.log(error)
      }
    },
    [navigate]
  )

  return { handleOnSubmit }
}

export default useLogic
