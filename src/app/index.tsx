import "~/assets/styles/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import CssBaseline from "@mui/material/CssBaseline";

import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";

import { router } from "~/router";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const root = createRoot(document.getElementById("__react") as HTMLElement);

root.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>
);
