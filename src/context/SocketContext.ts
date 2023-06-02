import React from "react";
import {Socket} from "../socket";

interface SocketContextType {
  socket: Socket;
  connected: boolean;
}

const SocketContext = React.createContext<SocketContextType>({
  socket: {} as Socket,
  connected: false,
});

export default SocketContext;
