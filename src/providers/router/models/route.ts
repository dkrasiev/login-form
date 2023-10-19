import { RouteProps } from 'react-router-dom'

export type Route = RouteProps & {
  path: string
  name: string
}
