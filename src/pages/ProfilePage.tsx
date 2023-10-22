import { Typography } from '@mui/material'

import { useUser, useUserGuard } from '../hooks'
import { AppLayout } from '../layouts'

export const ProfilePage = () => {
  const user = useUser()

  useUserGuard()

  return (
    <AppLayout title="Profile">
      <Typography variant="h2">Hello, {user?.username}</Typography>
    </AppLayout>
  )
}
