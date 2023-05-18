import React, {useContext} from "react";
import Box from "@mui/material/Box";
import MessageContext from "../../context/MessageContext";
import styled from "@emotion/styled";
import UserContext from "../../context/UserContext";
import {IncomingMessage} from "../../socket";

const Paragraph = styled("p")({
  margin: "0.2rem",
  fontWeight: "500",
});

const Username = styled("p")({
  margin: "0.2rem",
  fontWeight: "700",
  fontStyle: "italic",
});

const Message = (props: IncomingMessage) => {
  const user = useContext(UserContext);

  return (
    <Box
      key={props.id}
      sx={{
        // borderStyle: "solid",
        backgroundColor:
          user?.username === props.user.username
            ? "rgba(25, 130, 252, 0.3)"
            : "rgba(67, 204, 71, 0.3)",
        width: "25em",
        alignSelf: user?.username === props.user.username ? "flex-end" : "flex-start",
        borderRadius: "10px",
        margin: "5px",
        padding: "10px",
        display: "inline-block",
      }}
    >
      <Username>{props.user.username}</Username>
      <Paragraph>{props.content}</Paragraph>
    </Box>
  );
};

export default Message;
