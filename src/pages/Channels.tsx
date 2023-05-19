import React, {useState} from "react";
import ChannelBox from "../components/organisms/Channelbox";
import ChatBox from "../components/organisms/Chatbox";

import MessageProvider from "../components/providers/MessageProvider";
import ChannelContext from "../context/ChannelContext";
import PageProtection from "../components/organisms/PageProtection";
import {Box} from "@mui/material";
import {navHeight} from "../constants/sizes";

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
        <Box sx={{display: "flex", marginTop: `${navHeight}px`}}>
          <ChannelBox />
          <MessageProvider>
            <ChatBox />
          </MessageProvider>
        </Box>
      </ChannelContext.Provider>
    </PageProtection>
  );
};

export default Channels;
