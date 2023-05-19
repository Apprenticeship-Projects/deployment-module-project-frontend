import React, {useState} from "react";
import ChannelBox from "../components/organisms/Channelbox";
import ChatBox from "../components/organisms/Chatbox";
import Grid from "@mui/material/Grid";
import MessageProvider from "../components/providers/MessageProvider";
import ChannelContext from "../context/ChannelContext";
import PageProtection from "../components/organisms/PageProtection";

const Channels = () => {
  const [activeChannel, setActiveChannel] = useState(1);

  return (
    <PageProtection>
      <ChannelContext.Provider
        value={{
          set: setActiveChannel,
          id: activeChannel,
        }}
      >
        <Grid container spacing={2} height="100%" maxHeight="90vh" alignItems="flex-end">
          <Grid item xs={2}>
            <ChannelBox />
          </Grid>
          <Grid item xs={8}>
            <MessageProvider>
              <ChatBox />
            </MessageProvider>
          </Grid>
        </Grid>
      </ChannelContext.Provider>
    </PageProtection>
  );
};

export default Channels;
