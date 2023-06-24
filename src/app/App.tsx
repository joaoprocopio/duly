import "~/assets/styles/index.css";

import { StrictMode } from "react";
import { RouterProvider as Router } from "react-router-dom";

import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import { useThemeStore } from "~/stores";
import { router } from "~/router";

export function App() {
  const { theme } = useThemeStore();

  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router router={router} />
        </ThemeProvider>
      </StyledEngineProvider>
    </StrictMode>
  );
}
