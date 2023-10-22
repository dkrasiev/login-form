import { HomePage } from '../../../pages/HomePage'
import { LoginPage } from '../../../pages/LoginPage'
import { ProfilePage } from '../../../pages/ProfilePage'
import { AppPage } from '../models/app-page'
import { AppRoute } from '../models/app-route'
import { Route } from '../models/route'

export const ROUTES: Record<AppPage, Route> = {
  [AppPage.HOME]: {
    path: AppRoute.HOME,
    Component: HomePage,
    name: 'Home',
  },
  [AppPage.LOGIN]: {
    path: AppRoute.LOGIN,
    Component: LoginPage,
    name: 'Login',
  },
  [AppPage.PROFILE]: {
    path: AppRoute.PROFILE,
    Component: ProfilePage,
    name: 'Profile',
  },
}
