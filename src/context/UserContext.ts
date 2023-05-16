import React from "react";
import {UserData} from "../typings/types";

const UserContext = React.createContext<UserData | null>(null);

export default UserContext;
