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
    <form>
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
            flexDirection: "column-reverse",
            alignItems: "space-between",
          }}
        >
          {[...messageData].reverse().map((message) => {
            return <Message key={message.id} {...message} />;
          })}
        </Box>
        <Grid
          sx={{
            alignSelf: "flex-end",
            marginTop: "2em",
            position: "fixed",
            left: "10vw",
            bottom: "1vh",
            width: "100%",
          }}
          container
          spacing={2}
        >
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
      </Box>
    </form>
  );
};

export default ChatBox;
