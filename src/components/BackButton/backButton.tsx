import { FC, memo } from 'react'
import { useLogic } from './logic'
import { Button } from './backButtonStyles'

const BackButton: FC = () => {
  const { goBack } = useLogic()
  return <Button onClick={goBack}>U+219x</Button>
}

export default memo(BackButton)
