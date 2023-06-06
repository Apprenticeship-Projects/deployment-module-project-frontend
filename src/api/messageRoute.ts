import {api} from "./api";

export async function getAllChannelMessages(channelId: number) {
  //Get all messages from specific channel
  const response = await api.get(`/message/${channelId}/all`, {
    withCredentials: true,
  });

  return response;
}

export async function getOneMessage(channelId: number, messageId: number) {
  //Get all messages
  const response = await api.get(`/message/${channelId}/${messageId}`, {
    withCredentials: true,
  });

  return response;
}

export async function postMessage(channelId: number, content: string) {
  const data = {channelId, content};
  const response = await api.post(`/message/`, data, {withCredentials: true});

  return response;
}

export async function deleteMessage(messageId: number) {
  const response = await api.delete(`/message/${messageId}`, {withCredentials: true});
  return response;
}
