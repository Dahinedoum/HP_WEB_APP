import { FC, memo } from 'react'
import { getHarryPotterCharacters } from '../../services/harryPotter/harry'
import {
  AllCharactersCards,
  AllCharactersContainer,
  AllCharactersContent,
} from './allCharactersStyles'
import Header from '../../components/Header/header'
import Card from '../../components/Card/card'

const AllCharacters: FC = () => {
  getHarryPotterCharacters()
  return (
    <AllCharactersContainer>
      <Header />
      <AllCharactersContent>
        <AllCharactersCards>{/* <Card /> */}</AllCharactersCards>
      </AllCharactersContent>
    </AllCharactersContainer>
  )
}

export default memo(AllCharacters)
