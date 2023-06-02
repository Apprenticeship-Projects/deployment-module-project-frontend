import React from "react";

const ChannelContext = React.createContext<{
  set: (id: number) => void;
  id: number;
}>({
  set: () => {},
  id: 1,
});

export default ChannelContext;
