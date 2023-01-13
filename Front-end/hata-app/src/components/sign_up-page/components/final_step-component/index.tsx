import * as React from 'react';
import {useHistory} from 'react-router';
import {RouteEnum} from '../../../../common/enum';
import {stylesJoint} from '../../../../helpers';
import styles from './styles.module.css';

export const FinalStepComponent = () => {
  let history = useHistory();
  const nextButtonHandler = () => {
    history.push(`${RouteEnum.USER_CABINET}`);
  };

  return (
    <div>
      <p className={styles.text}>
        Whether you've been riding with us or it's your first time, let's get
        your number
      </p>
      <div className={stylesJoint(styles.buttonWrapper)}>
        <button
          onClick={nextButtonHandler}
          className={stylesJoint(
            styles.hoverArrow,

            styles.btnBlack,
            styles.btn,
            styles.yellow,
          )}>
          go to profile
        </button>
      </div>
    </div>
  );
};
