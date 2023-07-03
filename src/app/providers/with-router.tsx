import { ReactNode, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { Preloader } from "@src/shared";

export const withRouter = (component: () => ReactNode) => () =>
  <BrowserRouter>
    <Suspense fallback={<Preloader />}>
      {component()}
    </Suspense>
  </BrowserRouter>;