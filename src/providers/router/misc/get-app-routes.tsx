import { Navigate } from 'react-router'

import { HomePage } from '../../../pages/HomePage'
import { LoginPage } from '../../../pages/LoginPage'
import { ProfilePage } from '../../../pages/ProfilePage'
import { AppRoute } from '../models/app-route'
import { Route } from '../models/route'

export const getAppRoutes = (isLoggedIn: boolean): Route[] => {
  const result = [
    {
      path: AppRoute.HOME,
      Component: HomePage,
      name: 'Home',
    },
    {
      path: AppRoute.LOGIN,
      Component: () =>
        isLoggedIn ? Navigate({ to: AppRoute.PROFILE }) : LoginPage(),
      name: 'Login',
    },
    {
      path: AppRoute.PROFILE,
      Component: () =>
        isLoggedIn ? ProfilePage() : Navigate({ to: AppRoute.HOME }),
      name: 'Profile',
    },
    {
      path: AppRoute.WILDCARD,
      Component: () => Navigate({ to: AppRoute.HOME }),
      name: '404',
    },
  ]

  return result
}
