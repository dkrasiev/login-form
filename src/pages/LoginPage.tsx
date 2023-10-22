import { Alert, AlertTitle, Paper, Stack } from '@mui/material'

import { useUserGuard } from '../hooks/use-user-guard'
import { AppLayout } from '../layouts'
import { login } from '../modules/user'
import { AppRoute } from '../providers/router'
import { useAppDispatch, useAppSelector } from '../providers/store'
import { LoginForm } from '../widgets/LoginForm'

export const LoginPage = () => {
  useUserGuard((user) => Boolean(user), AppRoute.PROFILE)

  const dispatch = useAppDispatch()

  const userState = useAppSelector((state) => state.user)

  const isLoading = userState.status === 'pending'
  const error = userState.error

  const handleLoginFormSubmit = (username: string, password: string) => {
    dispatch(login({ username, password }))
  }

  return (
    <AppLayout title="Login">
      <Paper elevation={4}>
        <Stack p={4}>
          <LoginForm
            onSubmit={handleLoginFormSubmit}
            isLoading={isLoading}
          ></LoginForm>

          {error && (
            <Alert severity="error">
              <AlertTitle>Authorization error</AlertTitle>
              {error}
            </Alert>
          )}
        </Stack>
      </Paper>
    </AppLayout>
  )
}
