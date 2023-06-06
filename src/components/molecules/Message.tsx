import React, {useContext} from "react";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import UserContext from "../../context/UserContext";
import {IncomingMessage} from "../../socket";
import MessageRenderer from "./MessageRenderer";
import {CgProfile} from "react-icons/cg";
import {toRelativeTime} from "../../utils/toRelativeTime";

const Username = styled("p")({
  margin: "0.2rem",
  fontWeight: "700",
  display: "flex",
  alignItems: "center",
  gap: "3px",
});

const Timestamp = styled("p")({
  margin: "0",
  textAlign: "right",
  fontSize: "0.65em",
  fontWeight: 500,
});

const Message = (props: IncomingMessage) => {
  const user = useContext(UserContext);

  return (
    <Box
      sx={{
        alignSelf: user.data?.username === props.user.username ? "flex-end" : "flex-start",
        display: "inline-block",
        minWidth: "15em",
        maxWidth: "50%",
      }}
    >
      <Box
        sx={{
          margin: "5px",
        }}
      >
        <Username>
          <CgProfile />
          {props.user.username}
        </Username>
        <Box
          sx={{
            backgroundColor:
              user.data?.username === props.user.username
                ? "rgba(25, 130, 252, 0.3)"
                : "rgba(67, 204, 71, 0.3)",
            borderRadius: "5px",
            padding: "5px",
          }}
        >
          <MessageRenderer content={props.content} />
        </Box>
        <Timestamp>{toRelativeTime(new Date(props.createdAt))}</Timestamp>
      </Box>
    </Box>
  );
};

export default Message;
