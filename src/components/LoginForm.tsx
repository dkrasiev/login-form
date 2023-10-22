import { LoadingButton } from '@mui/lab'
import { Stack, TextField } from '@mui/material'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'

type LoginFormProps = {
  onSubmit?: (username: string, password: string) => void
  isLoading?: boolean
}

export const LoginForm = ({ onSubmit, isLoading }: LoginFormProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    if (onSubmit) {
      onSubmit(username, password)
    }
  }

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      direction="column"
      spacing={2}
    >
      <TextField
        value={username}
        onChange={handleUsernameChange}
        required
        name="username"
        placeholder="Username"
      />
      <TextField
        value={password}
        onChange={handlePasswordChange}
        required
        name="password"
        placeholder="Password"
        type="password"
      />
      <LoadingButton loading={isLoading} type="submit">Login</LoadingButton>
    </Stack>
  )
}
