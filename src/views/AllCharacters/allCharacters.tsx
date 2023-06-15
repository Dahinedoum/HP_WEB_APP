import { FC, memo, useCallback, useEffect, useState } from 'react'
import { getHarryPotterCharacters } from '../../services/harryPotter/allCharacters'
import { Cards, Container, Content } from './allCharactersStyles'
import Header from '../../components/Header/header'
import Card from '../../components/Card/card'
import { Character } from '../../models/characters'
import BackButton from '../../components/BackButton/backButton'
import Footer from '../../components/Footer/footer'

const AllCharacters: FC = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchAllCharacters = useCallback(async () => {
    const charactersList = await getHarryPotterCharacters()
    setCharacters(charactersList)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchAllCharacters()
  }, [fetchAllCharacters])

  if (isLoading) {
    ;<div>AQUI VA LOADING</div>
  }

  return (
    <Container>
      <Header />
      <Content>
        <BackButton />
        <Cards>
          {characters.map((character, index) => (
            <Card key={index} character={character} />
          ))}
        </Cards>
      </Content>
      <Footer />
    </Container>
  )
}

export default memo(AllCharacters)
