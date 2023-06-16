import { FC, memo, useState, useCallback, useEffect } from 'react'
import { Props } from './cardTypes'
import {
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
  toggleFavorites,
} from '../../services/storage/characters'
import Button from '../Button/button'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Character, EditCharacterInput } from '../../models/characters'
import FormEdit from '../../views/FormEdit/FormEdit'

const Card: FC<Props> = ({
  character,
  isCharacter = false,
  isStudent = false,
  isStaff = false,
}) => {
  const { characterId, studentId, staffId } = useParams()
  const [queryData] = useSearchParams()
  const navigate = useNavigate()
  const [hpCharacter, setCharacter] = useState<Character | null>(null)
  const [isEdit, setIsEdit] = useState(false)
  const [isFav, setIsFav] = useState(character.isFav)

  useEffect(() => {
    setIsEdit(!!queryData.get('edit'))
  }, [queryData])

  useEffect(() => {
    if (characterId) {
      const retrievedCharacter = getCachedCharacterById(characterId)
      if (retrievedCharacter) {
        setCharacter(retrievedCharacter)
        setIsFav(retrievedCharacter.isFav)
      }
    }
  }, [characterId])

  const handleToggleFavorites = useCallback(() => {
    if (character) {
      toggleFavorites(character)
      setIsFav(!isFav)
    }
  }, [isFav, character])

  const handleGoToEditCharacterForm = useCallback(() => {
    navigate(`/characters/${characterId}?edit=true`)
  }, [navigate])

  const handleGoToEditStudentForm = useCallback(() => {
    navigate(`/students/${studentId}?edit=true`)
  }, [navigate])

  const handleGoToEditStaffForm = useCallback(() => {
    navigate(`/staff/${staffId}?edit=true`)
  }, [navigate])

  // const handleOnCompleteEdition = useCallback(
  //   (values: EditCharacterInput) => {
  //     const editedCharacter = {
  //       ...character,
  //       ...values,
  //     } as Character
  //     setCharacter(editedCharacter)
  //   },
  //   [character]
  // )

  // if (isEdit) {
  //   return (
  //     <FormEdit
  //       onEditComplete={handleOnCompleteEdition}
  //       id={hpCharacter.id}
  //       initialValues={{
  //         name: hpCharacter.name,
  //         dateOfBirth: hpCharacter.dateOfBirth,
  //         house: hpCharacter.house,
  //         image: hpCharacter.image,
  //         gender: hpCharacter.gender,
  //       }}
  //     />
  //   )
  // }

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
              <Button onClick={handleToggleFavorites}>
                {isFav ? 'Remove Fav' : 'Add Fav'}
              </Button>
              {isCharacter && (
                <Button onClick={handleGoToEditCharacterForm}>Edit</Button>
              )}
              {isStaff && (
                <Button onClick={handleGoToEditStaffForm}>Edit</Button>
              )}
              {isStudent && (
                <Button onClick={handleGoToEditStudentForm}>Edit</Button>
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
              <Button onClick={handleToggleFavorites}>
                {isFav ? 'Remove Fav' : 'Add Fav'}
              </Button>
              {isCharacter && (
                <Button onClick={handleGoToEditCharacterForm}>Edit</Button>
              )}
              {isStaff && (
                <Button onClick={handleGoToEditStaffForm}>Edit</Button>
              )}
              {isStudent && (
                <Button onClick={handleGoToEditStudentForm}>Edit</Button>
              )}
            </FooterContent>
          </Footer>
        </Content>
      </Container>
    )
  }
}
export default memo(Card)
