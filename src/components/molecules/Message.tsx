import React, {useContext, useState} from "react";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import UserContext from "../../context/UserContext";
import {IncomingMessage} from "../../socket";
import MessageRenderer from "./MessageRenderer";
import {CgProfile} from "react-icons/cg";
import {toRelativeTime} from "../../utils/toRelativeTime";
import {Menu, MenuItem} from "@mui/material";
import {deleteMessage} from "../../api/messageRoute";

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
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const showMenu = Boolean(anchor);
  const createdAt = new Date(props.createdAt);
  const myMessage = user.data?.username === props.user.username;

  return (
    <Box
      sx={{
        alignSelf: myMessage ? "flex-end" : "flex-start",
        display: "inline-block",
        minWidth: "12em",
        maxWidth: "90%",
      }}
    >
      <Box
        sx={{
          margin: "5px",
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          if (!myMessage) return;
          setAnchor(e.currentTarget);
        }}
      >
        <Username>
          <CgProfile />
          {props.user.username}
        </Username>
        <Box
          sx={{
            backgroundColor: myMessage ? "rgba(25, 130, 252, 0.3)" : "rgba(67, 204, 71, 0.3)",
            borderRadius: "5px",
            padding: "5px",
            overflowX: "auto",
          }}
        >
          <MessageRenderer content={props.content} />
        </Box>
        <Menu
          id="message-menu"
          anchorEl={anchor}
          open={showMenu}
          onClose={() => {
            setAnchor(null);
          }}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem
            sx={{
              ":hover": {
                backgroundColor: "#e04931",
                color: "white",
              },
            }}
            onClick={(e) => {
              e.preventDefault();
              setAnchor(null);
              deleteMessage(props.id).finally(() => {
                setAnchor(null);
              });
            }}
          >
            Delete
          </MenuItem>
        </Menu>
        <Timestamp>
          {createdAt.getHours().toString().padStart(2, "0")}:
          {createdAt.getMinutes().toString().padStart(2, "0")}:
          {createdAt.getSeconds().toString().padStart(2, "0")} - {toRelativeTime(createdAt)}
        </Timestamp>
      </Box>
    </Box>
  );
};

export default Message;
