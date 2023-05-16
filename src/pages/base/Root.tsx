import React, {useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";
import {UserData} from "../../typings/types";
import SocketProvider from "../../components/providers/SocketProvider";
import UserContext from "../../context/UserContext";
import { getUser } from "../../api/userRoute";

const Root = () => {
  const location = useLocation();
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    getUser().then((response) => {
      setUser(response.data)
    });
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
