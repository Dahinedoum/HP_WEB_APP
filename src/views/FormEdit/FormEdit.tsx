import { FC, memo } from 'react'
import { Formik } from 'formik'
import { ValidationSchema } from './constants'
import useLogic from './logic'
import { Props } from './formEditTypes'
import {
  Button,
  Container,
  Form,
  Input,
  InputController,
  Label,
} from './formEditStyles'

const FormDetails: FC<Props> = ({ id, initialValues, onEditComplete }) => {
  const { handleEdit } = useLogic(id, onEditComplete)

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleEdit}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <InputController>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
            </InputController>
            <InputController>
              <Label>House</Label>
              <Input
                type="text"
                name="house"
                onChange={handleChange}
                value={values.house}
              />
            </InputController>
            <InputController>
              <Label>Gender</Label>
              <Input
                type="text"
                name="gender"
                onChange={handleChange}
                value={values.gender}
              />
            </InputController>
            <InputController>
              <Label>Date of Birth</Label>
              <Input
                type="text"
                name="dateOfBirth"
                onChange={handleChange}
                value={values.dateOfBirth}
              />
            </InputController>
            <Button type="submit">Edit Character</Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default memo(FormDetails)
