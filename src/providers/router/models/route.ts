import { RouteProps } from 'react-router-dom'

import { AppRoute } from './app-route'

export type Route = RouteProps & {
  path: AppRoute
  name: string
}
