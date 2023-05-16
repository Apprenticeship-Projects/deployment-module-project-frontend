import React from "react";
import { IncomingMessage } from "../socket";

export interface ChannelMessageListType{
  channelId: number
  messages: IncomingMessage[]
}

export interface MessageContextType {
  messages: ChannelMessageListType[];
}

const MessageContext = React.createContext<MessageContextType>({
  messages: [] as ChannelMessageListType[]
});

export default MessageContext;