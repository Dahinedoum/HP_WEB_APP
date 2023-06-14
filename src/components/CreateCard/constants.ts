import * as Yup from 'yup'

export const initialValues = {
    dateOfBirth: '',
    gender: '',
    hogwartsStudent: '',
    house: '',
    alive: '',
}

export const validationNewCardSchema = Yup.object().shape({
    dateOfBirth: Yup.string().required('Please enter a valid date'),
    gender: Yup.string().required('required'),
    hogwartsStudent: Yup.string().required('required'),
    house: Yup.string().required('required'),
    alive: Yup.string().required('required'),

})