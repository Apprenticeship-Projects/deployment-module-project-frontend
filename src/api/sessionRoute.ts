import {api} from "./api";
import axios from "axios";

export async function getSession() {
  const response = await api.get<{
    id: string;
    loggedIn: boolean;
  }>("/session");
  return response.data;
}

export async function login(email: string, password: string) {
  //Get a session token from the backend
  try {
    await api.post(`/session`, {email: email, password: password});
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      if (err.response?.status === 401) {
        return {error: true, message: "Incorrect email or password"};
      }
    }
    return {error: true, message: "An error occurred"};
  }
  return {error: false};
}

export async function logout() {
  //Delete the session
  try {
    await api.delete(`/session`, {});
  } catch {
    return {error: true, message: "An error occurred"};
  }
  return {error: false};
}
