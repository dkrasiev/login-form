import { Route, Routes } from 'react-router-dom'

import { ROUTES } from '../consts/routes'

export const AppRoutes = () => (
  <Routes>
    {Object.values(ROUTES).map((r) => (
      <Route key={r.path} {...r} />
    ))}
  </Routes>
)
