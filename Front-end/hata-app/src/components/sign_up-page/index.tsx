import * as React from 'react';
import styles from './styles.module.css';
import {
  FinalStepComponent,
  FirstStepComponent,
  ProgressBarSection,
  SecondStepComponent,
} from './components';
import {useDispatch} from 'react-redux';
import {
  RegisterActionWorker,
  SetUserMainInfoActionWorker,
} from '../../store/actions';
import {TFieldValueState} from '../../common/types';

interface IRenderContent {
  reduceCurrentStep: () => void;
  increaseCurrentStep: () => void;
}

export const SignUpPage = () => {
  const dispatch = useDispatch();
  // field values
  const [values, setValues] = React.useState<TFieldValueState>({});
  const fields = {
    LOGIN: 'login',
    PASSWORD: 'password',
    REPEAT_PASSWORD: 'repeat_password',
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName',
    EMAIL: 'email',
  };

  const [currentStep, setCurrentStep] = React.useState<number>(1);
  const [maxSteps, setMaxSteps] = React.useState<number>(3);

  const reduceCurrentStep = () => {
    const currentStepValidator = (): number => {
      return currentStep - 1 < 0 ? currentStep : currentStep - 1;
    };
    setCurrentStep(currentStepValidator());
  };
  const increaseCurrentStep = () => {
    const currentStepValidator = (): number => {
      return currentStep + 1 > maxSteps ? currentStep : currentStep + 1;
    };
    setCurrentStep(currentStepValidator());
  };

  const registerAction = () => {
    dispatch(
      RegisterActionWorker({
        userName: values[`${fields.LOGIN}`],
        password: values[`${fields.PASSWORD}`],
      }),
    );
  };
  const setUserMainInfo = () => {
    dispatch(SetUserMainInfoActionWorker({email: values[`${fields.EMAIL}`]}));
  };

  const renderContent = ({
    reduceCurrentStep,
    increaseCurrentStep,
  }: IRenderContent) => {
    switch (currentStep) {
      case 1:
        return (
          <FirstStepComponent
            values={values}
            setValues={setValues}
            fields={fields}
            nextPressHandler={increaseCurrentStep}
            prevPressHandler={reduceCurrentStep}
            onFinish={registerAction}
          />
        );
      case 2:
        return (
          <SecondStepComponent
            values={values}
            setValues={setValues}
            fields={fields}
            nextPressHandler={increaseCurrentStep}
            prevPressHandler={reduceCurrentStep}
            onFinish={setUserMainInfo}
          />
        );
      case 3:
        return <FinalStepComponent />;
    }
  };
  return (
    <div className={styles.rootWrapper}>
      <div className={styles.contentWrapper}>
        <p className={styles.title}>Sign Up</p>
        <p className={styles.subTitle}>Reliable user in minutes</p>
        <ProgressBarSection currentStep={currentStep} maxSteps={maxSteps} />
        <div className={styles.authContentWrapper}>
          {renderContent({reduceCurrentStep, increaseCurrentStep})}
        </div>
      </div>
    </div>
  );
};
