import axios, { AxiosError, AxiosHeaders } from "axios";
import * as dotenv from 'dotenv'

dotenv.config()

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_ORIGIN,
    withCredentials: true,
  });
