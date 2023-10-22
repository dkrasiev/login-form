import { User } from '../../models/user'
import { MOCK_USERS_CREDENTIALS } from '../mock-user-credentials'

export const authorize = (
  username: string,
  password: string,
): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        MOCK_USERS_CREDENTIALS.some(
          (u) => u.username === username && u.password === password,
        )
      ) {
        resolve({
          username,
        })
      } else {
        reject(new Response('Unauthorized', { status: 401 }))
      }
    }, 2000)
  })
}
