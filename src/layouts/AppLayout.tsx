import { Container } from '@mui/material'
import { ReactNode } from 'react'

import { ROUTES } from '../providers/router'
import Header from '../widgets/Header'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Header routes={ROUTES} />

      <main>{children}</main>

      <footer></footer>
    </Container>
  )
}
