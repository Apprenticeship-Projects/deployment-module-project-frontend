import React, {useEffect, useState} from "react";
import { logout } from "../api/sessionRoute";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    logout().then(() => {
      setLoggedOut(true)
    }).catch(console.error)
  }, [])

  return (
    <div>
      {loggedOut && <Navigate to="/" />}
      <p>Logging out</p>
    </div>
  );
};

export default Logout;
