export type SpellsResponse = {
  id: string
  name: string
  description: string
}

export const normalizeSpells = (input: SpellsResponse) => ({
  id: input?.id || '',
  name: input?.name || '',
  description: input?.description || '',
  isFav: false,
})

export type Spell = ReturnType<typeof normalizeSpells>
