import React from "react";
import { OutgoingMessage } from "../socket";

interface ChannelMessageListType{
  channelId: number
  messages: OutgoingMessage[]
}

interface MessageContextType {
  messages: ChannelMessageListType[];
}

const MessageContext = React.createContext<MessageContextType>({
  messages: [] as ChannelMessageListType[]
});

export default MessageContext;