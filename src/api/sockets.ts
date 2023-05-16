import {io} from "socket.io-client";

const socket = io(process.env.REACT_APP_API_ORIGIN as string);

socket.on("connect", () => {
  console.log("connect");
});

//Listeners
socket.on("messageSent", (data) => {});

socket.on("messageEdited", (data) => {});

socket.on("messageDeleted", (id) => {});

socket.on("userJoinedChannel", (data) => {});

socket.on("userLeftChannel", (data) => {});

export default socket;
