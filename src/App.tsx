import { AppRoutes } from './providers/router'
import { withProviders } from './providers/withProviders'

export const AppComponent = () => {
  return <AppRoutes />
}

export const App = () => withProviders(<AppComponent />)
