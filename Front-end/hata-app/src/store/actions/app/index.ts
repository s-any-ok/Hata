import {ActionTypes} from '../../../common/enum';
import {
  IAnnouncement,
  ISagaWorkerRequest,
  IUserMainInfo,
} from '../../../common/types';
import {IAction} from '../../../common/types/store/actions';

export const UpdateUserMainInfoAction = (
  payload: IUserMainInfo,
): IAction<IUserMainInfo> => {
  return {
    type: ActionTypes.UPDATE_USER_MAIN_INFO,
    payload,
  };
};

export const ClearUserMainInfo = (): IAction<null> => {
  return {
    type: ActionTypes.CLEAR_USER_MAIN_INFO,
  };
};

export const SetAllAnnouncementsAction = (
  payload: Array<IAnnouncement>,
): IAction<Array<IAnnouncement>> => {
  return {
    type: ActionTypes.SET_ALL_ANNOUNCEMENTS,
    payload,
  };
};

export const SetAllUserAnnouncementsAction = (
  payload: Array<IAnnouncement>,
): IAction<Array<IAnnouncement>> => {
  return {
    type: ActionTypes.SET_ALL_USER_ANNOUNCEMENTS,
    payload,
  };
};

// WORKERS

export const SetUserMainInfoActionWorker = (
  payload: IUserMainInfo,
): ISagaWorkerRequest<IUserMainInfo> => {
  return {
    type: ActionTypes.SET_USER_MAIN_INFO,
    payload,
  };
};

export const CreateAnnouncementActionWorker = (
  payload: IAnnouncement,
): ISagaWorkerRequest<IAnnouncement> => {
  return {
    type: ActionTypes.CREATE_ANNOUNCEMENT,
    payload,
  };
};

export const GetAllAnnouncementsActionWorker = (): IAction<
  Array<IAnnouncement>
> => {
  return {
    type: ActionTypes.GET_ALL_ANNOUNCEMENTS,
  };
};

export const GetAllAnnouncementsByIdActionWorker = (
  payload: number,
): ISagaWorkerRequest<number> => {
  return {
    type: ActionTypes.GET_USER_ANNOUNCEMENTS_BY_ID,
    payload,
  };
};

export const GetAllUserAnnouncementsActionWorker = (): IAction<
  Array<IAnnouncement>
> => {
  return {
    type: ActionTypes.GET_USER_ANNOUNCEMENTS,
  };
};
