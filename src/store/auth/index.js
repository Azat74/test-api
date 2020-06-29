import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
    id: '',
    token: '',
    error: '',
  },
  reducers: {
    login: () => {},
    setLogin: (state, payload) => {
      const { id, token } = payload

      return {
        ...state,
        auth: true,
        error: '',
        id,
        token,
      }
    },
    setError: (state, payload) => {
      const { error } = payload.payload

      return {
        ...state,
        error: error,
      }
    },
    logout: () => {},
  },
})

export const { login, logout, setLogin, setError } = authSlice.actions

export const selectAuth = (state) => state.auth.auth
export const selectError = (state) => state.auth.error

export default authSlice.reducer
