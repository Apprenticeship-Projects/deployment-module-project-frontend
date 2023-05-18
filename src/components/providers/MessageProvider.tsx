import React, {useContext, useEffect, useState} from "react";
import MessageContext from "../../context/MessageContext";
import {MessageContextType} from "../../context/MessageContext";
import {getAllChannelMessages} from "../../api/messageRoute";
import {ChannelInfoData} from "../../typings/types";
import {IncomingMessage} from "../../socket";
import UserContext from "../../context/UserContext";
import SocketContext from "../../context/SocketContext";
import {useImmer} from "use-immer";
import {MessageProviderProps} from "../../typings/types";

const MessageProvider = ({
  children,
  activeChannel,
}: {
  children?: React.ReactNode;
  activeChannel: number;
}) => {
  const [messages, setMessages] = useImmer<IncomingMessage[]>([]);

  const user = useContext(UserContext);
  const socket = useContext(SocketContext);

  useEffect(() => {
    function handleMessageSent(data: IncomingMessage) {
      setMessages((draft) => {
        draft.push(data);
      });
    }

    socket.socket.on("messageSent", handleMessageSent);

    return () => {
      socket.socket.off("messageSent", handleMessageSent);
    };
  }, []);

  useEffect(() => {
    if (user) {
      // setMessages(draft => {
      //   getAllChannelMessages(activeChannel).then((response) =>{
      //     draft.channels[activeChannel] = {name: response.data.channel.name, messages: response.data.channelMessages.data};
      //   })

      getAllChannelMessages(activeChannel).then((response) => {
        // console.log(response)
        setMessages(response.data);
      });
      // let promiseList = user.channels.map(async channel => {
      //   const channelMessages = await getAllChannelMessages(channel.id)
      //   return {channel, channelMessages}
      // });
      // Promise.all(promiseList).then(responseList => {
      //   let update: MessageContextType = {channels:{}}
      //   responseList.forEach((response) => {
      //     update.channels[response.channel.id] = {name: response.channel.name, messages: response.channelMessages.data};
      //   })
      //   console.log(update)
      //   draft = update;
      // })

      // });
    }
    console.log(messages);
  }, [messages, user]);

  return <MessageContext.Provider value={messages}>{children}</MessageContext.Provider>;
};

export default MessageProvider;
