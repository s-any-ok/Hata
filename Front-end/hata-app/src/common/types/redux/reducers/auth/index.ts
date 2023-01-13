export type TAuthType = 'Login' | 'Registration';

export interface IAuthReducer {
  isAuth: boolean;
  loading: boolean;
  authType?: TAuthType;

  userName: string;
  password: string;
}

export interface IAuthData {
  userName: string;
  password: string;
}
