import React, {useContext, useState} from "react";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import UserContext from "../../context/UserContext";
import ChannelContext from "../../context/ChannelContext";
import {Box} from "@mui/material";
import {drawerWidth, navHeight} from "../../constants/sizes";

interface Props {
  window?: () => Window;
}

const ChannelBox = (props: Props) => {
  const activeChannel = useContext(ChannelContext);
  const user = useContext(UserContext);

  const {window} = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const drawer = (
    <>
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
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{keepMounted: true}}
        sx={{
          display: {xs: "block", sm: "none"},
          "& .MuiDrawer-paper": {boxSizing: "border-box", width: drawerWidth},
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: {xs: "none", sm: "block"},
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            marginTop: `${navHeight}px`,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default ChannelBox;
