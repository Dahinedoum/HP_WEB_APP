import { FC, memo } from 'react'
import type { Props } from './imageTypes'
import { Img } from './imageStyles'

const Image: FC<Props> = ({ src, alt }) => {
  return <Img src={src} alt={alt} />
}

export default memo(Image)
