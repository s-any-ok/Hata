import {createReducer} from '@reduxjs/toolkit';
import {ActionTypes} from '../../../common/enum';
import {
  IAuthData,
  IAuthReducer,
} from '../../../common/types/redux/reducers/auth';
import {IAction} from '../../../common/types/store/actions';

const initialState: IAuthReducer = {
  isAuth: false,
  loading: false,
  authType: undefined,

  userName: '',
  password: '',
};

export const authReducer = createReducer(initialState, builder => {
  builder.addCase(
    ActionTypes.SET_IS_AUTH,
    (state, action: IAction<boolean>) => {
      state.isAuth = action.payload;
    },
  );
  builder.addCase(
    ActionTypes.SET_AUTH_LOADING,
    (state, action: IAction<boolean>) => {
      state.loading = action.payload;
    },
  );
  builder.addCase(ActionTypes.SET_AUTH_TYPE, (state, action: IAction<any>) => {
    state.authType = action.payload;
  });
  builder.addCase(
    ActionTypes.SET_AUTH_DATA,
    (state, action: IAction<IAuthData>) => {
      state.userName = action.payload.userName;
      state.password = action.payload.password;
    },
  );
});
