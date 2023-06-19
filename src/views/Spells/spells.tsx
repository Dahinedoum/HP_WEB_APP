import { FC, memo, useCallback, useEffect, useState } from 'react'
import {
  Button,
  ButtonContainer,
  Cards,
  Container,
  Content,
  StyledTitle,
} from './spellsStyles'
import Header from '../../components/Header/header'
import BackButton from '../../components/BackButton/backButton'
import { Spell } from '../../models/spells'
import { getHarryPotterSpells } from '../../services/harryPotter/spells'
import SpellCard from '../../components/SpellCard/spellCard'
import Footer from '../../components/Footer/footer'
import { useNavigate } from 'react-router-dom'

import { getCachedHarryPotterSpells, setCachedHarryPotterSpells } from '../../services/storage/spells'

import type { Props } from './spellsTypes'
import Loading from '../../components/Loading/loading'


const Spells: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()
  const [spells, setSpells] = useState<Spell[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchSpells = useCallback(async () => {
    const spellsList = await getHarryPotterSpells()
    setSpells(spellsList)
    setIsLoading(false)
  }, [])

  const handleGoToCreate = useCallback(() => {
    navigate('/create/spell')
  }, [navigate])

  useEffect(() => {
    fetchSpells()
  }, [fetchSpells])

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
        <StyledTitle className="title">Spells</StyledTitle>
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
