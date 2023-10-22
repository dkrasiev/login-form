import { User } from '../../models/user'

type UserStateStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected'

export type UserState = {
  status: UserStateStatus
  error?: string

  user?: User
}
