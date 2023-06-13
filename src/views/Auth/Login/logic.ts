import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../services/firebase/auth'

const useLogic = () => {
  const navigate = useNavigate()
  const handleOnSubmit = useCallback(
    async (values: { email: string; password: string }) => {
      try {
        const user = await login(values.email, values.password)
        if (user) {
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
