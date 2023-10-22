import { Typography } from '@mui/material'

import { useUser } from '../hooks'
import { AppLayout } from '../layouts'

export const ProfilePage = () => {
  const user = useUser()

  return (
    <AppLayout title="Profile">
      <Typography variant="h2">Hello, {user?.username}</Typography>
    </AppLayout>
  )
}
