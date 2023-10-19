import { Paper, Stack } from '@mui/material'

import { LoginForm } from '../widgets/LoginForm'

export const LoginPage = () => {
  const handleLoginFormSubmit = (username: string, password: string) => {
    console.log('auth', username, password)
  }

  return (
    <>
      <Paper elevation={4}>
        <Stack p={4}>
          <LoginForm onSubmit={handleLoginFormSubmit}></LoginForm>
        </Stack>
      </Paper>
      {}
    </>
  )
}
