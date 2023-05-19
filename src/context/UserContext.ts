import React from "react";
import {GetUserResponseData} from "../typings/types";

const UserContext = React.createContext<{
  data: GetUserResponseData | null;
  logout: () => void;
  checked: boolean;
}>({
  data: null,
  logout: () => {},
  checked: false,
});

export default UserContext;
