import { FC, memo } from 'react'
import { Props } from './spellCardTypes'
import {
  Container,
  Content,
  ExtraInfo,
  Footer,
  FooterContent,
  Header,
  Image,
} from './spellCardStyles'

const SpellCard: FC<Props> = ({ spell, onClick }) => {
  return (
    <Container>
      <Content>
        <Header>{spell.name}</Header>
        <Image src="/spell.png" />
        <Footer>
          <FooterContent>
            <ExtraInfo>{spell.description}</ExtraInfo>
          </FooterContent>
        </Footer>
      </Content>
    </Container>
  )
}

export default memo(SpellCard)
