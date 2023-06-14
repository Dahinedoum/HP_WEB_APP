import {
  CharactersResponse,
  normalizeCharacters,
} from '../../models/characters'
import {
  getCachedHarryPotterStudents,
  setCachedHarryPotterStudents,
} from '../storage/students'

export const getHarryPotterStudents = async () => {
  const savedStudents = getCachedHarryPotterStudents()

  if (!savedStudents || savedStudents.length <= 0) {
    const response = await fetch(
      `https://hp-api.onrender.com/api/characters/students`
    )
    const data: CharactersResponse[] = await response.json()
    console.log(data)

    const normalizedStudents = data.map(normalizeCharacters)
    setCachedHarryPotterStudents(normalizedStudents)
    return normalizedStudents
  }

  return savedStudents
}
