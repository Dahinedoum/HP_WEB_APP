import { Character } from '../../models/characters'

export const HP_STUDENTS_KEY = 'hpStudents'

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

export const resetStudentsCache = () => {
  window.localStorage.removeItem(HP_STUDENTS_KEY)
}
