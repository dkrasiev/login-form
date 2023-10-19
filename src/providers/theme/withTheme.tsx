import { ThemeProvider } from '@mui/material'
import { ReactNode } from 'react'

import { theme } from './theme'

export const withTheme = (cmp: ReactNode) => (
  <ThemeProvider theme={theme}>{cmp}</ThemeProvider>
)
