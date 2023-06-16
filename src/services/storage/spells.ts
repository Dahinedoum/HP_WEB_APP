import { Spell } from '../../models/spells'

export const HP_SPELLS_KEY = 'hpSpells'

export const getCachedHarryPotterSpells = (): Spell[] => {
  const response = window.localStorage.getItem(HP_SPELLS_KEY)
  return response ? JSON.parse(response) : []
}

export const setCachedHarryPotterSpells = (spells: Spell[]) => {
  window.localStorage.setItem(HP_SPELLS_KEY, JSON.stringify(spells))
}

export const addNewSpell = (data: SpellsInput) => {
  const spellList = getCachedHarryPotterSpells()
  setCachedHarryPotterSpells([...spellList, data as Spell])
}

export type SpellsInput = {
  description: string
  name: string
}

export const resetSpellsCache = () => {
  window.localStorage.removeItem(HP_SPELLS_KEY)
}
