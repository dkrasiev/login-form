import { AppLayout } from './layouts'
import { AppRoutes, withRouter } from './providers/router'
import { withTheme } from './providers/theme'

export const AppComponent = () => {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  )
}

export const App = () => withTheme(withRouter(<AppComponent />))
