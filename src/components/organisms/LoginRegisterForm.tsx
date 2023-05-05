import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

const LoginRegisterForm = () => {

  const [loginRegister, setLoginRegister] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  function handleSubmit(){
    return;
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setLoginRegister(newValue);
  };

  return <Box sx={{
        display: "flex",
        flexDirection: "column",
        width:"50%",
        alignItems: "stretch",
        justifyContent: "center",
        rowGap: "10px",
        margin: "20% auto"
    }}>
    <Tabs value={loginRegister} onChange={handleChange}>
        <Tab label="Log in" {...a11yProps(0)} />
        <Tab label="Register" {...a11yProps(1)}/>
    </Tabs>
    <TextField id="username" label="username" autoComplete="Username" value={username} onChange={e => setUsername(e.target.value)} ></TextField>
    <TextField type="password" id="password" label="password" autoComplete="Password" value={password} onChange={e => setPassword(e.target.value)}></TextField>
    {loginRegister === 1 && <TextField type="password" id="verify" label="verify" autoComplete="Verify" value={verify} onChange={e => setVerify(e.target.value)} error={password!==verify} helperText={password!==verify && "Must match password"}></TextField>}
    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
  </Box>;
};

export default LoginRegisterForm;
