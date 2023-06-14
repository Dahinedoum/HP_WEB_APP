export const HP_ALL_CHARACTERS_KEY = 'hpAllCharacters'

export const getCachedHarryPotterCharacters = () => {
  const response = window.localStorage.getItem(HP_ALL_CHARACTERS_KEY)
  const allCharacters = response ? JSON.parse(response) : []
}

export const setCachedHarryPotterCharacters = (allCharacters: any) => {
  window.localStorage.setItem(
    HP_ALL_CHARACTERS_KEY,
    JSON.stringify(allCharacters)
  )
}
