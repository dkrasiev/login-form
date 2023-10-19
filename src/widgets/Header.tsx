import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

import { Route } from '../providers/router/models/route'

export default function Header({ routes }: { routes: Route[] }) {
  return (
    <header>
      {routes.map((r) => (
        <Button key={r.path} component={Link} to={r.path}>
          {r.name}
        </Button>
      ))}
    </header>
  )
}
