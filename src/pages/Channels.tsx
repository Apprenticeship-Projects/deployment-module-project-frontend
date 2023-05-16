import React, {useState} from "react";
import ChannelBox from "../components/organisms/Channelbox";
import ChatBox from "../components/organisms/Chatbox";
import Grid from "@mui/material/Grid";
import {ChannelBoxProps, ChatBoxProps} from "../typings/types";

const Channels = () => {
  const [activeChannel, setActiveChannel] = useState(1);

  const channelBoxProps: ChannelBoxProps = {activeChannel, setActiveChannel};
  const chatBoxProps: ChatBoxProps = {activeChannel};

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <ChannelBox {...channelBoxProps} />
      </Grid>
      <Grid item xs={8}>
        <ChatBox {...chatBoxProps} />
      </Grid>
    </Grid>
  );
};

export default Channels;
