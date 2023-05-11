import { AxiosResponse } from "axios";
import { api } from "./api"
import { CreateChannelData } from "../typings/types";

export async function createChannel(channelData: CreateChannelData){
    //Create a channel.
    const response = await api.post(`/channel/create/`, {
        withCredentials: true,
        data: channelData
      });

    return response;
}