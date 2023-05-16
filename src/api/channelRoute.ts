import {api} from "./api";
import {CreateChannelData, UpdateChannelData} from "../typings/types";

export async function createChannel(channelData: CreateChannelData) {
  //Create a channel.
  const response = await api.post(`/channel/create/`, channelData, {
    withCredentials: true,
  });

  return response;
}

export async function getChannel(id: number) {
  //Create a channel.
  const response = await api.get(`/channel/${id}/`, {
    withCredentials: true,
  });

  return response;
}

export async function updateChannel(id: number, updateData: UpdateChannelData) {
  //Create a channel.
  const response = await api.put(`/channel/${id}/`, updateData, {
    withCredentials: true,
  });

  return response;
}

export async function deleteChannel(id: number) {
  //Create a channel.
  const response = await api.delete(`/channel/${id}/`, {
    withCredentials: true,
  });

  return response;
}
