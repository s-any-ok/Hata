import {call, put} from '@redux-saga/core/effects';
import {
  ILogin,
  IRegistration,
  IResponse,
  ISagaWorkerRequest,
  ResponseGenerator,
} from '../../../common/types';
import {TokenHelper} from '../../../helpers';

import {AuthService} from '../../../services';
import {
  SetAuthLoadingAction,
  SetAuthTypeAction,
  SetIsAuthActionWorker,
  LoginActionWorker,
  SetAuthDataAction,
} from '../../actions';
import {LocalStorageHelper} from '../../../helpers/localStorage';

export function* LoginWorker(action: ISagaWorkerRequest<ILogin>) {
  try {
    yield put(SetAuthLoadingAction(true));
    const {userName, password} = action.payload;

    const loginResponse: ResponseGenerator<IResponse> = yield call(
      AuthService.login,
      {
        userName,
        password,
      },
    );
    if (loginResponse.data.success) {
      TokenHelper.saveToken(loginResponse.data.value.token);
      yield put(SetAuthDataAction({userName, password}));
      yield put(SetIsAuthActionWorker(true));
      yield put(SetAuthTypeAction('Login'));
    } else {
      console.log('!loginResponse', loginResponse.data.error);
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(SetAuthLoadingAction(false));
  }
}

export function* RegisterWorker(action: ISagaWorkerRequest<IRegistration>) {
  try {
    yield put(SetAuthLoadingAction(true));

    const {userName, password} = action.payload;
    console.log(userName, password);

    const registerResponse: ResponseGenerator<IResponse> = yield call(
      AuthService.register,
      {
        userName,
        password,
      },
    );
    if (registerResponse.data.success) {
      yield put(LoginActionWorker({userName, password}));
    } else {
      console.log('loginResponse', registerResponse.data);
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(SetAuthLoadingAction(false));
  }
}

export function* LogoutWorker() {
  try {
    yield put(SetIsAuthActionWorker(false));
    LocalStorageHelper.clear();
  } catch (err) {
    console.log(err);
  }
}
