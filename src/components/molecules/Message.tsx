import React from "react";
import Box from "@mui/material/Box";
import {MessageProps} from "../../typings/types";

const Message = (props: MessageProps) => {
  return <Box>{props.content}</Box>;
};

export default Message;
