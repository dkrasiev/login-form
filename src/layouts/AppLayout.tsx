import { Container, Stack } from '@mui/material'
import { ReactNode } from 'react'

import { ROUTES } from '../providers/router'
import { Header } from '../widgets/Header'

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header
        component="header"
        routes={{
          home: ROUTES.home.path,
          login: ROUTES.login.path,
          profile: ROUTES.profile.path,
        }}
      />

      <Stack component="main" sx={{ mt: 16 }}>
        <Container maxWidth="md">{children}</Container>
      </Stack>
    </>
  )
}
