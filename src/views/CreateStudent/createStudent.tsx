import { FC, memo } from 'react'
import {
  Button,
  Container,
  Form,
  FormContent,
  Input,
  InputController,
  Label,
  Title,
} from './createStudentStyles'

import { Formik } from 'formik'
import BackButton from '../../components/BackButton/backButton'
import { validationNewCardSchema, initialValues } from './constants'
import Footer from '../../components/Footer/footer'

import useLogic from './logic'

const NewStudent: FC = () => {
  const { handleAddNewStudent } = useLogic()
  return (
    <Container>
      <BackButton />
      <Formik
        initialValues={initialValues}
        validationSchema={validationNewCardSchema}
        onSubmit={handleAddNewStudent}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit} className="cardContent">
            <FormContent>
              <Title>Create your own Student</Title>
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
                <Label>Date Of Birth</Label>
                <Input
                  type="number"
                  name="dateOfBirth"
                  onChange={handleChange}
                  value={values.dateOfBirth}
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
                <Label>House</Label>
                <Input
                  type="text"
                  name="house"
                  onChange={handleChange}
                  value={values.house}
                />
              </InputController>
              <InputController>
                <Button type="submit">Add Student</Button>
              </InputController>
            </FormContent>
          </Form>
        )}
      </Formik>
      <Footer />
    </Container>
  )
}

export default memo(NewStudent)
