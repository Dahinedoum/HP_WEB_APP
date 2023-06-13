import { object, string } from 'yup'
export const InitialValues = {
  email: '',
  password: '',
}

export const ValidationSchema = object({
  email: string()
    .email('not a valid email')
    .required('email is a required field'),
  password: string().required('password is a required field'),
})
