import { FC, memo } from 'react'
import { Formik } from 'formik'
import { validationSchema, initialValues } from './constants'
import BackButton from '../../components/BackButton/backButton'
import Footer from '../../components/Footer/footer'
import useLogic from './logic'
import {
  Button,
  ButtonContainer,
  Container,
  Form,
  FormContent,
  Input,
  InputController,
  Label,
  Title,
} from './createCharacterStyles'

const NewCharacter: FC = () => {
  const { handleAddNewCharacter } = useLogic()
  return (
    <Container>
      <ButtonContainer>
        <BackButton />
      </ButtonContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleAddNewCharacter}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit} className="cardContent">
            <FormContent>
              <Title>Create your own Character</Title>
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
                  type="text"
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
                <Button type="submit">Add Character</Button>
              </InputController>
            </FormContent>
          </Form>
        )}
      </Formik>
      <Footer />
    </Container>
  )
}

export default memo(NewCharacter)
