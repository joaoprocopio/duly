import { create } from "zustand";

import createTheme, { type Theme } from "@mui/material/styles/createTheme";

type ThemeStore = {
  theme: Theme;
};

type ThemeAction = {
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore & ThemeAction>()((set) => ({
  theme: createTheme({
    palette: {
      mode: "light",
    },
  }),
  toggleTheme: () =>
    set(({ theme }) => ({
      theme: createTheme({
        palette: {
          mode: theme.palette.mode === "light" ? "dark" : "light",
        },
      }),
    })),
}));
