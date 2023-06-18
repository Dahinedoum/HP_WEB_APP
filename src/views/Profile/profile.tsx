import { FC, memo } from 'react'
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
import { getFavoritesCharacters } from '../../services/storage/characters'
import { getFavoritesStudents } from '../../services/storage/students'
import { getFavoritesStaff } from '../../services/storage/staff'
import { getFavoritesSpells } from '../../services/storage/spells'
import Card from '../../components/Card/card'
import SpellCard from '../../components/SpellCard/spellCard'
import { Props } from './profileTypes'

const Perfil: FC<Props> = ({ onLogout }) => {
  const user = getUserInfo()
  const currentFavsCharacters = getFavoritesCharacters()
  const currentFavsStudents = getFavoritesStudents()
  const currentFavsStaff = getFavoritesStaff()
  const currentFavsSpells = getFavoritesSpells()

  return (
    <>
      <Header onLogout={onLogout} />
      <ButtonContainer>
        <BackButton />
      </ButtonContainer>
      <Title>Welcome {user.email}!</Title>
      <PerfilContainer>
        <Avatar />
        <InfoContainer>
          <InfoItem>Email: {user.email}</InfoItem>
        </InfoContainer>
      </PerfilContainer>
      <Title>My favorites characters</Title>
      <AdditionalContainer>
        {currentFavsCharacters.map((character, index) => (
          <Card key={index} character={character} />
        ))}
      </AdditionalContainer>
      <Title>My favorites students</Title>
      <AdditionalContainer>
        {currentFavsStudents.map((character, index) => (
          <Card key={index} character={character} />
        ))}
      </AdditionalContainer>
      <Title>My favorite staff</Title>
      <AdditionalContainer>
        {currentFavsStaff.map((character, index) => (
          <Card key={index} character={character} />
        ))}
      </AdditionalContainer>
      <Title>My favorites spells</Title>
      <AdditionalContainer>
        {currentFavsSpells.map((spell, index) => (
          <SpellCard key={index} spell={spell} isProfile={true} />
        ))}
      </AdditionalContainer>
      <Footer />
    </>
  )
}

export default memo(Perfil)
