import { Link as UILink } from '@mui/material'
import { ReactNode } from 'react'
import { Link as RouterLink } from 'react-router-dom'

type LinkProps = {
  children: ReactNode
  to: string
}

export default function Link({ children, to }: LinkProps) {
  return (
    <UILink component={RouterLink} to={to}>
      {children}
    </UILink>
  )
}
