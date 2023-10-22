import { ReactNode } from 'react'

import { withRouter } from './router'
import { withStore } from './store'
import { withTheme } from './theme'

export const withProviders = (children: ReactNode) =>
  withRouter(withStore(withTheme(children)))
