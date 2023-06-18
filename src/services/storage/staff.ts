import { Character } from '../../models/characters'
import { getUserInfo } from './user'

const HP_STAFF_KEY = 'hpStaff'
const STAFF_FAV = 'staffFav'

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

export const getFavoritesStaff = (): Character[] => {
  const userEmail = getUserInfo()
  const favUserKey = `${STAFF_FAV}-${userEmail.email}`
  const response = window.localStorage.getItem(favUserKey)
  return response ? JSON.parse(response) : []
}

export const setFavoritesStaff = (favStaff: Character[]) => {
  const userEmail = getUserInfo()
  const favUserKey = `${STAFF_FAV}-${userEmail.email}`
  window.localStorage.setItem(favUserKey, JSON.stringify(favStaff))
}

export const toggleFavoritesStaff = (staff: Character) => {
  const currentFavs = getFavoritesStaff()
  const hasFav = currentFavs.find((favStaff) => staff.id === favStaff.id)
  if (hasFav) {
    const newList = currentFavs.filter((favStaff) => staff.id !== favStaff.id)
    setFavoritesStaff(newList)
  } else {
    setFavoritesStaff([...currentFavs, staff])
  }
}

export const resetStaffCache = () => {
  window.localStorage.removeItem(HP_STAFF_KEY)
}
