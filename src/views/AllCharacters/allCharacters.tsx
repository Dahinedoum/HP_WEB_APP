import { FC, memo, useCallback, useEffect, useState } from 'react'
import { getHarryPotterCharacters } from '../../services/harryPotter/allCharacters'
import {
  Button,
  ButtonContainer,
  Cards,
  Container,
  Content,
  StyledTitle,
} from './allCharactersStyles'
import Header from '../../components/Header/header'
import Card from '../../components/Card/card'
import { Character } from '../../models/characters'
import BackButton from '../../components/BackButton/backButton'
import Footer from '../../components/Footer/footer'
import { useNavigate } from 'react-router-dom'
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

  if (isLoading) {
    ;<div>AQUI VA LOADING</div>
  }

  return (
    <Container>
      <Header onLogout={onLogout} />
      <Content>
        <StyledTitle className="title">All Characters</StyledTitle>
        <ButtonContainer>
          <BackButton />
          <Button onClick={handleGoToCreate}>Add</Button>
        </ButtonContainer>
        <Cards>
          {characters.map((character, index) => (
            <Card key={index} character={character} isCharacter={true} />
          ))}
        </Cards>
      </Content>
      <Footer />
    </Container>
  )
}

export default memo(AllCharacters)
