import { useCallback, useEffect, useMemo, useState } from 'react'
import { Character, EditCharacterInput } from '../../models/characters'
import { useParams } from 'react-router-dom'
import { getCachedCharacterById } from '../../services/storage/characters'

const useLogic = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState<Character | null>(null)
  const handleEdit = useCallback((values: EditCharacterInput) => {
    console.log({ values })
  }, [])

  useEffect(() => {
    if (id) {
      const currentCharacter = getCachedCharacterById(id)
      if (currentCharacter) {
        setCharacter(currentCharacter)
      }
    }
  }, [id])

  return { handleEdit, character }
}

export default useLogic
