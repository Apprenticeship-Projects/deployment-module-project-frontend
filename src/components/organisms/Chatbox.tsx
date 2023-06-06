import React, {useContext} from "react";
import Grid from "@mui/material/Grid";
import MessageContext from "../../context/MessageContext";
import Message from "../molecules/Message";
import {drawerWidth, navHeight} from "../../constants/sizes";
import MessageInput from "./MessageInput";

const ChatBox = () => {
  const messageData = useContext(MessageContext);

  return (
    <Grid
      container
      direction="column"
      gap={2}
      sx={{
        height: "100%",
        paddingTop: `${navHeight}px`,
        flexGrow: 1,
        width: {sm: `calc(100% - ${drawerWidth}px)`},
      }}
    >
      <Grid
        item
        xs
        sx={{
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "space-between",
          height: "100%",
        }}
      >
        {[...messageData]
          .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
          .reverse()
          .map((message) => {
            return <Message key={message.id} {...message} />;
          })}
      </Grid>
      <Grid item xs="auto">
        <MessageInput />
      </Grid>
    </Grid>
  );
};

export default ChatBox;
