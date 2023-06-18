import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Landing from '../../../views/Landing/landing'
import Profile from '../../../views/Profile/profile'
import NewCharacter from '../../../views/CreateCharacter/createCharacter'
import NewStudent from '../../../views/CreateStudent/createStudent'
import NewSpell from '../../../views/CreateSpell/createSpell'
import NewStaff from '../../../views/CreateStaff/createStaff'
import AllCharacters from '../../../views/AllCharacters/allCharacters'
import Students from '../../../views/Students/students'
import Staff from '../../../views/Staff/staff'
import Spells from '../../../views/Spells/spells'
import type { Props } from './types'

export const PrivateRoutes: FC<Props> = ({ onLogout }) => {
  return (
    <Routes>
      <Route path="/landing" element={<Landing onLogout={onLogout} />} />
      <Route path="/profile" element={<Profile onLogout={onLogout} />} />
      <Route
        path="/characters"
        element={<AllCharacters onLogout={onLogout} />}
      />
      <Route path="/students" element={<Students onLogout={onLogout} />} />
      <Route path="/staff" element={<Staff onLogout={onLogout} />} />
      <Route path="/spells" element={<Spells onLogout={onLogout} />} />
      <Route path="/create/character" element={<NewCharacter />} />
      <Route path="/create/student" element={<NewStudent />} />
      <Route path="/create/spell" element={<NewSpell />} />
      <Route path="/create/staff" element={<NewStaff />} />
      <Route path="/*" element={<Navigate replace to="/landing" />} />
    </Routes>
  )
}
