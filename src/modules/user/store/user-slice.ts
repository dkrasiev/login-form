import { createSlice, SerializedError } from '@reduxjs/toolkit'

import { User } from '../models/user'
import { login } from './async-actions/login'
import { UserState } from './models/user-state'

const getInitialState = (): UserState => {
  try {
    const user: User = JSON.parse(localStorage.getItem('user')!)

    return {
      user,
      status: 'idle',
    }
  } catch {
    return {
      status: 'idle',
    }
  }
}

const initialState = getInitialState()

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = undefined
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, () => {
        return {
          status: 'pending',
        }
      })
      .addCase(login.fulfilled, (_state, action) => {
        return {
          status: 'fulfilled',
          user: action.payload,
        }
      })
      .addCase(login.rejected, (_state, action) => {
        return {
          status: 'rejected',
          error: (action.payload as SerializedError).message,
        }
      })
  },
})
