import { Button, Input, Stack, Typography } from '@mui/material'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'

type LoginFormProps = {
  onSubmit?: (username: string, password: string) => void
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
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
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing={2} p={2}>
        <Typography variant="h3">Login form</Typography>
        <Input
          value={username}
          onChange={handleUsernameChange}
          name="username"
          placeholder="Username"
        />
        <Input
          value={password}
          onChange={handlePasswordChange}
          name="password"
          placeholder="Password"
          type="password"
        />
        <Button type="submit">Login</Button>
      </Stack>
    </form>
  )
}
