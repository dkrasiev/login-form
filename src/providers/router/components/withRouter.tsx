import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (cmp: ReactNode) => (
  <BrowserRouter>{cmp}</BrowserRouter>
);
