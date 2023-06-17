import { Character } from '../../models/characters'

export const HP_STUDENTS_KEY = 'hpStudents'
export const STUDENTS_FAV = 'studentsFav'

export const getCachedHarryPotterStudents = (): Character[] => {
  const response = window.localStorage.getItem(HP_STUDENTS_KEY)
  return response ? JSON.parse(response) : []
}

export const setCachedHarryPotterStudents = (students: Character[]) => {
  window.localStorage.setItem(HP_STUDENTS_KEY, JSON.stringify(students))
}

export const addNewStudent = (data: StudentsInput) => {
  const studentList = getCachedHarryPotterStudents()
  setCachedHarryPotterStudents([...studentList, data as Character])
}

export type StudentsInput = {
  name: string
  dateOfBirth: string
  gender: string
  house: string
}

export const getFavoritesStudents = (): Character[] => {
  const response = window.localStorage.getItem(STUDENTS_FAV)
  return response ? JSON.parse(response) : []
}

export const setFavoritesStudents = (favStudents: Character[]) => {
  window.localStorage.setItem(STUDENTS_FAV, JSON.stringify(favStudents))
}

export const toggleFavoritesStudents = (student: Character) => {
  const currentFavs = getFavoritesStudents()
  const hasFav = currentFavs.find((favStudent) => student.id === favStudent.id)
  if (hasFav) {
    const newList = currentFavs.filter(
      (favStudent) => student.id !== favStudent.id
    )
    setFavoritesStudents(newList)
  } else {
    setFavoritesStudents([...currentFavs, student])
  }
}

export const resetStudentsCache = () => {
  window.localStorage.removeItem(HP_STUDENTS_KEY)
}
