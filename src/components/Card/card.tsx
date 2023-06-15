import { FC, memo } from 'react'
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

const Card: FC<Props> = ({ character, onClick }) => {
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
          </FooterContent>
        </Footer>
      </Content>
    </Container>
  )
}

export default memo(Card)
