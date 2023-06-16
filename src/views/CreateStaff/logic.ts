import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { addNewStaff } from '../../services/storage/staff'

const useLogic = () => {
  const navigate = useNavigate()

  const handleAddNewStaff = useCallback(
    (values: {
      name: string
      dateOfBirth: string
      gender: string
      house: string
    }) => {
      addNewStaff(values)
      navigate(-1)
    },
    [navigate]
  )

  return { handleAddNewStaff }
}

export default useLogic
