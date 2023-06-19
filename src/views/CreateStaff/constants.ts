import { object, string } from 'yup'

export const initialValues = {
  name: '',
  dateOfBirth: '',
  gender: '',
  house: '',
}

export const validationSchema = object({
  name: string().required('Please enter a valid date'),
  dateOfBirth: string().required('Please enter a valid date'),
  gender: string().required('required'),
  house: string().required('required'),
})
