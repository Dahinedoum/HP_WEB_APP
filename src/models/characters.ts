export type Wand = {
  wood: string
  core: string
  length?: number | null
}
export type CharactersResponse = {
  actor: string
  alive: boolean
  ancestry: string
  dateOfBirth: string
  eyeColour: string
  gender: string
  hairColour: string
  hogwartsStaff: boolean
  hogwartsStudent: boolean
  house: string
  id: string
  image?: string
  name: string
  patronus: string
  species: string
  wand: Wand[]
  wizard: boolean
  yearOfBirth: number
}

export type EditCharacterInput = {
  name: string
  image: string
  house: string
  gender: string
  dateOfBirth: string
}

export const normalizeCharacters = (input: CharactersResponse) => ({
  actor: input?.actor || '',
  alive: input?.alive || '',
  ancestry: input?.ancestry || '',
  dateOfBirth: input?.dateOfBirth || '',
  eyeColour: input?.eyeColour || '',
  gender: input?.gender || '',
  hairColour: input?.hairColour || '',
  hogwartsStaff: input?.hogwartsStaff || '',
  hogwartsStudent: input?.hogwartsStudent || '',
  house: input?.house || '',
  id: input?.id || '',
  image: input?.image || '',
  name: input?.name || '',
  patronus: input?.patronus || '',
  species: input?.species || '',
  wand: input?.wand || '',
  wizard: input?.wizard || '',
  yearOfBirth: input?.yearOfBirth || '',
  isFav: false,
})

export type Character = ReturnType<typeof normalizeCharacters>
