import { configureStore } from '@reduxjs/toolkit'

import { userSlice } from '../../modules/user'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})

store.subscribe(() => {
  localStorage.setItem('user', JSON.stringify(store.getState().user.user))
})
