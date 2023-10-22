import { Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import { Route } from '../providers/router/models/route'

export const NavBar = ({ routes }: { routes: Route[] }) => {
  return (
    <Stack direction="row" spacing={4}>
      {routes.map((r) => (
        <Button key={r.path} component={Link} to={r.path}>
          {r.name}
        </Button>
      ))}
    </Stack>
  )
}
