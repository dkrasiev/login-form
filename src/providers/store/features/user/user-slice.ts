import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from './models/user'
import { UserState } from './models/user-state'

const initialState: UserState = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (_state, action: PayloadAction<User>) => {
      return action.payload
    },
    logout: () => {
      return {}
    },
  },
})
