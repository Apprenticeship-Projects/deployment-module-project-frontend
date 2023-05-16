import React, {useEffect, useState} from "react";
import MessageContext from "../../context/MessageContext";
import {getUser} from "../../api/userRoute";
import {MessageContextType} from "../../context/MessageContext";
import {getAllChannelMessages} from "../../api/messageRoute";
import {ChannelInfoData} from "../../typings/types";
import {IncomingMessage} from "../../socket";
import {ChannelMessageListType} from "../../context/MessageContext";

const MessageProvider = ({children}: {children?: React.ReactNode}) => {
  const [messages, setMessages] = useState({messages: []} as MessageContextType);

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

  useEffect(() => {
    getUser().then((response) => {
      //User data contains channel ids
      response.data.channels.forEach(handleGetChannelMessages);
    });
  });

  return <MessageContext.Provider value={messages}>{children}</MessageContext.Provider>;
};

export default MessageProvider;
