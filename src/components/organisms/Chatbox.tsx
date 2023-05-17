import React, {useState, useContext, useEffect} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MessageContext from "../../context/MessageContext";
import Message from "../molecules/Message";
import {ChatBoxProps} from "../../typings/types";
import {postMessage} from "../../api/messageRoute";

const ChatBox = (props: ChatBoxProps) => {
  const [message, setMessage] = useState("");
  const messageData = useContext(MessageContext);
  console.log(messageData.channels);
  console.log(messageData.channels.hasOwnProperty(props.activeChannel));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          height: "750px",
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          justifyContent: "flex-end",
        }}
      >
        {messageData.channels.hasOwnProperty(props.activeChannel) ? (
          messageData.channels[props.activeChannel].messages.map((message) => {
            const props = {content: message.content, user: message.user.username};
            return <Message {...props} />;
          })
        ) : (
          <></>
        )}
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
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
                postMessage(props.activeChannel, message).then((response) => {
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
