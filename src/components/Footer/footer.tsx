import { FC } from 'react'
import { FooterContainer, FooterContent, FooterText } from './footerStyles'

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>© 2023 Harry Potter </FooterText>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
