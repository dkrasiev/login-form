import { Paper, Stack } from '@mui/material'
import { useDispatch } from 'react-redux'

import { useUserGuard } from '../hooks/use-user-guard'
import { AppLayout } from '../layouts'
import { login } from '../providers/store'
import { LoginForm } from '../widgets/LoginForm'

export const LoginPage = () => {
  const dispatch = useDispatch()

  useUserGuard((user) => Boolean(user))

  const handleLoginFormSubmit = (username: string, password: string) => {
    console.log(username, password)
    if (username === 'admin' && password === '123456') {
      dispatch(login({ username }))
    }
  }

  return (
    <AppLayout title="Login">
      <Paper elevation={4}>
        <Stack p={4}>
          <LoginForm onSubmit={handleLoginFormSubmit}></LoginForm>
        </Stack>
      </Paper>
    </AppLayout>
  )
}
