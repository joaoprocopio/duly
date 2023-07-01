import { create } from "zustand";

import { type ThemeConfig } from "antd";

type ThemeStore = {
  theme: ThemeConfig;
};

export const useThemeStore = create<ThemeStore>()(() => ({
  theme: {},
}));
