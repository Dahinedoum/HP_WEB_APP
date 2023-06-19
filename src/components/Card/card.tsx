import { FC, memo, useState, useCallback, useEffect } from 'react'
import { Props } from './cardTypes'
import {
  ButtonContainer,
  Container,
  Content,
  ExtraInfo,
  Footer,
  FooterContent,
  Header,
  Image,
} from './cardStyles'
import { toggleFavoritesCharacters } from '../../services/storage/characters'
import Button from '../Button/button'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { toggleFavoritesStaff } from '../../services/storage/staff'
import { toggleFavoritesStudents } from '../../services/storage/students'

const Card: FC<Props> = ({
  character,
  isCharacter = false,
  isStudent = false,
  isStaff = false,
}) => {
  const { characterId, studentId, staffId } = useParams()
  const [queryData] = useSearchParams()
  const navigate = useNavigate()
  const [isEdit, setIsEdit] = useState(false)
  const [isFav, setIsFav] = useState(character.isFav)

  useEffect(() => {
    setIsEdit(!!queryData.get('edit'))
  }, [queryData])

  const handleToggleFavoritesCharacters = useCallback(() => {
    if (character) {
      toggleFavoritesCharacters(character)
      setIsFav(!isFav)
    }
  }, [isFav, character])

  const handleToggleFavoritesStaff = useCallback(() => {
    if (character) {
      toggleFavoritesStaff(character)
      setIsFav(!isFav)
    }
  }, [isFav, character])

  const handleToggleFavoritesStudents = useCallback(() => {
    if (character) {
      toggleFavoritesStudents(character)
      setIsFav(!isFav)
    }
  }, [isFav, character])

  const handleGoToEditCharacterForm = useCallback(() => {
    navigate(`/characters/${characterId}?edit=true`)
  }, [navigate])

  const handleGoToEditStudentForm = useCallback(() => {
    navigate(`/students/${studentId}?edit=true`)
  }, [navigate, studentId])

  const handleGoToEditStaffForm = useCallback(() => {
    navigate(`/staff/${staffId}?edit=true`)
  }, [navigate, staffId])

  if (character.image) {
    return (
      <Container>
        <Content>
          <Header>{character.name}</Header>
          <Image src={character.image} alt={character.name} />
          <Footer>
            <FooterContent>
              <ExtraInfo>Birth date: {character.dateOfBirth}</ExtraInfo>
              <ExtraInfo>Gender: {character.gender}</ExtraInfo>
              <ExtraInfo>House: {character.house}</ExtraInfo>
              {isCharacter && (
                <ButtonContainer>
                  <Button onClick={handleToggleFavoritesCharacters}>
                    {isFav ? 'Remove Fav' : 'Add Fav'}
                  </Button>
                  <Button onClick={handleGoToEditCharacterForm}>Edit</Button>
                </ButtonContainer>
              )}
              {isStaff && (
                <ButtonContainer>
                  <Button onClick={handleToggleFavoritesStaff}>
                    {isFav ? 'Remove Fav' : 'Add Fav'}
                  </Button>
                  <Button onClick={handleGoToEditStaffForm}>Edit</Button>
                </ButtonContainer>
              )}
              {isStudent && (
                <ButtonContainer>
                  <Button onClick={handleToggleFavoritesStudents}>
                    {isFav ? 'Remove Fav' : 'Add Fav'}
                  </Button>
                  <Button onClick={handleGoToEditStudentForm}>Edit</Button>
                </ButtonContainer>
              )}
            </FooterContent>
          </Footer>
        </Content>
      </Container>
    )
  } else {
    return (
      <Container>
        <Content>
          <Header>{character.name}</Header>
          <Image src="/harryicon.png" alt={character.name} />
          <Footer>
            <FooterContent>
              <ExtraInfo>Birth date: {character.dateOfBirth}</ExtraInfo>
              <ExtraInfo>Gender: {character.gender}</ExtraInfo>
              <ExtraInfo>House: {character.house}</ExtraInfo>

              {isCharacter && (
                <ButtonContainer>
                  <Button onClick={handleToggleFavoritesCharacters}>
                    {isFav ? 'Remove Fav' : 'Add Fav'}
                  </Button>
                  <Button onClick={handleGoToEditCharacterForm}>Edit</Button>
                </ButtonContainer>
              )}
              {isStaff && (
                <ButtonContainer>
                  <Button onClick={handleToggleFavoritesStaff}>
                    {isFav ? 'Remove Fav' : 'Add Fav'}
                  </Button>
                  <Button onClick={handleGoToEditStaffForm}>Edit</Button>
                </ButtonContainer>
              )}
              {isStudent && (
                <ButtonContainer>
                  <Button onClick={handleToggleFavoritesStudents}>
                    {isFav ? 'Remove Fav' : 'Add Fav'}
                  </Button>
                  <Button onClick={handleGoToEditStudentForm}>Edit</Button>
                </ButtonContainer>
              )}
            </FooterContent>
          </Footer>
        </Content>
      </Container>
    )
  }
}
export default memo(Card)
