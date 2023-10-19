import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./routes";

export function AppRoutes() {
  return (
    <Routes>
      {ROUTES.map((r) => (
        <Route key={r.path} {...r} />
      ))}
    </Routes>
  );
}
