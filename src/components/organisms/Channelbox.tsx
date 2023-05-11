import React, { useState } from "react";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from "@mui/material/Divider";

const ChannelBox = () => {

  return <Drawer variant="permanent">
        <List>
        {['Global', 'Channel 1', 'Channel 2', 'Channel 3'].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
        <Button variant="contained" onClick={()=> {}}>Make Channel</Button>
    </Drawer>
  
};

export default ChannelBox;