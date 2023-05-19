import React, {useContext} from "react";
import UserContext from "../../context/UserContext";
import {Navigate} from "react-router-dom";

const PageProtection = ({children}: {children: React.ReactNode}) => {
  const user = useContext(UserContext);
  return (
    <>
      {user.checked && !user.data && <Navigate to="/" />}
      {user.checked && user.data && children}
    </>
  );
};

export default PageProtection;
