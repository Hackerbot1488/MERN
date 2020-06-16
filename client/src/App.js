import React from 'react'
import 'materialize-css'
import { useRoutes } from './routes'
import {BrowserRouter} from 'react-router-dom'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { Nav } from './components/Nav'
import { Loader } from './components/Loader'
function App() {
  const { login, logout, token, userId, ready} = useAuth()
  const isAuth = !!token
  const routes = useRoutes(isAuth)
  if (!ready) {
    return <Loader />
  }
  return (
    <AuthContext.Provider value={{
      login, logout, token, userId, isAuth
    }}>
      <BrowserRouter>
        {isAuth && <Nav />}
        <div className="container white-text">
          {routes}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
