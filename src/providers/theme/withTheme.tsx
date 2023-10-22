import { ThemeProvider } from '@mui/material'
import { ReactNode } from 'react'

import { theme } from './theme'

export const withTheme = (children: ReactNode) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
