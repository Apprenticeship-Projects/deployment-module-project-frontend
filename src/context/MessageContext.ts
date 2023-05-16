import React from "react";
import {IncomingMessage} from "../socket";

export interface ChannelMessageListType {
  channelId: number;
  messages: IncomingMessage[];
}

export interface MessageContextType {
  messages: {[channelId: number]: IncomingMessage[]}[];
}

const MessageContext = React.createContext<MessageContextType>({
  messages: [],
});

export default MessageContext;
