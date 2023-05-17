import React from "react";
import {IncomingMessage} from "../socket";

export interface ChannelDataType {
  name: string;
  messages: IncomingMessage[];
}

export interface MessageContextType {
  channels: {[channelId: number]: ChannelDataType};
}

const MessageContext = React.createContext<MessageContextType>({
  channels: {},
});

export default MessageContext;
