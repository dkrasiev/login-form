import { useAppRoutes } from '../hooks/use-app-routes'

export const AppRoutes = () => {
  const routing = useAppRoutes()
  return <>{routing}</>
}
