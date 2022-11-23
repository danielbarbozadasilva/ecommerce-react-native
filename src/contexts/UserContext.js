import React, { createContext, useReducer } from 'react'
import { initialState, userReducers } from '../store/auth/auth.reducer'

export const UserContext = createContext()
export default ({ children }) => {
  const [state, dispatch] = useReducer(userReducers, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}
