import {call, put} from '@redux-saga/core/effects';
import {
  IAnnouncement,
  IResponse,
  ISagaWorkerRequest,
  ISetMainUserInfoRequest,
  ResponseGenerator,
} from '../../../common/types';
import {AppService} from '../../../services';
import {
  SetAllAnnouncementsAction,
  SetAllUserAnnouncementsAction,
  SetAuthLoadingAction,
  UpdateUserMainInfoAction,
} from '../../actions';

export function* SetUserMainInfoWorker(
  action: ISagaWorkerRequest<ISetMainUserInfoRequest>,
) {
  try {
    yield put(SetAuthLoadingAction(true));
    const {payload} = action;
    const response: ResponseGenerator<IResponse> = yield call(
      AppService.setUserMainInfo,
      {...payload},
    );

    if (response.data.success) {
      yield put(UpdateUserMainInfoAction({...payload}));
    } else {
      console.log('SetUserMainInfo', response.data);
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(SetAuthLoadingAction(false));
  }
}

export function* GetUserMainInfoWorker() {
  try {
    yield put(SetAuthLoadingAction(true));
    const response: ResponseGenerator<IResponse> = yield call(
      AppService.getUserMainInfo,
    );

    if (response.data.success) {
      yield put(UpdateUserMainInfoAction({...response.data.value}));
    } else {
      console.log('SetUserMainInfo', response.data);
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(SetAuthLoadingAction(false));
  }
}

export function* CreateAnnouncementWorker(
  action: ISagaWorkerRequest<IAnnouncement>,
) {
  try {
    yield put(SetAuthLoadingAction(true));
    const {payload} = action;
    console.log('CreateAnnouncementWorker payload', payload);
    const response: ResponseGenerator<IResponse> = yield call(
      AppService.createAnnouncement,
      {...payload},
    );

    if (response.data.success) {
      console.log('CreateAnnouncementWorker', response.data);
      //yield put(UpdateUserMainInfoAction({...payload}));
    } else {
      console.log('CreateAnnouncementWorker', response.data);
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(SetAuthLoadingAction(false));
  }
}

export function* GetAllAnnouncementsWorker() {
  try {
    yield put(SetAuthLoadingAction(true));
    console.log('GetAllAnnouncementsWorker payload');
    const response: ResponseGenerator<IResponse> = yield call(
      AppService.getAllAnnouncements,
    );

    if (response.data.success) {
      console.log('GetAllAnnouncementsWorker', response.data);
      yield put(SetAllAnnouncementsAction([...response.data.value]));
    } else {
      console.log('GetAllAnnouncementsWorker', response.data);
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(SetAuthLoadingAction(false));
  }
}

export function* GetAnnouncementsByIdWorker(
  action: ISagaWorkerRequest<number>,
) {
  try {
    yield put(SetAuthLoadingAction(true));
    console.log('GetAnnouncementsByIdWorker payload');
    const response: ResponseGenerator<IResponse> = yield call(
      AppService.getAnnouncementsByUserId,
      action.payload,
    );

    if (response.data.success) {
      console.log('GetAnnouncementsByIdWorker', response.data);
      //yield put(SetAllUserAnnouncementsAction([...response.data.value]));
    } else {
      console.log('GetAnnouncementsByIdWorker', response.data);
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(SetAuthLoadingAction(false));
  }
}

export function* GetUserAnnouncementsWorker() {
  try {
    yield put(SetAuthLoadingAction(true));
    console.log('GetUserAnnouncementsWorker payload');
    const response: ResponseGenerator<IResponse> = yield call(
      AppService.getUserAnnouncements,
    );

    if (response.data.success) {
      console.log('GetUserAnnouncementsWorker', response.data);
      yield put(SetAllUserAnnouncementsAction([...response.data.value]));
    } else {
      console.log('GetUserAnnouncementsWorker', response.data);
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(SetAuthLoadingAction(false));
  }
}
