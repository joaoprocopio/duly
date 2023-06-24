import { createRoot } from "react-dom/client";

import { App } from "~/app";

const rootEl = document.getElementById("__react") as HTMLElement;
const root = createRoot(rootEl);

root.render(<App />);
