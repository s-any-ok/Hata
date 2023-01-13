import {ActionTypes} from '../../../common/enum';
import {ILogin, IRegistration, ISagaWorkerRequest} from '../../../common/types';
import {IAuthData, TAuthType} from '../../../common/types/redux/reducers/auth';
import {IAction} from '../../../common/types/store/actions';

export const SetAuthLoadingAction = (loading: boolean): IAction<boolean> => {
  return {
    type: ActionTypes.SET_AUTH_LOADING,
    payload: loading,
  };
};

export const SetAuthTypeAction = (data: TAuthType): IAction<TAuthType> => {
  return {
    type: ActionTypes.SET_AUTH_TYPE,
    payload: data,
  };
};

export const SetAuthDataAction = (data: IAuthData): IAction<IAuthData> => {
  return {
    type: ActionTypes.SET_AUTH_DATA,
    payload: data,
  };
};

// WORKERS

export const SetIsAuthActionWorker = (
  isAuth: boolean,
): ISagaWorkerRequest<boolean> => {
  return {
    type: ActionTypes.SET_IS_AUTH,
    payload: isAuth,
  };
};

export const LoginActionWorker = (data: ILogin): ISagaWorkerRequest<ILogin> => {
  return {
    type: ActionTypes.LOGIN,
    payload: data,
  };
};

export const RegisterActionWorker = (
  data: IRegistration,
): ISagaWorkerRequest<IRegistration> => {
  return {
    type: ActionTypes.REGISTER,
    payload: data,
  };
};

export const LogoutActionWorker = (): ISagaWorkerRequest<null> => {
  return {
    payload: null,
    type: ActionTypes.LOGOUT,
  };
};
