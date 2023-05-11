import { AxiosResponse } from "axios";
import { api } from "./api"

export async function getSession(email: string, password: string){
    //Get a session token from the backend
    const response = await api.post(`/session/`, 
        {"email": email, "password": password},
        {withCredentials: true}
      );

    return response.status;
}

export async function deleteSession(){
    //Delete the session
    const response = await api.delete(`/session/`, {});

    return response.status;
}