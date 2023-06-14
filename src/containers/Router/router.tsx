import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from '../../views/Auth/Login/login'
import Signup from '../../views/Auth/Signup/signup'
import Landing from '../../views/Landing/landing'
import Profile from '../../views/Profile/profile'
import AllCharacters from '../../views/AllCharacters/allCharacters'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/characters" element={<AllCharacters />} />
        <Route path="/*" element={<Navigate replace to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
