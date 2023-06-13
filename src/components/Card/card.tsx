import { FC, memo } from 'react'
import { Props } from './cardTypes'
import {
  Container,
  Content,
  ExtraInfo,
  Footer,
  FooterContent,
  Header,
} from './cardStyles'

const Card: FC<Props> = ({ name, wand, onClick }) => {
  return (
    <Container>
      <Content>
        <Header>{name}</Header>
        <Footer>
          <FooterContent>
            <ExtraInfo>{wand}</ExtraInfo>
          </FooterContent>
        </Footer>
      </Content>
    </Container>
  )
}

export default memo(Card)
