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
  const messageData = useContext(MessageContext);

  return (
    <Drawer variant="permanent">
      <List>
        {Object.entries(messageData.channels).map(([key, channel]) => (
          <ListItem
            key={key}
            disablePadding
            onClick={(e) => {
              props.setActiveChannel(e.currentTarget.value);
            }}
          >
            <ListItemButton>
              <ListItemText primary={channel.name} />
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
