import { Spell } from '../../models/spells'

export type Props = {
  spell: Spell
  isProfile?: boolean
  onRemove: (SpellId: string) => void
}
