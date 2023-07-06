import createTheme, {
  type ThemeOptions
} from "@mui/material/styles/createTheme"

import { create } from "zustand"

type ThemeStore = {
  theme: ThemeOptions
}

export const useThemeStore = create<ThemeStore>()(() => ({
  theme: createTheme({
    palette: {
      mode: "dark"
    }
  })
}))
