import React, {useContext} from "react";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import UserContext from "../../context/UserContext";
import ChannelContext from "../../context/ChannelContext";

const ChannelBox = () => {
  const activeChannel = useContext(ChannelContext);
  const user = useContext(UserContext);

  return (
    <Drawer variant="permanent" sx={{[`& .MuiDrawer-paper`]: {top: "64px"}}}>
      <List>
        {user.data?.channels.map((channel) => (
          <ListItem
            key={channel.id}
            disablePadding
            onClick={(e) => {
              activeChannel.set(channel.id);
            }}
          >
            <ListItemButton selected={activeChannel.id === channel.id}>
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
