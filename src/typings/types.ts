export interface UserData {
  username: string;
  email: string;
}

export interface UpdateUserData {
  //Interface to send data to update a user with.
  username?: string;
  email?: string;
  password?: string;
}

export interface ChannelInfoData {
  //Interface to hold data on one channel
  id: number;
  name: string;
}

export interface GetUserResponseData {
  //Interface of the response from get user route
  username: string;
  email: string;
  channels: ChannelInfoData[];
}

export interface CreateChannelData {
  //Interface to create a channel with.
  name: string;
  users: string[];
}

export interface UpdateChannelData {
  //Interface to update a channel with.
  name?: string;
  users?: string[];
}

export interface AlertError {
  error: boolean;
  message?: string;
}
