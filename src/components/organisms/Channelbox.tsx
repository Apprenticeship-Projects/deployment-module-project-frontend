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
import UserContext from "../../context/UserContext";

const ChannelBox = (props: ChannelBoxProps) => {
  const userData = useContext(UserContext);

  return (
    <Drawer variant="permanent">
      <List>
        {userData?.channels.map((channel) => (
          <ListItem
            key={channel.id}
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
