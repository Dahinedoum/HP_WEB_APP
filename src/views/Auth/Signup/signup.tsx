import { FC, memo } from 'react'
import { Formik } from 'formik'
import {
  Button,
  Container,
  Form,
  FormContent,
  Info,
  Input,
  InputController,
  InputError,
  Label,
  Link,
  Title,
} from './signupStyles'
import { InitialValues, ValidationSchema } from './constants'
import useLogic from './logic'
import type { Props } from './signupTypes'

const Signup: FC<Props> = ({ onSignup }) => {
  const { handleOnSubmit } = useLogic(onSignup)
  return (
    <Container>
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleOnSubmit}
      >
        {({ errors, handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormContent>
              <Title>Create an account</Title>
              <InputController>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="displayName"
                  onChange={handleChange}
                  value={values.displayName}
                />
                {errors?.displayName && (
                  <InputError>{errors.displayName}</InputError>
                )}
              </InputController>
              <InputController>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                {errors?.email && <InputError>{errors.email}</InputError>}
              </InputController>
              <InputController>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
                {errors?.password && <InputError>{errors.password}</InputError>}
              </InputController>
              <Button type="submit">Register</Button>
              <Info>
                Already have an account? <Link to="/login">Log in now</Link>
              </Info>
            </FormContent>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default memo(Signup)
