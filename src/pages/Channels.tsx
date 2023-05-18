import React, {useState} from "react";
import ChannelBox from "../components/organisms/Channelbox";
import ChatBox from "../components/organisms/Chatbox";
import Grid from "@mui/material/Grid";
import {ChannelBoxProps, ChatBoxProps, MessageProviderProps} from "../typings/types";
import MessageProvider from "../components/providers/MessageProvider";

const Channels = () => {
  const [activeChannel, setActiveChannel] = useState(1);

  const channelBoxProps: ChannelBoxProps = {activeChannel, setActiveChannel};
  const chatBoxProps: ChatBoxProps = {activeChannel};
  const messageProviderProps: MessageProviderProps = {activeChannel: activeChannel};

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <ChannelBox {...channelBoxProps} />
      </Grid>
      <Grid item xs={8}>
        <MessageProvider {...messageProviderProps}>
          <ChatBox {...chatBoxProps} />
        </MessageProvider>
      </Grid>
    </Grid>
  );
};

export default Channels;
