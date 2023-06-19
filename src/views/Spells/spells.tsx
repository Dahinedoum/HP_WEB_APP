import { FC, memo, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/header'
import BackButton from '../../components/BackButton/backButton'
import Loading from '../../components/Loading/loading'
import SpellCard from '../../components/SpellCard/spellCard'
import Footer from '../../components/Footer/footer'
import { Spell } from '../../models/spells'
import { getHarryPotterSpells } from '../../services/harryPotter/spells'
import {
  getCachedHarryPotterSpells,
  setCachedHarryPotterSpells,
} from '../../services/storage/spells'
import type { Props } from './spellsTypes'
import {
  Button,
  ButtonContainer,
  Cards,
  Container,
  Content,
  StyledTitle,
} from './spellsStyles'

const Spells: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()
  const [spells, setSpells] = useState<Spell[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchSpells = useCallback(async () => {
    const spellsList = await getHarryPotterSpells()
    setSpells(spellsList)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchSpells()
  }, [fetchSpells])

  const handleGoToCreate = useCallback(() => {
    navigate('/create/spell')
  }, [navigate])

  const handleRemoveSpell = useCallback((spellId: string) => {
    const currentSpells = getCachedHarryPotterSpells()
    const filteredSpells = currentSpells.filter(
      (CachedHarryPotterSpell) => spellId !== CachedHarryPotterSpell.id
    )
    setCachedHarryPotterSpells(filteredSpells)
    setSpells(filteredSpells)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <Header onLogout={onLogout} />
      <Content>
        <StyledTitle>Spells</StyledTitle>
        <ButtonContainer>
          <BackButton />
          <Button onClick={handleGoToCreate}>Add</Button>
        </ButtonContainer>
        <Cards>
          {spells.map((spell, index) => (
            <SpellCard key={index} spell={spell} onRemove={handleRemoveSpell} />
          ))}
        </Cards>
      </Content>
      <Footer />
    </Container>
  )
}

export default memo(Spells)
