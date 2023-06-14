import { object, string } from 'yup'

export const initialValues = {
    dateOfBirth: '',
    gender: '',
    hogwartsStudent: '',
    house: '',
    alive: '',
}

export const validationNewCardSchema = object({
    dateOfBirth: string().required('Please enter a valid date'),
    gender: string().required('required'),
    hogwartsStudent: string().required('required'),
    house: string().required('required'),
    alive: string().required('required'),

})