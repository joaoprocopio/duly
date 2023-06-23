import type { RouteObject } from "react-router-dom";

import { LandingLayout } from "~/layouts";
import { LandingPage } from "~/pages";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <LandingLayout>
        <LandingPage />
      </LandingLayout>
    ),
  },
];
