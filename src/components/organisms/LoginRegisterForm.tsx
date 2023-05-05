import React, { useState } from "react";
import { styled } from '@mui/system';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const FormBox = styled('div')({
    display: "flex",
    flexDirection: "column",
    width:"50%",
    alignItems: "stretch",
    justifyContent: "center",
    rowGap: "10px",
    margin: "20% auto"
})

const ButtonBox = styled('div')({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "10px",
    marginTop: "5px",
    marginBottom: "5px",
    width:"100%"
})

const LoginRegisterForm = () => {

  const [loginRegister, setLoginRegister] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");


  function handleClick(button: string){
    if(button !== loginRegister) setLoginRegister(button)
    else{
        return; //call api
    }
  }

  return <FormBox>
    <TextField id="username" label="username" autoComplete="Username" value={username} onChange={e => setUsername(e.target.value)} ></TextField>
    <TextField type="password" id="password" label="password" autoComplete="Password" value={password} onChange={e => setPassword(e.target.value)}></TextField>
    {loginRegister == "register" && <TextField type="password" id="verify" label="verify" autoComplete="Verify" value={verify} onChange={e => setVerify(e.target.value)} error={password!==verify} helperText={password!==verify && "Must match password"}></TextField>}
    <ButtonBox>
        <Button variant={loginRegister == "login" ? "contained" : "outlined"} onClick={()=>handleClick("login")}>Log in</Button>
        <Button variant={loginRegister == "register" ? "contained" : "outlined"} onClick={()=>handleClick("register")}>Register</Button>
    </ButtonBox>
  </FormBox>;
};

export default LoginRegisterForm;
