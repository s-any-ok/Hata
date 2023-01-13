import {combineReducers} from 'redux';
import {appReducer} from './app';
import {authReducer} from './auth';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

//type of root reducer
export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
