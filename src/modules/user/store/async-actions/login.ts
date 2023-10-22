import { createAsyncThunk } from '@reduxjs/toolkit'

import { authorize } from '../../mock/api/authorize'

type AuthorizeUserProps = {
  username: string
  password: string
}

export const login = createAsyncThunk(
  'user/login',
  async (
    { username, password }: AuthorizeUserProps,
    { rejectWithValue, fulfillWithValue },
  ) => {
    try {
      const user = await authorize(username, password)

      return fulfillWithValue(user)
    } catch (e) {
      if (e instanceof Response) {
        if (e.status === 401) {
          return rejectWithValue({
            message: 'Wrong username or password',
          })
        }
      }

      return rejectWithValue({
        message: 'Unknown error',
      })
    }
  },
)
