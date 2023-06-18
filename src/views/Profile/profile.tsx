import { FC, memo, useCallback } from 'react'
import {
  PerfilContainer,
  Avatar,
  InfoContainer,
  AdditionalContainer,
  ButtonContainer,
  InfoItem,
  Title,
} from './profileStyles'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import BackButton from '../../components/BackButton/backButton'
import { getUserInfo } from '../../services/storage/user'
import {
  getCachedHarryPotterCharacters,
  getFavoritesCharacters,
  setCachedHarryPotterCharacters,
} from '../../services/storage/characters'
import { getFavoritesStudents } from '../../services/storage/students'
import { getFavoritesStaff } from '../../services/storage/staff'
import {
  getCachedHarryPotterSpells,
  getFavoritesSpells,
  setCachedHarryPotterSpells,
} from '../../services/storage/spells'
import Card from '../../components/Card/card'
import SpellCard from '../../components/SpellCard/spellCard'

const Perfil: FC = ({}) => {
  const user = getUserInfo()
  const currentFavsCharacters = getFavoritesCharacters()
  const currentFavsStudents = getFavoritesStudents()
  const currentFavsStaff = getFavoritesStaff()
  const currentFavsSpells = getFavoritesSpells()

  const handleRemoveCharacter = useCallback((characterId: string) => {
    const currentCharacters = getCachedHarryPotterCharacters()
    const filteredCharacters = currentCharacters.filter(
      (CachedHarryPotterCharacter) =>
        characterId !== CachedHarryPotterCharacter.id
    )
    setCachedHarryPotterCharacters(filteredCharacters)
    setCachedHarryPotterCharacters(filteredCharacters)
  }, [])

  const handleRemoveSpell = useCallback((spellId: string) => {
    const currentSpells = getCachedHarryPotterSpells()
    const filteredSpells = currentSpells.filter(
      (CachedHarryPotterSpell) => spellId !== CachedHarryPotterSpell.id
    )
    setCachedHarryPotterSpells(filteredSpells)
    setCachedHarryPotterSpells(filteredSpells)
  }, [])
  return (
    <>
      <Header />
      <ButtonContainer>
        <BackButton />
      </ButtonContainer>
      <Title>Welcome {user[0].email}!</Title>
      <PerfilContainer>
        <Avatar />
        <InfoContainer>
          <InfoItem>Email: {user[0].email}</InfoItem>
        </InfoContainer>
      </PerfilContainer>
      <Title>My favorites characters</Title>
      <AdditionalContainer>
        {currentFavsCharacters.map((character, index) => (
          <Card
            key={index}
            character={character}
            onRemove={handleRemoveCharacter}
          />
        ))}
      </AdditionalContainer>
      <Title>My favorites students</Title>
      <AdditionalContainer>
        {currentFavsStudents.map((character, index) => (
          <Card
            key={index}
            character={character}
            onRemove={handleRemoveCharacter}
          />
        ))}
      </AdditionalContainer>
      <Title>My favorite staff</Title>
      <AdditionalContainer>
        {currentFavsStaff.map((character, index) => (
          <Card
            key={index}
            character={character}
            onRemove={handleRemoveCharacter}
          />
        ))}
      </AdditionalContainer>
      <Title>My favorites spells</Title>
      <AdditionalContainer>
        {currentFavsSpells.map((spell, index) => (
          <SpellCard
            key={index}
            spell={spell}
            isProfile={true}
            onRemove={handleRemoveSpell}
          />
        ))}
      </AdditionalContainer>
      <Footer />
    </>
  )
}

export default memo(Perfil)
