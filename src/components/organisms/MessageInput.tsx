import {Button, Grid, TextField} from "@mui/material";
import React, {useContext, useState} from "react";
import ChannelContext from "../../context/ChannelContext";
import {postMessage} from "../../api/messageRoute";

const MessageInput = () => {
  const activeChannel = useContext(ChannelContext);
  const [message, setMessage] = useState("");
  const [debounce, setDebounce] = useState(false);

  function send() {
    if (!message) return;
    setDebounce(true);
    postMessage(activeChannel.id, message)
      .then((response) => {
        setMessage("");
      })
      .finally(() => {
        setDebounce(false);
      });
  }

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
            if (e.key !== "Enter" || e.getModifierState("Shift") || debounce) return;
            e.preventDefault();
            send();
          }}
        />
      </Grid>
      <Grid item xs="auto">
        <Button
          sx={{width: "100px", height: "100%"}}
          variant="contained"
          type="submit"
          disabled={debounce}
          onClick={(event) => {
            event.preventDefault();
            send();
          }}
        >
          Send
        </Button>
      </Grid>
    </Grid>
  );
};

export default MessageInput;
