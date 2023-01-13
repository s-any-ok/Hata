import {createReducer, current} from '@reduxjs/toolkit';
import {ActionTypes} from '../../../common/enum';
import {IAnnouncement, IGenderType, IUserMainInfo} from '../../../common/types';
import {IAction} from '../../../common/types/store/actions';

export interface IInitialState {
  userName?: string;
  firstName?: string;
  secondName?: string;
  university?: string;
  faculty?: string;
  course?: number;
  bio?: string;
  birthDay?: string;
  email?: string;
  genderType?: IGenderType;
  joinedDate?: string;
  announcements?: Array<IAnnouncement>;
  userAnnouncements?: Array<IAnnouncement>;
}

const initialState: IInitialState = {
  userName: '',
  firstName: '',
  secondName: '',
  university: '',
  faculty: '',
  course: 0,
  bio: '',
  birthDay: '',
  genderType: 'None',
  email: '',
  joinedDate: '',
  announcements: [],
  userAnnouncements: [],
};

export const appReducer = createReducer(initialState, builder => {
  builder.addCase(
    ActionTypes.UPDATE_USER_MAIN_INFO,
    (state, action: IAction<IUserMainInfo>) => {
      let data = {...current(state), ...action.payload};
      state.userName = data.userName;
      state.firstName = data.firstName;
      state.secondName = data.secondName;
      state.email = data.email;
      state.university = data.university;
      state.course = data.course;
      state.joinedDate = data.joinedDate;
    },
  );
  builder.addCase(ActionTypes.CLEAR_USER_MAIN_INFO, state => (state = {}));
  builder.addCase(
    ActionTypes.SET_ALL_ANNOUNCEMENTS,
    (state, action: IAction<Array<IAnnouncement>>) => {
      state.announcements = action.payload;
    },
  );
  builder.addCase(
    ActionTypes.SET_ALL_USER_ANNOUNCEMENTS,
    (state, action: IAction<Array<IAnnouncement>>) => {
      state.userAnnouncements = action.payload;
    },
  );
});
