import React, {useState, useContext, useEffect} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MessageContext from "../../context/MessageContext";
import Message from "../molecules/Message";
import {ChatBoxProps} from "../../typings/types";

const ChatBox = (props: ChatBoxProps) => {
  const [message, setMessage] = useState("");
  const MessageData = useContext(MessageContext);

  const [activeChannelData, setActiveChannelData] = useState(
    MessageData.channels.filter(
      (channel) => Number(Object.keys(channel)[0]) === props.activeChannel
    )
  );

  useEffect(() => {
    setActiveChannelData(
      MessageData.channels.filter(
        (channel) => Number(Object.keys(channel)[0]) === props.activeChannel
      )
    );
  }, [MessageData]);

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
        {activeChannelData[0][Number(Object.keys(activeChannelData)[0])].messages.map((message) => {
          const props = {content: message.content, user: message.user.username};
          return <Message {...props} />;
        })}
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
          <Button sx={{width: "100%", height: "100%"}} variant="contained" onClick={() => {}}>
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatBox;
