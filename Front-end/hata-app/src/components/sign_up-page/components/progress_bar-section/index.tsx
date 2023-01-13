import * as React from 'react';
import stepEmptyImg from '../../../../assets/images/sign-up/step-empty.svg';
import stepFillImg from '../../../../assets/images/sign-up/step_fill.svg';
import stepCheckMarkEmpty from '../../../../assets/images/sign-up/step-empty-check-mark.svg';
import stepCheckMarkFill from '../../../../assets/images/sign-up/step-fill-check-mark.svg';
import 'react-step-progress-bar/styles.css';
import styles from './styles.module.css';

interface IProgressBarSection {
  currentStep: number;
  maxSteps: number;
}
export const ProgressBarSection = ({
  currentStep,
  maxSteps,
}: IProgressBarSection) => {
  const renderSteps = () => {
    const stepsArr = new Array(maxSteps - 1).fill(null);
    return stepsArr.map((step, index) => {
      if (index < currentStep - 1) {
        if (index === maxSteps - 2) {
          return (
            <div key={index} className={styles.step}>
              <img src={stepCheckMarkFill} alt={'step'} />
            </div>
          );
        }
        return (
          <div key={index} className={styles.step}>
            <img src={stepFillImg} alt={'step'} />
          </div>
        );
      }
      if (index === maxSteps - 1) {
        return (
          <div key={index} className={styles.step}>
            <img src={stepCheckMarkEmpty} alt={'step'} />
          </div>
        );
      }
      return (
        <div key={index} className={styles.step}>
          <img src={stepEmptyImg} alt={'step'} />
        </div>
      );
    });
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.progressBar}>{renderSteps()}</div>
      </div>
    </>
  );
};
