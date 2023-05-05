import React, { useState } from "react";
import { styled } from '@mui/system';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const ChatBox = () => {

  const [message, setMessage] = useState("");

  return <Box sx={{display:"flex", flexDirection:"column", alignItems:"space-between", justifyContent:"flex-end"}}>
        <Box sx={{height:"750px"}}>
            { /** messages processed here*/}
        </Box>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <TextField sx={{width:"100%"}}id="message-input" label="Message" autoComplete="Message" value={message} onChange={e => setMessage(e.target.value)} />
            </Grid>
            <Grid item xs={2}>
                <Button sx={{width:"100%", height:"100%"}} variant="contained" onClick={()=> {}}>Send</Button>
            </Grid> 
        </Grid>
    </Box>
  ;
};

export default ChatBox;