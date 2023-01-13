import * as React from 'react';
import styles from './styles.module.css';
import {Profile} from '../../../common';
import {stylesJoint} from '../../../../helpers';
import {useDispatch, useSelector} from 'react-redux';
import {LogoutActionWorker} from '../../../../store/actions';
import {useHistory} from 'react-router';
import {RouteEnum} from '../../../../common/enum';
import {TRootState} from '../../../../store/reducers';

export const ProfileSection = ({OnEditProfile}: any) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {userName} = useSelector((state: TRootState) => ({
    userName: state.auth.userName,
  }));

  const onLogout = () => {
    dispatch(LogoutActionWorker());
    history.push(`${RouteEnum.HOME}`);
  };
  return (
    <div className={styles.rootWrapper}>
      <h3 className={styles.title}>Profile</h3>
      <Profile name={userName} joinYear={2021} OnEditProfile={OnEditProfile} />
      <div className={styles.logoutContainer}>
        <button
          onClick={onLogout}
          className={stylesJoint(styles.btn, styles.btnWhite)}>
          Log out
        </button>
      </div>
    </div>
  );
};
