import type { ReactNode } from "react";

import { StrictMode } from "react";

import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import CssBaseline from "@mui/material/CssBaseline";

import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";

interface Props {
  children: ReactNode;
}

export function App({ children }: Props) {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </StrictMode>
  );
}
