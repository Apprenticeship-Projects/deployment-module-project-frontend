import {Button, Grid, TextField} from "@mui/material";
import React, {useContext, useState} from "react";
import ChannelContext from "../../context/ChannelContext";
import {postMessage} from "../../api/messageRoute";

const MessageInput = () => {
  const activeChannel = useContext(ChannelContext);
  const [message, setMessage] = useState("");

  return (
    <Grid container gap={2} padding={2} component="form">
      <Grid item xs>
        <TextField
          sx={{width: "100%"}}
          id="message-input"
          label="Message"
          autoComplete="Message"
          value={message}
          multiline
          maxRows={10}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key !== "Enter" || e.getModifierState("Shift")) return;
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
  );
};

export default MessageInput;
