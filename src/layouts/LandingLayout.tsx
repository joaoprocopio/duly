import { type ReactNode, useState } from "react";

import LogoDevIcon from "@mui/icons-material/LogoDev";
import MenuIcon from "@mui/icons-material/Menu";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

interface Props {
  children: ReactNode;
}

export function LandingLayout({ children }: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = !!anchorEl;

  return (
    <>
      <AppBar component="header" color="default" elevation={0}>
        <Toolbar className="justify-between">
          <IconButton>
            <LogoDevIcon />
          </IconButton>
          <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            onClick={() => setAnchorEl(null)}
            open={open}
          >
            <MenuItem>Home</MenuItem>
            <Divider />
            <MenuItem>Login</MenuItem>
            <MenuItem>Register</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </>
  );
}
