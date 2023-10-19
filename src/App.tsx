import AppLayout from './layouts/AppLayout'
import { AppRoutes, withRouter } from './providers/router'
import { withTheme } from './providers/theme'

function AppComponent() {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  )
}

export default function App() {
  return withTheme(withRouter(<AppComponent />))
}
