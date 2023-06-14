import {
  CharactersResponse,
  normalizeCharacters,
} from '../../models/characters'
import {
  getCachedHarryPotterCharacters,
  setCachedHarryPotterCharacters,
} from '../storage/characters'

export const getHarryPotterCharacters = async () => {
  const savedCharacters = getCachedHarryPotterCharacters()

  if (!savedCharacters || savedCharacters.length <= 0) {
    const response = await fetch(`https://hp-api.onrender.com/api/characters`)
    const data: CharactersResponse[] = await response.json()
    console.log(data)

    const normalizedCharacters = data.map(normalizeCharacters)
    setCachedHarryPotterCharacters(normalizedCharacters)
    return normalizedCharacters
  }

  return savedCharacters
}
