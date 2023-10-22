import { AppRoutes } from './providers/router'
import { withProviders } from './providers/with-providers'

export const AppComponent = () => {
  return <AppRoutes />
}

export const App = () => withProviders(<AppComponent />)
