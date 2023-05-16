import React, {useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";
import {UserData} from "../../typings/types";
import SocketProvider from "../../components/providers/SocketProvider";
import UserContext from "../../context/UserContext";

const Root = () => {
  const location = useLocation();
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {}, [location]);

  return (
    <UserContext.Provider value={user}>
      <SocketProvider>
        <Outlet />
      </SocketProvider>
    </UserContext.Provider>
  );
};

export default Root;
