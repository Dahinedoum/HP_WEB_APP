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
import {
  getCachedCharacterById,
  toggleFavoritesCharacters,
} from '../../services/storage/characters'
import Button from '../Button/button'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Character, EditCharacterInput } from '../../models/characters'
import FormEdit from '../../views/FormEdit/FormEdit'
import { toggleFavoritesStaff } from '../../services/storage/staff'
import { toggleFavoritesStudents } from '../../services/storage/students'

import { FaHeart, FaTrashAlt, FaPen } from 'react-icons/fa'

const Card: FC<Props> = ({
  character,
  isCharacter = false,
  isStudent = false,
  isStaff = false,
  onRemove,
}) => {
  const { characterId, studentId, staffId } = useParams()
  const [queryData] = useSearchParams()
  const navigate = useNavigate()
  const [hpCharacter, setCharacter] = useState<Character | null>(null)
  const [isEdit, setIsEdit] = useState(false)
  const [isFav, setIsFav] = useState(character.isFav)

  useEffect(() => {
    if (characterId) {
      const retrievedCharacter = getCachedCharacterById(characterId)
      if (retrievedCharacter) {
        setCharacter(retrievedCharacter)
        setIsFav(retrievedCharacter.isFav)
      }
    }
  }, [characterId])

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
  }, [navigate, characterId])

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
              <ExtraInfo>{character.dateOfBirth}</ExtraInfo>
              <ExtraInfo>{character.gender}</ExtraInfo>
              <ExtraInfo>{character.house}</ExtraInfo>
              {isCharacter && (
                <ButtonContainer>
                  <Button onClick={handleToggleFavoritesCharacters}>
                    {isFav ? <FaHeart color="red" /> : <FaHeart />}
                  </Button>
                  <Button onClick={handleGoToEditCharacterForm}>
                    <FaPen />
                  </Button>
                  <Button onClick={() => onRemove(character.id)}>
                    <FaTrashAlt />
                  </Button>
                </ButtonContainer>
              )}
              {isStaff && (
                <ButtonContainer>
                  <Button onClick={handleToggleFavoritesStaff}>
                  {isFav ? <FaHeart color="red" /> : <FaHeart />}
                  </Button>
                  <Button onClick={handleGoToEditStaffForm}>
                    <FaPen />
                  </Button>
                  <Button onClick={() => onRemove(character.id)}>
                    <FaTrashAlt />
                  </Button>
                </ButtonContainer>
              )}
              {isStudent && (
                <ButtonContainer>
                  <Button onClick={handleToggleFavoritesStudents}>
                  {isFav ? <FaHeart color="red" /> : <FaHeart />}
                  </Button>
                  <Button onClick={handleGoToEditStudentForm}>
                    <FaPen />
                  </Button>
                  <Button onClick={() => onRemove(character.id)}>
                    <FaTrashAlt />
                  </Button>
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
              <ExtraInfo>{character.dateOfBirth}</ExtraInfo>
              <ExtraInfo>{character.gender}</ExtraInfo>
              <ExtraInfo>{character.house}</ExtraInfo>

              {isCharacter && (
                <ButtonContainer>
                  <Button onClick={handleToggleFavoritesCharacters}>
                  {isFav ? <FaHeart color="red" /> : <FaHeart />}
                  </Button>
                  <Button onClick={handleGoToEditCharacterForm}>
                    <FaPen />
                  </Button>
                  <Button onClick={() => onRemove(character.id)}>
                    <FaTrashAlt />
                  </Button>
                </ButtonContainer>
              )}
              {isStaff && (
                <ButtonContainer>
                  <Button onClick={handleToggleFavoritesStaff}>
                  {isFav ? <FaHeart color="red" /> : <FaHeart />}
                  </Button>
                  <Button onClick={handleGoToEditStaffForm}>
                    <FaPen />
                  </Button>
                  <Button onClick={() => onRemove(character.id)}>
                    <FaTrashAlt />
                  </Button>
                </ButtonContainer>
              )}
              {isStudent && (
                <ButtonContainer>
                  <Button onClick={handleToggleFavoritesStudents}>
                  {isFav ? <FaHeart color="red" /> : <FaHeart />}
                  </Button>
                  <Button onClick={handleGoToEditStudentForm}>
                    <FaPen />
                  </Button>
                  <Button onClick={() => onRemove(character.id)}>
                    <FaTrashAlt />
                  </Button>
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
