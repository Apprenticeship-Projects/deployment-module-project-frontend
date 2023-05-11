import { AxiosResponse } from "axios";
import { api } from "./api"

export async function getAllChannelMessages(channelId: number){
    //Get all messages from specific channel
    const response = await api.get(`/message/${channelId}`, {
        withCredentials: true,
      });

    return response;
}

export async function getOneMessage(channelId: number, messageId: number){
    //Get all messages
    const response = await api.get(`/message/${channelId}/${messageId}`, {
        withCredentials: true,
      });

    return response;
}
