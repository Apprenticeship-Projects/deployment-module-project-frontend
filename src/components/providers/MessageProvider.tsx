import React, {useContext, useEffect, useState} from "react";
import MessageContext from "../../context/MessageContext";
import {getAllChannelMessages} from "../../api/messageRoute";
import {IncomingMessage} from "../../socket";
import UserContext from "../../context/UserContext";
import SocketContext from "../../context/SocketContext";
import ChannelContext from "../../context/ChannelContext";

const MessageProvider = ({children}: {children?: React.ReactNode}) => {
  const activeChannel = useContext(ChannelContext);
  const [messages, setMessages] = useState<IncomingMessage[]>([]);

  const user = useContext(UserContext);
  const socket = useContext(SocketContext);

  useEffect(() => {
    function handleMessageSent(data: IncomingMessage) {
      setMessages((prev) => {
        const copy = [...prev];
        copy.push(data);
        return copy;
      });
    }

    function handleMessageDelete(id: number) {
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
    }

    socket.socket.on("messageSent", handleMessageSent);
    socket.socket.on("messageDeleted", handleMessageDelete);

    return () => {
      socket.socket.off("messageSent", handleMessageSent);
      socket.socket.off("messageDeleted", handleMessageDelete);
    };
  }, [setMessages, socket.socket]);

  useEffect(() => {
    if (user) {
      getAllChannelMessages(activeChannel.id).then((response) => {
        setMessages(response.data);
      });
    }
  }, [activeChannel.id, setMessages, user]);

  return <MessageContext.Provider value={messages}>{children}</MessageContext.Provider>;
};

export default MessageProvider;
