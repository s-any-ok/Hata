import {takeEvery} from 'redux-saga/effects';
import {ActionTypes} from '../../common/enum';
import {LoginWorker, LogoutWorker, RegisterWorker} from './auth';
import {
  CreateAnnouncementWorker,
  GetAllAnnouncementsWorker,
  GetUserAnnouncementsWorker,
  GetUserMainInfoWorker,
  SetUserMainInfoWorker,
} from './app';

export function* rootSaga() {
  yield takeEvery(ActionTypes.SET_USER_MAIN_INFO, SetUserMainInfoWorker);
  yield takeEvery(ActionTypes.GET_USER_MAIN_INFO, GetUserMainInfoWorker);

  yield takeEvery(ActionTypes.LOGIN, LoginWorker);
  yield takeEvery(ActionTypes.LOGOUT, LogoutWorker);
  yield takeEvery(ActionTypes.REGISTER, RegisterWorker);

  yield takeEvery(ActionTypes.CREATE_ANNOUNCEMENT, CreateAnnouncementWorker);
  yield takeEvery(ActionTypes.GET_ALL_ANNOUNCEMENTS, GetAllAnnouncementsWorker);
  yield takeEvery(
    ActionTypes.GET_USER_ANNOUNCEMENTS,
    GetUserAnnouncementsWorker,
  );
}
