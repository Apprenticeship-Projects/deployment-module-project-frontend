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
  const [checked, setChecked] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navigate = useNavigate();

  useEffect(() => {
    getSession()
      .then(
        (session) => {
          if (!session.loggedIn) return;
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
      .catch(console.error)
      .finally(() => {
        setChecked(true);
      });
  }, [location, navigate]);

  return (
    <UserContext.Provider
      value={{
        data: user,
        checked,
        logout: () => {
          navigate("/logout");
        },
      }}
    >
      <HeaderAppBar handleDrawerToggle={handleDrawerToggle} />
      <SocketProvider>
        <Outlet context={{mobileOpen, handleDrawerToggle}} />
      </SocketProvider>
    </UserContext.Provider>
  );
};

export default Root;
