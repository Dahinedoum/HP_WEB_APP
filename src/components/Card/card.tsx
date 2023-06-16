import { FC, memo, useState, useCallback } from 'react'
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
import { toggleFavorites } from '../../services/storage/characters'
import Button from '../Button/button'

const Card: FC<Props> = ({ character }) => {
  const [isFav, setIsFav] = useState(character.isFav)

  const handleToggleFavorites = useCallback(() => {
    if (character) {
      toggleFavorites(character)
      setIsFav(!isFav)
    }
  }, [isFav, character])

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
          </FooterContent>
        </Footer>
      </Content>
    </Container>
  )
}
export default memo(Card)
