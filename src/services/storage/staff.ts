import { Character } from '../../models/characters'

export const HP_STAFF_KEY = 'hpStaff'

export const getCachedHarryPotterStaff = (): Character[] => {
  const response = window.localStorage.getItem(HP_STAFF_KEY)
  return response ? JSON.parse(response) : []
}

export const setCachedHarryPotterStaff = (staff: Character[]) => {
  window.localStorage.setItem(HP_STAFF_KEY, JSON.stringify(staff))
}

export const addNewStaff = (data: StaffInput) => {
  const staffList = getCachedHarryPotterStaff()
  setCachedHarryPotterStaff([...staffList, data as Character])
}

export type StaffInput = {
  name: string
  dateOfBirth: string
  gender: string
  house: string
}

export const resetStaffCache = () => {
  window.localStorage.removeItem(HP_STAFF_KEY)
}
