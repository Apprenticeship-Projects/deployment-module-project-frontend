import React, {useContext, useEffect, useState} from "react";
import MessageContext from "../../context/MessageContext";
import {MessageContextType} from "../../context/MessageContext";
import {getAllChannelMessages} from "../../api/messageRoute";
import {ChannelInfoData} from "../../typings/types";
import {IncomingMessage} from "../../socket";
import UserContext from "../../context/UserContext";

const MessageProvider = ({children}: {children?: React.ReactNode}) => {
  const [messages, setMessages] = useState({messages: []} as MessageContextType);

  const user = useContext(UserContext)

  useEffect(() => {
    function handleUpdateMessages(channelId: number, messageList: IncomingMessage[]) {
      let updatedMessages = messages;
  
      let newChannel = {channelId: channelId, messages: messageList};
      updatedMessages.messages.push(newChannel);
  
      setMessages(updatedMessages);
    }

    function handleGetChannelMessages(channel: ChannelInfoData, index: number) {
      getAllChannelMessages(channel.id).then((response) => {
        handleUpdateMessages(channel.id, response.data);
      });
    }

    if (user) {
      user.channels.forEach(handleGetChannelMessages);
    }
  }, [messages, user]);

  return <MessageContext.Provider value={messages}>{children}</MessageContext.Provider>;
};

export default MessageProvider;
