export interface IApiRequest<T> {
  success: boolean;
  value: T;
  error: {
    errorCode: string;
    validationErrors: Array<string>;
  };
}
export interface ISagaWorkerRequest<T> {
  type: string;
  payload: T;
}
export interface ResponseGenerator<T> {
  config?: any;
  data?: T;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
export interface IUpdateTokenResponse {}
export type IGenderType = 'Male' | 'FeMale' | 'Other' | 'None';
