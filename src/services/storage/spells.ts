import { Spell } from '../../models/spells'
import { getUserInfo } from './user'

const HP_SPELLS_KEY = 'hpSpells'
const SPELLS_FAV = 'spellsFav'

export const getCachedHarryPotterSpells = (): Spell[] => {
  const response = window.localStorage.getItem(HP_SPELLS_KEY)
  const spells = response ? JSON.parse(response) : []
  const favSpells = getFavoritesSpells()
  return spells.map((spell: Spell) => {
    const isFav = !!favSpells.find((favSpell) => favSpell.id === spell.id)
    return { ...spell, isFav }
  })
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

export const getFavoritesSpells = (): Spell[] => {
  const userEmail = getUserInfo()
  const favUserKey = `${SPELLS_FAV}-${userEmail.email}`
  const response = window.localStorage.getItem(favUserKey)
  return response ? JSON.parse(response) : []
}

export const setFavoritesSpells = (favSpells: Spell[]) => {
  const userEmail = getUserInfo()
  const favUserKey = `${SPELLS_FAV}-${userEmail.email}`
  window.localStorage.setItem(favUserKey, JSON.stringify(favSpells))
}

export const toggleFavoritesSpells = (spell: Spell) => {
  const currentFavs = getFavoritesSpells()
  const hasFav = currentFavs.find((favSpell) => spell.id === favSpell.id)
  if (hasFav) {
    const newList = currentFavs.filter((favSpell) => spell.id !== favSpell.id)
    setFavoritesSpells(newList)
  } else {
    setFavoritesSpells([...currentFavs, spell])
  }
}

export const resetSpellsCache = () => {
  window.localStorage.removeItem(HP_SPELLS_KEY)
}
