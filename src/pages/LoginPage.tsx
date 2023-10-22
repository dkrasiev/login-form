import { Paper, Stack } from '@mui/material'

import { AppLayout } from '../layouts'
import { LoginForm } from '../widgets/LoginForm'

export const LoginPage = () => {
  const handleLoginFormSubmit = (username: string, password: string) => {
    console.log('auth', username, password)
  }

  return (
    <AppLayout>
      <Paper elevation={4}>
        <Stack p={4}>
          <LoginForm onSubmit={handleLoginFormSubmit}></LoginForm>
        </Stack>
      </Paper>
      {}
    </AppLayout>
  )
}
