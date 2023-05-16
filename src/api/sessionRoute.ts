import {api} from "./api";

export async function getSession(email: string, password: string) {
  //Get a session token from the backend
  try {
    await api.post(`/session/`, {email: email, password: password}, {withCredentials: true});
  } catch {
    return false;
  }
  return true;
}

export async function deleteSession() {
  //Delete the session
  const response = await api.delete(`/session/`, {});

  return response.status;
}
