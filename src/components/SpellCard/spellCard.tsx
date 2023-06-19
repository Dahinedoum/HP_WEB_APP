import { FC, memo, useCallback, useState } from 'react'
import Button from '../Button/button'
import type { Props } from './spellCardTypes'
import { toggleFavoritesSpells } from '../../services/storage/spells'
import {
  Container,
  Content,
  ExtraInfo,
  Footer,
  FooterContent,
  Header,
  Image,
} from './spellCardStyles'

import {
  getCachedHarryPotterSpells,
  setCachedHarryPotterSpells,
  toggleFavoritesSpells,
} from '../../services/storage/spells'
import Button from '../Button/button'
import { FaHeart, FaTrashAlt } from 'react-icons/fa'


const SpellCard: FC<Props> = ({ spell, isProfile = false, onRemove }) => {
  const [isFav, setIsFav] = useState(spell.isFav)

  const handleToggleFavorites = useCallback(() => {
    if (spell) {
      toggleFavoritesSpells(spell)
      setIsFav(!isFav)
    }
  }, [isFav, spell])

  return (
    <Container>
      <Content>
        <Header>{spell.name}</Header>
        <Image src="/spell.png" />
        <Footer>
          {!isProfile && (
            <FooterContent>
              <ExtraInfo>{spell.description}</ExtraInfo>
              <Button onClick={handleToggleFavorites}>
                {isFav ? <FaHeart color="red" /> : <FaHeart />}
              </Button>
              <Button onClick={() => onRemove(spell.id)}>
                <FaTrashAlt />
              </Button>


            </FooterContent>
          )}

          {isProfile && (
            <FooterContent>
              <ExtraInfo>{spell.description}</ExtraInfo>
            </FooterContent>
          )}
        </Footer>
      </Content>
    </Container>
  )
}

export default memo(SpellCard)
