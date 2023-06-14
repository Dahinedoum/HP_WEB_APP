import { FC, memo } from 'react'
import { Img } from './imageStyles'
import type { Props } from './imageTypes'

const Image: FC<Props> = ({ src, alt }) => {
  return <Img src={src} alt={alt} />
}

export default memo(Image)
