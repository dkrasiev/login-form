import { HomePage } from '../../../pages/HomePage'
import { LoginPage } from '../../../pages/LoginPage'
import { ProfilePage } from '../../../pages/ProfilePage'
import { Route } from '../models/route'
import { AppPage } from './pages'

export const ROUTES: Record<AppPage, Route> = {
  [AppPage.HOME]: {
    path: '/',
    element: HomePage(),
    name: 'Home',
  },
  [AppPage.LOGIN]: {
    path: '/login',
    element: LoginPage(),
    name: 'Login',
  },
  [AppPage.PROFILE]: {
    path: '/profile',
    element: ProfilePage(),
    name: 'Profile',
  },
}
