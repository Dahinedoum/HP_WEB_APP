import { FC, memo } from 'react'
import { Img } from './imageBackgroundStyles'
import type { Props } from './imageBackgroundTypes'

const ImageBackground: FC<Props> = ({ src, alt }) => {
  return <Img src={src} alt={alt} />
}

export default memo(ImageBackground)
