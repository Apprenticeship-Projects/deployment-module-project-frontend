import React, {useState, useContext} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MessageContext from "../../context/MessageContext";
import Message from "../molecules/Message";
import {postMessage} from "../../api/messageRoute";
import ChannelContext from "../../context/ChannelContext";
import {drawerWidth} from "../../constants/sizes";

const ChatBox = () => {
  const activeChannel = useContext(ChannelContext);
  const [message, setMessage] = useState("");
  const messageData = useContext(MessageContext);

  return (
    <Grid
      container
      direction="column"
      gap={2}
      sx={{height: "100%", flexGrow: 1, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
    >
      <Grid
        item
        xs
        sx={{
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "space-between",
          height: "100%",
        }}
      >
        {[...messageData]
          .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
          .reverse()
          .map((message) => {
            return <Message key={message.id} {...message} />;
          })}
      </Grid>
      <Grid item xs="auto">
        <Grid container gap={2} padding={2} component="form">
          <Grid item xs>
            <TextField
              sx={{width: "100%"}}
              id="message-input"
              label="Message"
              autoComplete="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                e.preventDefault();
                if (message) {
                  postMessage(activeChannel.id, message).then((response) => {
                    setMessage("");
                  });
                }
              }}
            />
          </Grid>
          <Grid item xs="auto">
            <Button
              sx={{width: "100px", height: "100%"}}
              variant="contained"
              type="submit"
              onClick={(event) => {
                event.preventDefault();
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
      </Grid>
    </Grid>
  );
};

export default ChatBox;
