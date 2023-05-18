import React, {useContext} from "react";
import Box from "@mui/material/Box";
import MessageContext from "../../context/MessageContext";
import styled from "@emotion/styled";
import UserContext from "../../context/UserContext";
import {IncomingMessage} from "../../socket";

const Message = (props: IncomingMessage) => {
  const user = useContext(UserContext);

  return (
    <Box
      key={props.id}
      sx={{
        // borderStyle: "solid",
        backgroundColor: user?.username === props.user.username ? "#1982FC" : "#43CC47",
        color: "white",
        width: "25em",
        alignSelf: user?.username === props.user.username ? "flex-end" : "flex-start",
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
