import { Character, EditCharacterInput } from '../../models/characters'
import { getUserInfo } from './user'

const HP_ALL_CHARACTERS_KEY = 'hpAllCharacters'
const CHARACTERS_FAV = 'charactersFav'

export type CharacterInput = {
  name: string
  dateOfBirth: string
  gender: string
  house: string
}

export const getCachedHarryPotterCharacters = (): Character[] => {
  const response = window.localStorage.getItem(HP_ALL_CHARACTERS_KEY)
  const characters = response ? JSON.parse(response) : []
  const favCharacters = getFavoritesCharacters()
  return characters.map((character: Character) => {
    const isFav = !!favCharacters.find(
      (favCharacter) => favCharacter.id === character.id
    )
    return { ...character, isFav }
  })
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

export const getFavoritesCharacters = (): Character[] => {
  const userEmail = getUserInfo()
  const favUserKey = `${CHARACTERS_FAV}-${userEmail.email}`
  const response = window.localStorage.getItem(favUserKey)
  return response ? JSON.parse(response) : []
}

export const setFavoritesCharacters = (favCharacters: Character[]) => {
  const userEmail = getUserInfo()
  const favUserKey = `${CHARACTERS_FAV}-${userEmail.email}`
  window.localStorage.setItem(favUserKey, JSON.stringify(favCharacters))
}

export const toggleFavoritesCharacters = (character: Character) => {
  const currentFavs = getFavoritesCharacters()
  const hasFav = currentFavs.find(
    (favCharacter) => character.id === favCharacter.id
  )
  if (hasFav) {
    const newList = currentFavs.filter(
      (favCharacter) => character.id !== favCharacter.id
    )
    setFavoritesCharacters(newList)
  } else {
    setFavoritesCharacters([...currentFavs, character])
  }
}

export const getCachedCharacterById = (id: string): Character | null => {
  const characters = getCachedHarryPotterCharacters()
  return characters.find((character) => character.id === id) || null
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

export const resetCharactersCache = () => {
  window.localStorage.removeItem(HP_ALL_CHARACTERS_KEY)
}
