import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const $axios_base = axios.create({
  //withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
});
