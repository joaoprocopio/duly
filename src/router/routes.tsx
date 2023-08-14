import { type RouteObject } from "react-router-dom"

import { LandingLayout } from "~/layouts"
import { ErrorPage, LandingPage } from "~/pages"

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  }
]
