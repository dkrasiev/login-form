import { RouteObject } from 'react-router-dom'

import { AppRoute } from './app-route'

export type Route = RouteObject & {
  path: AppRoute
  name: string
}
