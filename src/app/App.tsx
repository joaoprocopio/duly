import "antd/dist/reset.css";
import "~/assets/styles/index.css";

import { StrictMode } from "react";
import { RouterProvider as Router } from "react-router-dom";

import { ConfigProvider, App as AppProvider } from "antd";

import { useThemeStore } from "~/stores";
import { router } from "~/router";

export function App() {
  const { theme } = useThemeStore();

  return (
    <StrictMode>
      <ConfigProvider theme={theme}>
        <AppProvider>
          <Router router={router} />
        </AppProvider>
      </ConfigProvider>
    </StrictMode>
  );
}
