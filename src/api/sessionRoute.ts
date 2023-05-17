import {api} from "./api";
import axios from "axios";

export async function getSession() {
  const response = await api.get<{
    id: string;
    loggedIn: boolean;
  }>("/session")
  return response.data
}

export async function login(email: string, password: string) {
  //Get a session token from the backend
  try {
    await api.post(`/session/`, {email: email, password: password});
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

export async function logout() {
  //Delete the session
  const response = await api.delete(`/session/`, {});

  return response.status;
}
