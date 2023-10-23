import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { ElementType } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { useUser } from '../hooks'
import { logout } from '../modules/user'
import { useAppDispatch } from '../providers/store'

type HeaderProps = {
  routes: {
    home: string
    login: string
    profile: string
  }
  component?: ElementType
}

export const Header = ({ routes, component }: HeaderProps) => {
  const dispatch = useAppDispatch()
  const user = useUser()

  return (
    <Box sx={{ flexGrow: 1 }} component={component}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box>
            <Typography
              variant="h5"
              component={RouterLink}
              to={routes.home}
              color="inherit"
              sx={{ textDecoration: 'none' }}
            >
              Home
            </Typography>
          </Box>

          <Box>
            {user ? (
              <>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to={routes.profile}
                >
                  <Typography>Profile</Typography>
                </Button>
                <Button color="inherit" onClick={() => dispatch(logout())}>
                  <Typography>Logout</Typography>
                </Button>
              </>
            ) : (
              <>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to={routes.login}
                >
                  <Typography>Login</Typography>
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
