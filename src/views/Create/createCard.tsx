import { FC, memo } from 'react'
import { Button, Input, InputController, Label } from './createCardStyles'

import { Formik } from 'formik'
import BackButton from '../../components/BackButton/backButton'
import { validationNewCardSchema, initialValues } from './constants'
import Footer from '../../components/Footer/footer'

import useLogic from '../../views/Create/logic'
import Header from '../../components/Header/header'

const NewCard: FC = () => {
  const { addNewCharacter } = useLogic()
  return (
    <>
      {/* <VideoBackground src="" /> */}

      <InputController>
        <b>Create your own Character</b>
      </InputController>

      <Formik
        initialValues={initialValues}
        validationSchema={validationNewCardSchema}
        onSubmit={addNewCharacter}
      >
        {({ handleSubmit, handleChange, values }) => (
          <div className="cardContainer">
            <form onSubmit={handleSubmit} className="cardContent">
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
                <Button type="submit">Add Character</Button>
              </InputController>
            </form>
          </div>
        )}
      </Formik>
      <BackButton />
      <Footer />
    </>
  )
}

export default memo(NewCard)
