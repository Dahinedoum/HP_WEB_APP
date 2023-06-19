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
} from './createSpellStyles'

const NewCard: FC = () => {
  const { handleAddNewSpell } = useLogic()
  return (
    <Container>
      <ButtonContainer>
        <BackButton />
      </ButtonContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleAddNewSpell}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit} className="cardContent">
            <FormContent>
              <Title>Create your own Spell</Title>
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
                <Label>Description</Label>
                <Input
                  type="text"
                  name="description"
                  onChange={handleChange}
                  value={values.description}
                />
              </InputController>

              <InputController>
                <Button type="submit">Add Spell</Button>
              </InputController>
            </FormContent>
          </Form>
        )}
      </Formik>
      <Footer />
    </Container>
  )
}

export default memo(NewCard)
