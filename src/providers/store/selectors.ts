import { AppState } from './types'

export const selectUser = (state: AppState) => state.user.user
