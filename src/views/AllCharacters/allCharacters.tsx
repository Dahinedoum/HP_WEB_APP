import { FC, memo, useCallback, useEffect, useState } from 'react'
import { getHarryPotterCharacters } from '../../services/harryPotter/harry'
import {
  AllCharactersCards,
  AllCharactersContainer,
  AllCharactersContent,
} from './allCharactersStyles'
import Header from '../../components/Header/header'
import Card from '../../components/Card/card'
import { Character } from '../../models/characters'

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

  return (
    <AllCharactersContainer>
      <Header />
      <AllCharactersContent>
        <AllCharactersCards>
          {characters.map((character, index) => (
            <Card key={index} character={character} />
          ))}
        </AllCharactersCards>
      </AllCharactersContent>
    </AllCharactersContainer>
  )
}

export default memo(AllCharacters)
