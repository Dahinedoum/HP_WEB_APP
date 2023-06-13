import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../../services/firebase/auth'

const useLogic = () => {
  const navigate = useNavigate()
  const handleOnSubmit = useCallback(
    async (values: { email: string; password: string; name: string }) => {
      try {
        const user = await signup(values.email, values.password)
        if (user) {
          console.log(user)
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
