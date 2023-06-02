import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {navHeight} from "../../constants/sizes";
import {IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderAppBar = ({handleDrawerToggle}: {handleDrawerToggle: () => void}) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        justifyContent: "flex-end",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        height: navHeight,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{mr: 2, display: {sm: "none"}}}
        >
          <MenuIcon />
        </IconButton>
        <Button color="inherit" href="/channels">
          Channels
        </Button>
        <Button color="inherit" sx={{marginLeft: "auto"}} href="/logout">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderAppBar;
