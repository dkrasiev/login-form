import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { ElementType } from 'react'
import { Link as RouterLink } from 'react-router-dom'

type HeaderProps = {
  routes: {
    home: string
    login: string
    profile: string
  }
  component?: ElementType
}

export const Header = ({ routes, component }: HeaderProps) => {
  const loggedIn = true

  return (
    <Box sx={{ flexGrow: 1 }} component={component}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            component={RouterLink}
            to={routes.home}
            color="inherit"
            flexGrow={1}
            sx={{ textDecoration: 'none' }}
          >
            Home
          </Typography>

          {loggedIn ? (
            <Button color="inherit" component={RouterLink} to={routes.login}>
              <Typography>Login</Typography>
            </Button>
          ) : (
            <Button color="inherit" component={RouterLink} to={routes.profile}>
              <Typography>Profile</Typography>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
