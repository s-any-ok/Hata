import * as React from 'react';
import {stylesJoint} from '../../../../helpers';
import styles from './styles.module.css';
import {RouteEnum} from '../../../../common/enum';
export const FullBannerSection = React.memo(() => {
  return (
    <div className={stylesJoint(styles.fullBanner, styles.fullBackground)}>
      <div className={styles.fullBannerWrapper}>
        <div className={styles.fullBannerTitle}>
          <p>Not sure where to go? Perfect.</p>
        </div>
        <div className={styles.fullBannerForm}>
          <a
            href={RouteEnum.FLATS}
            className={stylesJoint(styles.btn, styles.btnWhite)}>
            I'm flexible
          </a>
        </div>
      </div>
    </div>
  );
});
