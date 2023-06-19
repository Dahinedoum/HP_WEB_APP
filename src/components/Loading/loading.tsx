import { FC, memo } from 'react'
import { Container, Gif } from './loadingStyles'

const Loading: FC = () => {
  return (
    <Container>
      <Gif />
    </Container>
  )
}

export default memo(Loading)
