import React, {useContext, useEffect} from "react";
import MessageContext from "../../context/MessageContext";
import {getAllChannelMessages} from "../../api/messageRoute";
import {IncomingMessage} from "../../socket";
import UserContext from "../../context/UserContext";
import SocketContext from "../../context/SocketContext";
import {useImmer} from "use-immer";
import ChannelContext from "../../context/ChannelContext";

const MessageProvider = ({children}: {children?: React.ReactNode}) => {
  const activeChannel = useContext(ChannelContext);
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
