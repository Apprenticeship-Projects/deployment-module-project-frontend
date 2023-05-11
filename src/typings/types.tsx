export interface UpdateUserData {
    //Interface to send data to update a user with.
    username?: string;
    email?: string;
    password?: string;
}

export interface ChannelInfoData{
    //Interface to hold data on one channel
    id: number,
    name: string,
}

export interface GetUserResponseData {
    //Interface of the response from get user route
    username: string;
    email: string;
    channels: ChannelInfoData[];
}