import { Container, Stack, Typography } from '@mui/material'
import { PropsWithChildren } from 'react'

import { Header } from '../components/Header'
import { AppRoute } from '../providers/router'

type AppLayoutProps = PropsWithChildren<{
  title?: string
}>

export const AppLayout = ({ children, title }: AppLayoutProps) => {
  return (
    <>
      <Header
        component="header"
        routes={{
          home: AppRoute.HOME,
          login: AppRoute.LOGIN,
          profile: AppRoute.PROFILE,
        }}
      />

      <Stack component="main" sx={{ mt: 16 }}>
        <Container maxWidth="md">
          {title && (
            <Typography variant="h1" sx={{ mb: 4 }}>
              {title}
            </Typography>
          )}
          {children}
        </Container>
      </Stack>
    </>
  )
}
