import {
  Alert,
  AlertTitle,
  Card,
  CardContent,
  CardHeader,
  Stack,
} from '@mui/material'

import { LoginForm } from '../components/LoginForm'
import { AppLayout } from '../layouts'
import { login } from '../modules/user'
import { useAppDispatch, useAppSelector } from '../providers/store'

export const LoginPage = () => {
  const dispatch = useAppDispatch()

  const userState = useAppSelector((state) => state.user)

  const isLoading = userState.status === 'pending'
  const error = userState.error

  const handleLoginFormSubmit = (username: string, password: string) => {
    dispatch(login({ username, password }))
  }

  return (
    <AppLayout title="Login">
      <Stack spacing={4}>
        <Card>
          <CardHeader title="Login form" />
          <CardContent>
            <Stack spacing={2}>
              <LoginForm
                onSubmit={handleLoginFormSubmit}
                isLoading={isLoading}
              ></LoginForm>
            </Stack>
          </CardContent>
        </Card>

        {error && (
          <Alert severity="error">
            <AlertTitle>Authorization error</AlertTitle>
            {error}
          </Alert>
        )}
      </Stack>
    </AppLayout>
  )
}
