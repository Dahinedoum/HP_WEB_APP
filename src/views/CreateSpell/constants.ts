import { object, string } from 'yup'

export const initialValues = {
  name: '',
  description: '',
}

export const validationSchema = object({
  name: string().required('Please enter a valid date'),
  description: string().required('Please enter a valid description'),
})
