import { Outlet } from "react-router-dom"

import BiotechIcon from "@mui/icons-material/Biotech"

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"

export function LandingLayout() {
  return (
    <>
      <AppBar component="header" position="sticky" color="transparent" elevation={0}>
        <Toolbar className="justify-between">
          <BiotechIcon fontSize="large" />
        </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
    </>
  )
}
