import { AxiosResponse } from "axios";
import { api } from "./api"

export async function registerUser(username: string, email: string, password: string){
    const response = await api.post(`user/register`, {
        data: {"username": username, "password": password, "email": email},
        withCredentials: true,
      });

    return response.status;
}