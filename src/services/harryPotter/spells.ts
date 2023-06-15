import { SpellsResponse, normalizeSpells } from '../../models/spells'
import {
  getCachedHarryPotterSpells,
  setCachedHarryPotterSpells,
} from '../storage/spells'

export const getHarryPotterSpells = async () => {
  const savedSpells = getCachedHarryPotterSpells()

  if (!savedSpells || savedSpells.length <= 0) {
    const response = await fetch(`https://hp-api.onrender.com/api/spells`)
    const data: SpellsResponse[] = await response.json()
    console.log(data)

    const normalizedSpells = data.map(normalizeSpells)
    setCachedHarryPotterSpells(normalizedSpells)
    return normalizedSpells
  }

  return savedSpells
}
