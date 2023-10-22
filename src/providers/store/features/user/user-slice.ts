import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from './models/user'
import { UserState } from './models/user-state'

const getInitialState = (): UserState => {
  const user = localStorage.getItem('user')

  if (user) {
    return JSON.parse(user)
  }

  return {}
}

const initialState = getInitialState()

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = undefined
    },
  },
})

export const { login, logout } = userSlice.actions
