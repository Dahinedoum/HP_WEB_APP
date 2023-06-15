export const USER_INFO_KEY = 'userInfo'

export const getUserInfo = () => {
  const response = window.localStorage.getItem(USER_INFO_KEY)
  return response ? JSON.parse(response) : null
}

export const setUserInfo = (userInfo: any) => {
  window.localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo))
}

export const resetUserInfo = () => {
  window.localStorage.removeItem(USER_INFO_KEY)
}
