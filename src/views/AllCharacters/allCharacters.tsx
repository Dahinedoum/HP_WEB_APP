import { FC, memo, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/header'
import Card from '../../components/Card/card'
import BackButton from '../../components/BackButton/backButton'
import Footer from '../../components/Footer/footer'
import Loading from '../../components/Loading/loading'
import { Character } from '../../models/characters'
import { getHarryPotterCharacters } from '../../services/harryPotter/allCharacters'
import {
  Button,
  ButtonContainer,
  Cards,
  Container,
  Content,
  StyledTitle,
} from './allCharactersStyles'
import {
  getCachedHarryPotterCharacters,
  setCachedHarryPotterCharacters,
} from '../../services/storage/characters'
import type { Props } from './allCharactersTypes'

const AllCharacters: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()
  const [characters, setCharacters] = useState<Character[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchAllCharacters = useCallback(async () => {
    const charactersList = await getHarryPotterCharacters()
    setCharacters(charactersList)
    setIsLoading(false)
  }, [])

  const handleGoToCreate = useCallback(() => {
    navigate('/create/character')
  }, [navigate])

  useEffect(() => {
    fetchAllCharacters()
  }, [fetchAllCharacters])

  const handleRemoveCharacter = useCallback((characterId: string) => {
    const currentCharacters = getCachedHarryPotterCharacters()
    const filteredCharacters = currentCharacters.filter(
      (CachedHarryPotterCharacter) =>
        characterId !== CachedHarryPotterCharacter.id
    )
    setCachedHarryPotterCharacters(filteredCharacters)
    setCharacters(filteredCharacters)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <Header onLogout={onLogout} />
      <Content>
        <StyledTitle>All Characters</StyledTitle>
        <ButtonContainer>
          <BackButton />
          <Button onClick={handleGoToCreate}>Add</Button>
        </ButtonContainer>
        <Cards>
          {characters.map((character) => (
            <Card
              key={character.id}
              character={character}
              onRemove={handleRemoveCharacter}
              isCharacter
            />
          ))}
        </Cards>
      </Content>
      <Footer />
    </Container>
  )
}

export default memo(AllCharacters)
