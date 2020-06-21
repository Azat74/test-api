import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
  },
  reducers: {
    login: state => {
      state.auth = true
    },
    logout: state => {
      state.auth = false
    },
  },
})

export const { login, logout } = authSlice.actions

export const selectAuth = state => state.auth.auth

export default authSlice.reducer
