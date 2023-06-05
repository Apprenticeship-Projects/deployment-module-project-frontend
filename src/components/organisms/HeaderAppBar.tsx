import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {navHeight} from "../../constants/sizes";
import {IconButton} from "@mui/material";
import {Link} from "react-router-dom";
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
        <Button color="inherit">
          <Link to="/channels">Channels</Link>
        </Button>
        <Button color="inherit" sx={{marginLeft: "auto"}}>
          <Link to="/logout">Logout</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderAppBar;
