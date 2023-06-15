import { object, string } from 'yup'

export const ValidationSchema = object({
  name: string().required(),
  house: string().required(),
  gender: string().required(),
  dateOfBirth: string().required(),
})
