import { FC } from 'react'
import type { Props } from './buttonTypes'
import { CustomButton } from './buttonStyles'

export const Button: FC<Props> = ({ children, onClick }) => {
  return <CustomButton onClick={onClick}>{children}</CustomButton>
}

export default Button
