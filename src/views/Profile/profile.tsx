import { FC, memo, useCallback } from 'react'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import BackButton from '../../components/BackButton/backButton'
import Card from '../../components/Card/card'
import SpellCard from '../../components/SpellCard/spellCard'
import VideoBackground from '../../components/VideoBackground/videoBackground'
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
import type { Props } from './profileTypes'
import {
  Container,
  PerfilContainer,
  Avatar,
  InfoContainer,
  AdditionalContainer,
  ButtonContainer,
  InfoItem,
  Title,
} from './profileStyles'

const Perfil: FC<Props> = ({ onLogout }) => {
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
    <Container>
      <Header onLogout={onLogout} />
      <VideoBackground videoSrc="/Stars.mp4" />
      <ButtonContainer>
        <BackButton />
      </ButtonContainer>
      <Title>Wizard info</Title>
      <PerfilContainer>
        <Avatar />
        <InfoContainer>
          <InfoItem>Email: {user.email}</InfoItem>
        </InfoContainer>
      </PerfilContainer>
      <Title>My favorite characters</Title>
      <AdditionalContainer>
        {currentFavsCharacters.map((character, index) => (
          <Card
            key={index}
            character={character}
            onRemove={handleRemoveCharacter}
          />
        ))}
      </AdditionalContainer>
      <Title>My favorite students</Title>
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
      <Title>My favorite spells</Title>
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
    </Container>
  )
}

export default memo(Perfil)
