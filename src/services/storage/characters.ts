import { Character } from '../../models/characters'

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


export const addNewCharacter = (data: CharacterInput) => {
  const characterList = getCachedHarryPotterCharacters()
  setCachedHarryPotterCharacters([...characterList, data as Character])
}

export type CharacterInput = {
  name: string
  dateOfBirth: string
  gender: string 
  house: string
}