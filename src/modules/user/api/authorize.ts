import { User } from '../models/user'

export const authorize = (
  username: string,
  password: string,
): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === '123456') {
        resolve({
          username,
        })
      } else {
        reject(new Response('Unauthorized', { status: 401 }))
      }
    }, 2000)
  })
}
