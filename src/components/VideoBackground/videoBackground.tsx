import { FC, memo } from 'react'
import { Container, Video, Source } from './videoBackgroundStyles'
import type { Props } from './videoBackgroundTypes'

const VideoBackground: FC<Props> = ({ videoSrc }) => {
  return (
    <Container>
      <Video autoPlay loop muted>
        <Source src={videoSrc} type="video/mp4" />
      </Video>
    </Container>
  )
}

export default memo(VideoBackground)
