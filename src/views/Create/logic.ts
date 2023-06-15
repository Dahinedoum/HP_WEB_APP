import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const useLogic = () => {
  const navigate = useNavigate()

  const handleAddNewCharacter = useCallback(
    (values: { name: string; dateOfBirth: string; gender: string; house: string }) => {
      console.log('New Character:', values)
      navigate('/characters')
    },
    [navigate]
  )

  return { addNewCharacter: handleAddNewCharacter }
}

export default useLogic