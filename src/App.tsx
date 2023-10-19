import AppLayout from "./layouts/AppLayout";
import { AppRoutes, withRouter } from "./providers/router";

function AppComponent() {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  );
}

export default function App() {
  return withRouter(<AppComponent />);
}
