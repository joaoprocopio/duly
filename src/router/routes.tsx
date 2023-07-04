import { type RouteObject, Navigate } from "react-router-dom"

import { LandingLayout } from "~/layouts"
import { ErrorPage, LandingPage, AuthPage } from "~/pages"

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
  },
  {
    path: "/auth/:step?",
    element: <LandingLayout simple={true} />,
    children: [
      {
        index: true,
        element: <AuthPage />
      },
      {
        path: "*",
        element: <Navigate to="/auth" />
      }
    ]
  }
]
