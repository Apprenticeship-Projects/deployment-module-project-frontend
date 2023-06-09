import React, {useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Alert from "@mui/material/Alert";
import {login} from "../../api/sessionRoute";
import {useNavigate} from "react-router-dom";
import {AlertError} from "../../typings/types";
import {registerUser} from "../../api/userRoute";

const LoginRegisterForm = () => {
  const navigate = useNavigate();

  const [loginRegister, setLoginRegister] = useState(0);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [verifyPassword, setVerifyPassword] = useState("");
  const [verifyPasswordError, setVerifiedPasswordError] = useState(false);
  const [loginError, setLoginError] = useState<AlertError>({error: false});
  const [registerError, setRegisterError] = useState<AlertError>({error: false});

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  async function handleSubmit(event: React.MouseEvent) {
    event.preventDefault();

    let errorLogin = false;
    let errorRegister = false;

    setEmailError(false);
    setUsernameError(false);
    setPasswordError(false);
    setVerifiedPasswordError(false);
    if (!email.includes("@")) {
      setEmailError(true);
      errorLogin = true;
      errorRegister = true;
    }
    if (username.length === 0) {
      setUsernameError(true);
      errorRegister = true;
    }
    if (password.length === 0) {
      setPasswordError(true);
      errorLogin = true;
      errorRegister = true;
    }
    if (verifyPassword.length === 0 || password !== verifyPassword) {
      setVerifiedPasswordError(true);
      errorRegister = true;
    }
    if (loginRegister === 0 && !errorLogin) {
      // Log in
      setLoginError({error: false});
      const response = await login(email, password);
      if (!response.error) {
        await navigate("/channels");
      } else {
        setEmailError(true);
        setPasswordError(true);
        setLoginError(response);
      }
    } else if (loginRegister === 1 && !errorRegister) {
      // Register
      setRegisterError({error: false});
      const response = await registerUser(username, email, password);
      if (!response.error) {
        const loginResponse = await login(email, password);
        if (!loginResponse.error) {
          await navigate("/channels");
        } else {
          setRegisterError({error: true, message: "An error occurred"});
        }
      } else {
        setEmailError(false);
        setUsernameError(false);
        setPasswordError(false);
        setVerifiedPasswordError(false);
        setRegisterError(response);
      }
    }
    return;
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setLoginRegister(newValue);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "90%",
        maxWidth: "500px",
        alignItems: "stretch",
        justifyContent: "center",
        rowGap: "10px",
      }}
    >
      <Tabs value={loginRegister} onChange={handleChange}>
        <Tab label="Log in" {...a11yProps(0)} />
        <Tab label="Register" {...a11yProps(1)} />
      </Tabs>
      {loginRegister === 0 && loginError.error && (
        <Alert severity="error">{loginError.message}</Alert>
      )}
      {loginRegister === 1 && registerError.error && (
        <Alert severity="error">{registerError.message}</Alert>
      )}
      <TextField
        type="email"
        id="email"
        label="email"
        autoComplete="Email"
        required
        error={emailError}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextField>
      <TextField
        type="password"
        id="password"
        label="password"
        autoComplete="Password"
        required
        error={passwordError}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextField>
      {loginRegister === 1 && (
        <TextField
          type="password"
          id="verify password"
          label="verify password"
          autoComplete="Verify Password"
          required
          error={verifyPasswordError}
          value={verifyPassword}
          onChange={(e) => setVerifyPassword(e.target.value)}
          helperText={verifyPasswordError && "Must match password"}
        ></TextField>
      )}
      {loginRegister === 1 && (
        <TextField
          id="username"
          label="username"
          autoComplete="Username"
          required
          error={usernameError}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></TextField>
      )}
      <Button variant="contained" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default LoginRegisterForm;
