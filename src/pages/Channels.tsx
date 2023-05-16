import React from "react";
import ChannelBox from "../components/organisms/Channelbox";
import ChatBox from "../components/organisms/Chatbox";
import Grid from "@mui/material/Grid";

const Channels = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <ChannelBox />
      </Grid>
      <Grid item xs={8}>
        <ChatBox />
      </Grid>
    </Grid>
  );
};

export default Channels;
