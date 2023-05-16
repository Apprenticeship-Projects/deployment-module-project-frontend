import {api} from "./api";
import axios from "axios";

export async function getSession(email: string, password: string) {
  //Get a session token from the backend
  try {
    await api.post(`/session/`, {email: email, password: password}, {withCredentials: true});
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      if (err.response?.status === 401) {
        return {error: true, message: "Incorrect email or password"};
      }
    }
    return {error: true, message: "An unknown error occurred"};
  }
  return {error: false};
}

export async function deleteSession() {
  //Delete the session
  const response = await api.delete(`/session/`, {});

  return response.status;
}
