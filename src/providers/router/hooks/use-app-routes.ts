import { useRoutes } from 'react-router-dom'

import { useUser } from '../../../hooks'
import { getAppRoutes } from '../misc/get-app-routes'

export const useAppRoutes = () => {
  const user = useUser()
  const routing = useRoutes(getAppRoutes(Boolean(user)))

  return routing
}
