import { Button, Input, Stack, Typography } from '@mui/material'
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

  const button = isLoading ? (
    <Button disabled>Logging in...</Button>
  ) : (
    <Button type="submit">Login</Button>
  )

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing={2}>
        <Typography variant="h3">Login form</Typography>
        <Input
          value={username}
          onChange={handleUsernameChange}
          required
          name="username"
          placeholder="Username"
        />
        <Input
          value={password}
          onChange={handlePasswordChange}
          required
          name="password"
          placeholder="Password"
          type="password"
        />
        {button}
      </Stack>
    </form>
  )
}
