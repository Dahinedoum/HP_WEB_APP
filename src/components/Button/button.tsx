import { FC } from 'react'
import type { Props } from './buttonTypes'
import { Boton } from './buttonStyles'

export const Button: FC<Props> = ({ children, onClick }) => {
  return <Boton onClick={onClick}>{children}</Boton>
}

export default Button
