import "~/assets/styles/index.css";

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "~/router";
import { App } from "~/app";

const rootEl = document.getElementById("__react") as HTMLElement;
const root = createRoot(rootEl);

root.render(
  <App>
    <RouterProvider router={router} />
  </App>
);
