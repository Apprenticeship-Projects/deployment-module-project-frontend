import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {navHeight} from "../../constants/sizes";

const HeaderAppBar = () => {
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
