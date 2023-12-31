import { FC, useCallback, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getToken } from '../../services/storage/token'
import { PrivateRoutes } from './PrivateRoutes/PrivateRoutes'
import { PublicRoutes } from './PublicRoutes/PublicRoutes'
import Loading from '../../components/Loading/loading'

const Router: FC = () => {
  const token = getToken()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsAuthenticated(!!token)
  }, [token])

  const recreateLogin = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const recreateLogOut = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route
            path="/*"
            element={<PrivateRoutes onLogout={recreateLogOut} />}
          />
        ) : (
          <Route
            path="/*"
            element={
              <PublicRoutes onLogin={recreateLogin} onSignup={recreateLogin} />
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
