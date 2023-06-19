import { FC, memo } from 'react'
import { Formik } from 'formik'
import { validationSchema, initialValues } from './constants'
import BackButton from '../../components/BackButton/backButton'
import Footer from '../../components/Footer/footer'
import useLogic from './logic'
import {
  Button,
  Container,
  Form,
  FormContent,
  Input,
  InputController,
  Label,
  Title,
} from './createStaffStyles'

const NewStaff: FC = () => {
  const { handleAddNewStaff } = useLogic()
  return (
    <Container>
      <BackButton />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleAddNewStaff}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit} className="cardContent">
            <FormContent>
              <Title>Create your own Staff</Title>
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
                <Button type="submit">Add Staff</Button>
              </InputController>
            </FormContent>
          </Form>
        )}
      </Formik>
      <Footer />
    </Container>
  )
}

export default memo(NewStaff)
