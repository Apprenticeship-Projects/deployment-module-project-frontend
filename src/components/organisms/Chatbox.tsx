import React, {useState, useContext} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MessageContext from "../../context/MessageContext";
import Message from "../molecules/Message";
import {postMessage} from "../../api/messageRoute";
import ChannelContext from "../../context/ChannelContext";

const ChatBox = () => {
  const activeChannel = useContext(ChannelContext);
  const [message, setMessage] = useState("");
  const messageData = useContext(MessageContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
        justifyContent: "flex-start",
        maxHeight: "80vh",
      }}
    >
      <Box
        sx={{
          height: "100%",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          justifyContent: "flex-end",
        }}
      >
        {messageData.map((message) => {
          return <Message key={message.id} {...message} />;
        })}
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
            sx={{width: "100%"}}
            id="message-input"
            label="Message"
            autoComplete="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            sx={{width: "100%", height: "100%"}}
            variant="contained"
            onClick={() => {
              if (message) {
                postMessage(activeChannel.id, message).then((response) => {
                  setMessage("");
                });
              }
            }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatBox;
