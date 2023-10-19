import { RouteProps } from "react-router-dom";

import CounterPage from "../../pages/CounterPage";
import TestPage from "../../pages/TestPage";

export const ROUTES: RouteProps[] = [
  {
    path: "/",
    element: TestPage(),
  },
  {
    path: "/counter",
    element: CounterPage(),
  },
];
