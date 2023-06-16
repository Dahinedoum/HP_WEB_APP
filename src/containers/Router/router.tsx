import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from '../../views/Auth/Login/login'
import Signup from '../../views/Auth/Signup/signup'
import Landing from '../../views/Landing/landing'
import Profile from '../../views/Profile/profile'
import NewCharacter from '../../views/CreateCharacter/createCharacter'
import NewStudent from '../../views/CreateStudent/createStudent'
import NewSpell from '../../views/CreateSpell/createSpell'
import NewStaff from '../../views/CreateStaff/createStaff'
import AllCharacters from '../../views/AllCharacters/allCharacters'
import Students from '../../views/Students/students'
import Staff from '../../views/Staff/staff'
import Spells from '../../views/Spells/spells'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create/character" element={<NewCharacter />} />
        <Route path="/create/student" element={<NewStudent />} />
        <Route path="/create/spell" element={<NewSpell />} />
        <Route path="/create/staff" element={<NewStaff />} />
        <Route path="/characters" element={<AllCharacters />} />
        <Route path="/students" element={<Students />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/spells" element={<Spells />} />
        {/* <Route path="/*" element={<Navigate replace to="/login" />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
