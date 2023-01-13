import * as React from 'react';
import styles from './styles.module.css';
import {LogInFormComponent} from './components';

export const LogInPage = () => (
  <div className={styles.rootWrapper}>
    <div className={styles.contentWrapper}>
      <p className={styles.title}>Log in</p>
      <div className={styles.authContentWrapper}>
        <LogInFormComponent />
      </div>
    </div>
  </div>
);
