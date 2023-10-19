import CounterPage from '../../../pages/CounterPage'
import HomePage from '../../../pages/HomePage'
import LoginPage from '../../../pages/LoginPage'
import ProfilePage from '../../../pages/ProfilePage'
import { Route } from '../models/route'

export const ROUTES: Route[] = [
  {
    path: '/',
    element: HomePage(),
    name: 'Home',
  },
  {
    path: '/login',
    element: LoginPage(),
    name: 'Login',
  },
  {
    path: '/profile',
    element: ProfilePage(),
    name: 'Profile',
  },
  {
    path: '/counter',
    element: CounterPage(),
    name: 'Counter',
  },
]
