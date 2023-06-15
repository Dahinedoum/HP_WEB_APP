import { FC, memo, useCallback, useEffect, useState } from 'react'
import { Cards, Container, Content } from './spellsStyles'
import Header from '../../components/Header/header'
import BackButton from '../../components/BackButton/backButton'
import { Spell } from '../../models/spells'
import { getHarryPotterSpells } from '../../services/harryPotter/spells'
import SpellCard from '../../components/SpellCard/spellCard'

const Spells: FC = () => {
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

  return (
    <Container>
      <Header />
      <Content>
        <BackButton />
        <Cards>
          {spells.map((spell, index) => (
            <SpellCard key={index} spell={spell} />
          ))}
        </Cards>
      </Content>
    </Container>
  )
}

export default memo(Spells)
