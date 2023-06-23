import "~/assets/styles/index.css";

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "~/router";
import { App } from "~/app";

const root = createRoot(document.getElementById("__react") as HTMLElement);

root.render(
  <App>
    <RouterProvider router={router} />
  </App>
);
