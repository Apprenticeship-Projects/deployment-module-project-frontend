import React from "react";
import LoginRegisterForm from "../components/organisms/LoginRegisterForm";
import {Grid} from "@mui/material";
import {navHeight} from "../constants/sizes";

const Index = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: `${navHeight + 100}px`,
        width: "100%",
      }}
    >
      <LoginRegisterForm />
    </Grid>
  );
};

export default Index;
