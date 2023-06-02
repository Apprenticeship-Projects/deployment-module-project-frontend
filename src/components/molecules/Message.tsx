import React, {useContext} from "react";
import Box from "@mui/material/Box";
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
      sx={{
        alignSelf: user.data?.username === props.user.username ? "flex-end" : "flex-start",
        display: "inline-block",
        minWidth: "10em",
        maxWidth: "50%",
      }}
    >
      <Username>{props.user.username}</Username>
      <Box
        key={props.id}
        sx={{
          backgroundColor:
            user.data?.username === props.user.username
              ? "rgba(25, 130, 252, 0.3)"
              : "rgba(67, 204, 71, 0.3)",
          borderRadius: "10px",
          margin: "5px",
          padding: "10px",
        }}
      >
        <Paragraph>{props.content}</Paragraph>
      </Box>
    </Box>
  );
};

export default Message;
