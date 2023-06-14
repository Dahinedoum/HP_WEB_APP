import {
  CharactersResponse,
  normalizeCharacters,
} from '../../models/characters'
import {
  getCachedHarryPotterStaff,
  setCachedHarryPotterStaff,
} from '../storage/staff'

export const getHarryPotterStaff = async () => {
  const savedStaff = getCachedHarryPotterStaff()

  if (!savedStaff || savedStaff.length <= 0) {
    const response = await fetch(
      `https://hp-api.onrender.com/api/characters/staff`
    )
    const data: CharactersResponse[] = await response.json()
    console.log(data)

    const normalizedStaff = data.map(normalizeCharacters)
    setCachedHarryPotterStaff(normalizedStaff)
    return normalizedStaff
  }

  return savedStaff
}
