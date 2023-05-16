import React, {useEffect, useState} from "react";
import MessageContext from "../../context/MessageContext";
import {getUser} from "../../api/userRoute";
import { MessageContextType } from "../../context/MessageContext";
import { getAllChannelMessages } from "../../api/messageRoute";
import { ChannelInfoData } from "../../typings/types";
import { IncomingMessage } from "../../socket";

const MessageProvider = ({children}: {children?: React.ReactNode}) => {
  const [messages, setMessages] = useState({messages: []} as MessageContextType);

  function handleUpdateMessages(messageList: IncomingMessage[]){

  }

  function handleGetChannelMessages(channel: ChannelInfoData, index: number){
    getAllChannelMessages(channel.id).then((response) => {
      handleUpdateMessages(response.data);
    })
  }

  useEffect(() => {
    getUser().then((response) => {
      //User data contains channel ids
      response.data.channels.forEach(handleGetChannelMessages)
    })
  });

  return (
    <MessageContext.Provider
      value={{
        /* Fill values of context in here*/
        messages: []
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;