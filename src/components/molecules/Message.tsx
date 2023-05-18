import React, {useState, useContext} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MessageContext from "../../context/MessageContext";
import {MessageProps} from "../../typings/types";

const Message = (props: MessageProps) => {
  return <Box>{props.content}</Box>;
};

export default Message;
