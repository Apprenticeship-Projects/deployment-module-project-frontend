import { AxiosResponse } from "axios";
import { api } from "./api"
import { UpdateUserData } from "../typings/types";

export async function registerUser(username: string, email: string, password: string){
    const response = await api.post(`/user/register`, 
        {"username": username, "password": password, "email": email},
        {withCredentials: true}
        );

    return response.status;
}

export async function getUser(){
    const response = await api.get(`/user/me`, {
        withCredentials: true,
      });

    return response;
}

export async function patchUser(data: UpdateUserData){
    const response = await api.patch(`/user/me`, data, {
        withCredentials: true,
      });

    return response.status;
}

export async function deleteUser(){
    const response = await api.delete(`/user/me`, {
        withCredentials: true,
      });

    return response.status;
}