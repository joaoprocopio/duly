import { Outlet } from "react-router-dom"

import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined"
import PersonIcon from "@mui/icons-material/Person"

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Button from "@mui/material/Button"

export function LandingLayout() {
  return (
    <>
      <AppBar component="header" color="transparent" elevation={0}>
        <Toolbar className="justify-between">
          <IconButton>
            <LocalLibraryOutlinedIcon />
          </IconButton>
          <Button startIcon={<PersonIcon />}>Sign in</Button>
        </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
    </>
  )
}
