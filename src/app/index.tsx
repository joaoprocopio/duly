import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("__react") as HTMLElement);

root.render(
  <StrictMode>
    <div>hello world!</div>
  </StrictMode>
);
