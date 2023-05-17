import React, {useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";
import {GetUserResponseData} from "../../typings/types";
import SocketProvider from "../../components/providers/SocketProvider";
import UserContext from "../../context/UserContext";
import { getUser } from "../../api/userRoute";
import { getSession } from "../../api/sessionRoute";

const Root = () => {
  const location = useLocation();
  const [user, setUser] = useState<GetUserResponseData | null>(null);

  useEffect(() => {
    getSession()
      .then(session => {
        if (!session.loggedIn) {
          return
        }
        return getUser()
      }, () => {return})
      .then((response) => {
        if (!response) return;
        
        setUser(response.data)
      })
      .catch(console.error);
  }, [location]);

  return (
    <UserContext.Provider value={user}>
      <SocketProvider>
        <Outlet />
      </SocketProvider>
    </UserContext.Provider>
  );
};

export default Root;
