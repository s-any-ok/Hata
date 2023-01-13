import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {dispatch} from '../../../store/store';
import dotenv from 'dotenv';
import {LocalStorageConstants} from '../../../common/constants/local-storage';
import {LogoutActionWorker} from '../../../store/actions';

dotenv.config();

export const $axios_auth = axios.create({
  //withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
});

$axios_auth.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    LocalStorageConstants.ACCESS_TOKEN,
  )}`;
  return config;
});

$axios_auth.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  async (error: AxiosError) => {
    const originRequest = error.config;
    if (error.response.status === 401) {
      try {
        // const response: IResponse = await $axios_auth.post(
        //   `${process.env.REACT_APP_BASE_URL}${EndpointEnum.UPDATE_ACCESS_TOKEN}`,
        //   {
        //     body: {
        //       grant_type: 'refresh_token',
        //     },
        //
        //     //withCredentials: true,
        //   },
        //   /*{
        //     headers: {
        //       'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //   },*/
        // );
        // TokenHelper.saveToken(response.value.token);
        return $axios_auth.request(originRequest);
      } catch (err: any) {
        if (err.response.status === 400) {
          //logout
          dispatch(LogoutActionWorker());
        } else {
          console.log('Unhandled error');
        }
      }
    }
    if (error.response.status === 400) {
      //logout
      dispatch(LogoutActionWorker());
    }
  },
);

export default $axios_auth;
export const p: any = null;
