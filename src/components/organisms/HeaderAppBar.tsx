import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import React from "react";
import {logout} from "../../api/sessionRoute";

async function handleSubmit() {
  await logout();
}

const HeaderAppBar = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" sx={{justifyContent: "flex-end"}}>
        <Toolbar>
          <Button color="inherit" sx={{marginLeft: "auto"}} onClick={handleSubmit}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderAppBar;
