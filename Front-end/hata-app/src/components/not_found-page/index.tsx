import * as React from 'react';
import notFound from '../../assets/images/not-found-page/bg.png';
import styles from './styles.module.css';
import {useHistory} from 'react-router';
import {RouteEnum} from '../../common/enum';

export const NotFoundPage = React.memo(() => {
  let history = useHistory();
  const redirect = () => {
    history.push(RouteEnum.HOME);
  };
  return (
    <div className={styles.rootWrapper}>
      <div className={styles.fullScreenImage}>
        <img alt={'not found'} src={notFound} />
        <div className={styles.contentWrapper}>
          <p className={styles.title}>404</p>
          <p className={styles.text}>
            The page you requested could not be found
          </p>
        </div>
      </div>
      <button className={styles.btn} onClick={redirect}>
        Back to home page
      </button>
    </div>
  );
});
