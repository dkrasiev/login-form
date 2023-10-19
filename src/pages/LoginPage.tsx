import { Card, CardContent } from '@mui/material'

import LoginForm from '../widgets/LoginForm'

export default function LoginPage() {
  const handleLoginFormSubmit = (username: string, password: string) => {
    console.log('auth', username, password)
  }

  return (
    <>
      <Card>
        <CardContent>
          <LoginForm onSubmit={handleLoginFormSubmit}></LoginForm>
        </CardContent>
      </Card>
      {}
    </>
  )
}
