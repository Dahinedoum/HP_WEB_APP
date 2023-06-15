import { Character, EditCharacterInput } from '../../models/characters'

export const HP_ALL_CHARACTERS_KEY = 'hpAllCharacters'

export const getCachedHarryPotterCharacters = (): Character[] => {
  const response = window.localStorage.getItem(HP_ALL_CHARACTERS_KEY)
  return response ? JSON.parse(response) : []
}

export const setCachedHarryPotterCharacters = (allCharacters: Character[]) => {
  window.localStorage.setItem(
    HP_ALL_CHARACTERS_KEY,
    JSON.stringify(allCharacters)
  )
}

export const editCachedCharacter = (id: string, values: EditCharacterInput) => {
  const cachedCharacters = getCachedHarryPotterCharacters()
  const currentCharacter = cachedCharacters.find(
    (cachedCharacter) => cachedCharacter.id === id
  )
  const filteredCachedCharacter = cachedCharacters.filter(
    (cachedCharacter) => cachedCharacter.id !== id
  )
  const editedCharacter = { ...currentCharacter, ...values } as Character
  setCachedHarryPotterCharacters([...filteredCachedCharacter, editedCharacter])
}
