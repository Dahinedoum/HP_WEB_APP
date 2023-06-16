import { Character, EditCharacterInput } from '../../models/characters'

export const HP_ALL_CHARACTERS_KEY = 'hpAllCharacters'
const CHARACTERS_FAV = 'charactersFav'

export const getCachedHarryPotterCharacters = (): Character[] => {
  const response = window.localStorage.getItem(HP_ALL_CHARACTERS_KEY)
  return response ? JSON.parse(response) : []
  const favCharacters = getFavoritesCharacters()
  return favCharacters.map((character: Character) => {
    const isFav = !!favCharacters.find((favCharacter) => favCharacter.id === favCharacter.id)
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

export type CharacterInput = {
  name: string
  dateOfBirth: string
  gender: string 
  house: string
}


export const getFavoritesCharacters = (): Character[] => {
  const response = window.localStorage.getItem(CHARACTERS_FAV)
  return response ? JSON.parse(response) : []
}

export const setFavoritesCharacters = (favCharacters: Character[]) => {
  window.localStorage.setItem(CHARACTERS_FAV, JSON.stringify(favCharacters))
}

export const toggleFavorites = (character: Character) => {
  const currentFavs = getFavoritesCharacters()
  const hasFav = currentFavs.find((favApod) => character.id === favApod.id)
  if (hasFav) {
    const newList = currentFavs.filter((favApod) => character.id !== favApod.id)
    setFavoritesCharacters(newList)
  } else {
    setFavoritesCharacters([...currentFavs, character])
  }
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
  window.localStorage.removeItem(CHARACTERS_FAV)
}

