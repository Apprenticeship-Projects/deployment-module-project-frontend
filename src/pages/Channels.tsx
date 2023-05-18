import React, {useState} from "react";
import ChannelBox from "../components/organisms/Channelbox";
import ChatBox from "../components/organisms/Chatbox";
import Grid from "@mui/material/Grid";
import MessageProvider from "../components/providers/MessageProvider";
import ChannelContext from "../context/ChannelContext";

const Channels = () => {
  const [activeChannel, setActiveChannel] = useState(1);

  return (
    <Grid container spacing={2}>
      <ChannelContext.Provider
        value={{
          set: setActiveChannel,
          id: activeChannel,
        }}
      >
        <Grid item xs={2}>
          <ChannelBox />
        </Grid>
        <Grid item xs={8}>
          <MessageProvider>
            <ChatBox />
          </MessageProvider>
        </Grid>
      </ChannelContext.Provider>
    </Grid>
  );
};

export default Channels;
