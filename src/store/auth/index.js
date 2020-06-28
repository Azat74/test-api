import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
    id: '',
    token: '',
  },
  reducers: {
    login: () => {},
    setLogin: (state, payload) => {
      const { id, token } = payload

      console.log('setLogin')

      return {
        ...state,
        auth: true,
        id,
        token
      }
    },
    logout: () => {},
  },
})

export const { login, logout, setLogin } = authSlice.actions

export const selectAuth = (state) => state.auth.auth

export default authSlice.reducer
