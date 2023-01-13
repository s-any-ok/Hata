import * as React from 'react';
import styles from './styles.module.css';
import {stylesJoint} from '../../../helpers';

export const Profile = React.memo(
  ({containerStyle, name, joinYear, image = null, OnEditProfile}: any) => {
    return (
      <div className={stylesJoint(styles.profileContainer, containerStyle)}>
        <div className={styles.profileContainerCol}>
          <img
            src={
              image == null
                ? 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3'
                : image
            }
            className={styles.profileImage}
            alt={''}
          />
          <p className={styles.profileImageText}>Update photo</p>
        </div>
        <div className={styles.profileContainerCol}>
          <div className={styles.profileContent}>
            <h1 className={styles.profileContentTitle}>Hi, I’m {name}</h1>
            <p className={styles.profileContentJoined}>Joined in {joinYear}</p>
            <a onClick={OnEditProfile} className={styles.profileContentEdit}>
              Edit profile
            </a>
          </div>
        </div>
      </div>
    );
  },
);
