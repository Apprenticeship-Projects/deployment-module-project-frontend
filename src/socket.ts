import {Socket as IOSocket, io} from "socket.io-client";

export interface IncomingMessage {
  id: number;
  channelId: number;
  content: string;
  isEdited: boolean;
  editedAt: Date;
  createdAt: Date;
  user: {
    username: string;
  };
}

export interface UserConnection {
  id: number;
  channelId: number;
  username: string;
  action: "joined" | "left";
}

interface ServerToClientEvents {
  messageSent: (data: IncomingMessage) => void;
  messageEdited: (data: IncomingMessage) => void;
  messageDeleted: (id: number) => void;
  userJoinedChannel: (data: UserConnection) => void;
  userLeftChannel: (data: UserConnection) => void;
}

interface ClientToServerEvents {}

export type Socket = IOSocket<ServerToClientEvents, ClientToServerEvents>;

const socket: Socket = io(process.env.REACT_APP_API_ORIGIN as string);

export default socket;
