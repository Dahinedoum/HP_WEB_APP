import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../views/Auth/Login/login'
import Signup from '../../views/Auth/Signup/signup'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
