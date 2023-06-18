import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { addNewStudent } from '../../services/storage/students'

const useLogic = () => {
  const navigate = useNavigate()

  const handleAddNewStudent = useCallback(
    (values: {
      name: string
      dateOfBirth: string
      gender: string
      house: string
    }) => {
      addNewStudent(values)
      navigate(-1)
    },
    [navigate]
  )

  return { handleAddNewStudent }
}

export default useLogic
