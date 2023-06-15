export type SpellsResponse = {
  id: string
  name: string
  description: string
}

export const normalizeSpells = (input: SpellsResponse) => ({
  id: input?.id || '',
  name: input?.name || '',
  description: input?.description || '',
})

export type Spell = ReturnType<typeof normalizeSpells>
