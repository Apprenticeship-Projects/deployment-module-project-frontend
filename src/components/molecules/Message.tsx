import React, {useState, useContext} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MessageContext from "../../context/MessageContext";
import {MessageProps} from "../../typings/types";
import styled from "@emotion/styled";
import UserContext from "../../context/UserContext";

const Message = (props: MessageProps) => {
  const user = useContext(UserContext);

  return (
    <Box
      key={props.key}
      sx={{
        // borderStyle: "solid",
        backgroundColor: user?.username === props.user ? "#1982FC" : "#43CC47",
        color: "white",
        width: "25em",
        alignSelf: user?.username === props.user ? "flex-end" : "flex-start",
        border: "0.5px solid black",
        borderRadius: "10px",
        margin: "5px",
        padding: "10px",
        display: "inline-block",
      }}
    >
      {props.content}
    </Box>
  );
};

export default Message;
