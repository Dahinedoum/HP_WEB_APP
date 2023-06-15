import { EditCharacterInput } from '../../models/characters'

export type Props = {
  initialValues: EditCharacterInput
  id: string
  onEditComplete: (values: EditCharacterInput) => void
}
