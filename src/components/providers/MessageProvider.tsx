import React, {useEffect, useState} from "react";
import MessageContext from "../../context/MessageContext";
import {getUser} from "../../api/userRoute";

const MessageProvider = ({children}: {children?: React.ReactNode}) => {
  const [messages, setMessages] = useState(false);

  function handleUpdateMessages(){
    
  }

  useEffect(() => {
    getUser().then((data) => {

    })
  });

  return (
    <MessageContext.Provider
      value={{
        /* Fill values of context in here*/
        messages: []
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;