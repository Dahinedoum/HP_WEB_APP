import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { addNewCharacter } from '../../services/storage/characters'

const useLogic = () => {
  const navigate = useNavigate()

  const handleAddNewCharacter = useCallback(
    (values: {
      name: string
      dateOfBirth: string
      gender: string
      house: string
    }) => {
      addNewCharacter(values)
      navigate(-1)
    },
    [navigate]
  )

  return { handleAddNewCharacter }
}

export default useLogic
