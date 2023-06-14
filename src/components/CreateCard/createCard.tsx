import { FC, useCallback, memo } from 'react'
import { Formik } from 'formik'
import { validationNewCardSchema, initialValues } from './constants'
import { Props } from './createCardTypes'
import { uuidv4 } from '@firebase/util'
import {
  Button,
  Input,
  InputController,
  InputError,
  Label,
} from './createCardStyles'

const NewCard: FC<Props> = ({}) => {
  const handleOnSubmit = useCallback((values: any) => {
    const newChar = {
      ...values,
      id: uuidv4(),
      status: 'active',
      isFav: false,
    }
  }, [])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationNewCardSchema}
      onSubmit={handleOnSubmit}
      class
    >
      {({ handleSubmit, errors, handleChange }) => (
        <div className="cardContainer">
          <form onSubmit={handleSubmit} className="cardContent">
            <InputController>
              <Label>Date Of Birth</Label>
              <Input name="dateOfBirth" onChange={handleChange} />
              {errors?.dateOfBirth && (
                <InputError>{errors.dateOfBirth}</InputError>
              )}
            </InputController>

            <InputController>
              <Label>Gender</Label>
              <Input name="gender" onChange={handleChange} />
              {errors?.gender && <InputError>{errors.gender}</InputError>}
            </InputController>

            <InputController>
              <Label>hogwartsStudent</Label>
              <Input name="hogwartsStudent" onChange={handleChange} />
              {errors?.hogwartsStudent && (
                <InputError>{errors.hogwartsStudent}</InputError>
              )}
            </InputController>

            <InputController>
              <Label>House</Label>
              <Input name="house" onChange={handleChange} />
              {errors?.house && <InputError>{errors.house}</InputError>}
            </InputController>

            <InputController>
              <Label>Alive</Label>
              <Input name="alive" onChange={handleChange} />
              {errors?.alive && <InputError>{errors.alive}</InputError>}
            </InputController>

            <Button type="submit">Add</Button>
          </form>
        </div>
      )}
    </Formik>
  )
}

export default memo(NewCard)
