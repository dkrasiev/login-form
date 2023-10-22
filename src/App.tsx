import { AppRoutes, withRouter } from './providers/router'
import { withTheme } from './providers/theme'

export const AppComponent = () => {
  return <AppRoutes />
}

export const App = () => withTheme(withRouter(<AppComponent />))
