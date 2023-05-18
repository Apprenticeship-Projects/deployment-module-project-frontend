import React from "react";
import Box from "@mui/material/Box";
import {IncomingMessage} from "../../socket";

const Message = (props: IncomingMessage) => {
  return <Box>{props.content}</Box>;
};

export default Message;
