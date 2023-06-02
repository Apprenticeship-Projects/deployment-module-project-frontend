import {api} from "./api";
import {GetUserResponseData, UpdateUserData} from "../typings/types";
import axios from "axios";

export async function registerUser(username: string, email: string, password: string) {
  try {
    await api.post(`/user/register`, {username: username, password: password, email: email});
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      const message = err.response?.data.message;
      if (message != null) {
        return {error: true, message};
      }
    }
    return {error: true, message: "An error occurred"};
  }
  return {error: false};
}

export async function getUser() {
  const response = await api.get<GetUserResponseData>(`/user/me`);

  return response;
}

export async function patchUser(data: UpdateUserData) {
  const response = await api.patch(`/user/me`, data);

  return response.status;
}

export async function deleteUser() {
  const response = await api.delete(`/user/me`);

  return response.status;
}
