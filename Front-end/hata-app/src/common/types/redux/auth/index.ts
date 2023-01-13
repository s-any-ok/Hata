export interface IAcessTokenUpdateResponse {
  token: string;
}
export interface IResponse {
  value: IAcessTokenUpdateResponse | any;
  success: boolean;
  error: any;
}

export interface IRegistration {
  userName: string;
  password: string;
}

export interface ILogin {
  userName: string;
  password: string;
}
