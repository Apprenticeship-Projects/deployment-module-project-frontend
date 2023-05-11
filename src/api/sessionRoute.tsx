import { AxiosResponse } from "axios";
import { api } from "./api"

export async function getSession(email: string, password: string){
    const response = await api.post(`/session/`, {
        data: {"email": email, "password": password},
        withCredentials: true,
      });

    return response.status;
}