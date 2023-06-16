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
} from './createSpellStyles'

import { Formik } from 'formik'
import BackButton from '../../components/BackButton/backButton'
import { validationNewCardSchema, initialValues } from './constants'
import Footer from '../../components/Footer/footer'

import useLogic from './logic'

const NewCard: FC = () => {
  const { handleAddNewSpell } = useLogic()
  return (
    <Container>
      <BackButton />
      <Formik
        initialValues={initialValues}
        validationSchema={validationNewCardSchema}
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
