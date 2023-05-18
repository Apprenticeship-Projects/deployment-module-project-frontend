import React, {useEffect, useState} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {GetUserResponseData} from "../../typings/types";
import SocketProvider from "../../components/providers/SocketProvider";
import UserContext from "../../context/UserContext";
import {getUser} from "../../api/userRoute";
import {getSession} from "../../api/sessionRoute";
import HeaderAppBar from "../../components/organisms/HeaderAppBar";

const Root = () => {
  const location = useLocation();
  const [user, setUser] = useState<GetUserResponseData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getSession()
      .then(
        (session) => {
          if (!session.loggedIn) {
            if (location.pathname !== "/") {
              navigate("/");
            }
            return;
          }
          return getUser();
        },
        () => {
          return;
        }
      )
      .then((response) => {
        if (!response) return;

        setUser(response.data);
      })
      .catch(console.error);
  }, [location, navigate]);

  return (
    <UserContext.Provider value={user}>
      <HeaderAppBar />
      <SocketProvider>
        <Outlet />
      </SocketProvider>
    </UserContext.Provider>
  );
};

export default Root;
