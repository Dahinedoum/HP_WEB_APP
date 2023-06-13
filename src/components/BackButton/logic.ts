import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useLogic = () => {
  const navigate = useNavigate()
  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return {
    goBack,
  }
}
