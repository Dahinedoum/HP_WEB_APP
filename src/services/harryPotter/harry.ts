import { getCachedHarryPotterCharacters } from '../storage/characters'

export const getHarryPotterCharacters = async () => {
  //   const savedCharacters = getCachedHarryPotterCharacters()
  const response = await fetch(`https://hp-api.onrender.com/api/characters`)
  const data = await response.json()

  console.log(data)
}
