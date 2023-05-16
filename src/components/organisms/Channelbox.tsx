import React, {useContext} from "react";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MessageContext from "../../context/MessageContext";
import {ChannelBoxProps} from "../../typings/types";

const ChannelBox = (props: ChannelBoxProps) => {
  const MessageData = useContext(MessageContext);

  return (
    <Drawer variant="permanent">
      <List>
        {MessageData.channels.map((channel, index) => (
          <ListItem key={Object.keys(channel)[0]} disablePadding>
            <ListItemButton>
              <ListItemText primary={channel[0].name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Button variant="contained" onClick={() => {}}>
        Make Channel
      </Button>
    </Drawer>
  );
};

export default ChannelBox;
