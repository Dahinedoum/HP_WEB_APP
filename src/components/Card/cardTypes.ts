import { Character } from '../../models/characters'

export type Props = {
  character: Character
  isCharacter?: boolean
  isStudent?: boolean
  isStaff?: boolean
  onRemove: (characterId: string) => void
}
