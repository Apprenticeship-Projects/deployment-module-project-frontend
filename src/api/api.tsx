import axios, { AxiosError, AxiosHeaders } from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_ORIGIN,
    withCredentials: true,
});
