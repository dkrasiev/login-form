import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const withRouter = (children: ReactNode) => (
  <BrowserRouter>{children}</BrowserRouter>
)
