import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { EditCharacterInput } from '../../models/characters'
import { editCachedCharacter } from '../../services/storage/characters'

const useLogic = (
  id: string,
  onEditComplete: (values: EditCharacterInput) => void
) => {
  const navigate = useNavigate()
  const handleEdit = useCallback(
    (values: EditCharacterInput) => {
      editCachedCharacter(id, values)
      onEditComplete(values)
      navigate(`/characters/${id}`)
    },
    [navigate, onEditComplete, id]
  )

  return { handleEdit }
}

export default useLogic
