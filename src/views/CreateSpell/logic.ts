import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { addNewSpell } from '../../services/storage/spells'

const useLogic = () => {
  const navigate = useNavigate()

  const handleAddNewSpell = useCallback(
    (values: { name: string; description: string }) => {
      addNewSpell(values)
      navigate(-1)
    },
    [navigate]
  )

  return { handleAddNewSpell }
}

export default useLogic
