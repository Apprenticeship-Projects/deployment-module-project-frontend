import {api} from "./api";
import {GetUserResponseData, UpdateUserData} from "../typings/types";

export async function registerUser(username: string, email: string, password: string) {
  const response = await api.post(
    `/user/register`,
    {username: username, password: password, email: email});

  return response.status;
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
