import { StrictMode, type ReactNode } from "react";

import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import CssBaseline from "@mui/material/CssBaseline";

import Button from "@mui/material/Button";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import { useThemeStore } from "~/stores";

interface Props {
  children: ReactNode;
}

export function App({ children }: Props) {
  const { theme, toggleTheme } = useThemeStore((state) => state);

  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Button onClick={() => toggleTheme()}>{theme.palette.mode}</Button>
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </StrictMode>
  );
}
