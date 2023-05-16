import React from "react";
import {GetUserResponseData} from "../typings/types";

const UserContext = React.createContext<GetUserResponseData | null>(null);

export default UserContext;
