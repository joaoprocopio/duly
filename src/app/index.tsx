import "~/assets/styles/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "~/router";
import { App } from "./App";

const root = createRoot(document.getElementById("__react") as HTMLElement);

root.render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </StrictMode>
);
