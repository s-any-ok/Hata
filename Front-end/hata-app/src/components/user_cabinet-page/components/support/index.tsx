import * as React from 'react';
import {stylesJoint} from '../../../../helpers';

import {FAQComponent} from './components';
import styles from './styles.module.css';

export const ContactSection = () => {
  return (
    <div className={styles.rootWrapper}>
      <h3 className={styles.title}>Support</h3>
      <div className={styles.textAreaWrapper}>
        <p className={styles.label}>How can we help you?</p>
        <textarea placeholder={'Comment'} />
      </div>
      <button className={styles.btn}>Send</button>
      <p className={stylesJoint(styles.text, styles.sectionMargin)}>
        Frequently asked Questions
      </p>
      <FAQComponent />
    </div>
  );
};
