import * as React from 'react';
import {
  TFieldErrorsState,
  TFieldTouchedState,
  TFieldValueState,
} from '../../../../common/types';
import {
  stringNameValidation,
  passwordValidation,
} from '../../../../common/validators';
import {isEmpty, stylesJoint} from '../../../../helpers';
import {PlaneInputComponent} from '../../../common';
import styles from './styles.module.css';

interface IFourthStepComponent {
  nextPressHandler: () => void;
  prevPressHandler: () => void;
  setValues: any;
  values: any;
  fields: any;
  onFinish: () => void;
}

export const FirstStepComponent = ({
  nextPressHandler,
  prevPressHandler,
  fields,
  values,
  setValues,
  onFinish,
}: IFourthStepComponent) => {
  // field validation errors
  const [errors, setErrors] = React.useState<TFieldErrorsState>({});
  // field is touched state
  const [touched, setTouched] = React.useState<TFieldTouchedState>({});
  // not corresponds to TFieldValidationFunction signature
  const passwordComporator = (password: string): Array<string> | null => {
    let errors: Array<string> = [];
    if (!values[fields.PASSWORD]) {
      errors.push('Input password before repeat it');
    }
    if (values[fields.PASSWORD] !== password) {
      errors.push('Incorrect password');
    }
    return errors.length === 0 ? null : errors;
  };
  const validate = {
    [`${fields.LOGIN}`]: (login: string) =>
      stringNameValidation('Login', login),
    [`${fields.PASSWORD}`]: (password: string) =>
      passwordValidation('Password', password),
    [`${fields.REPEAT_PASSWORD}`]: (password: string) =>
      passwordComporator(password),
  };
  const nextButtonPressHandler = () => {
    if (isEmpty(errors)) {
      onFinish();
      nextPressHandler();
    }
  };
  const prevButtonPressHandler = () => {
    prevPressHandler();
  };
  const setErrorsHandler = (name: string, value: string) => {
    let errorArray: Array<string> | null = validate[`${name}`](value);

    /*handle no fields change case*/
    setErrors((prevErrors: any) => {
      if (errorArray) {
        return {...prevErrors, [`${name}`]: errorArray[0]};
      }
      let changedErrors: TFieldErrorsState = errors;
      delete changedErrors[`${name}`];
      return changedErrors;
    });
  };
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    setErrorsHandler(name, value);
    setTouched((prevTouched: TFieldTouchedState) => ({
      ...prevTouched,
      [`${name}`]: true,
    }));
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    //check on valid
    setErrorsHandler(name, value);

    //set input value
    setValues((prevValues: TFieldValueState) => ({
      ...prevValues,
      [`${name}`]: value,
    }));
  };
  const isInvalid = (filedName: string): boolean => {
    return !!(touched[`${filedName}`] && errors[`${filedName}`]);
  };
  return (
    <div className={styles.rootWrapper}>
      <p className={styles.text}>
        You are a new user! Enter your registration details
      </p>
      <PlaneInputComponent
        autoFocus={true}
        error={errors[`${fields.LOGIN}`]}
        isInvalid={isInvalid}
        labelText={'Login (required)'}
        maxLength={32}
        name={fields.LOGIN}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        placeholder={'Login'}
        value={values[`${fields.LOGIN}`]}
      />
      <PlaneInputComponent
        autoFocus={false}
        error={errors[`${fields.PASSWORD}`]}
        isInvalid={isInvalid}
        labelText={'Password (required)'}
        maxLength={32}
        name={fields.PASSWORD}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        placeholder={'Password'}
        value={values[`${fields.PASSWORD}`]}
        type={'password'}
      />
      <PlaneInputComponent
        autoFocus={false}
        error={errors[`${fields.REPEAT_PASSWORD}`]}
        isInvalid={isInvalid}
        labelText={'Repeat password (required)'}
        maxLength={32}
        name={fields.REPEAT_PASSWORD}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        placeholder={'Repeat password'}
        value={values[`${fields.REPEAT_PASSWORD}`]}
        type={'password'}
      />
      <div className={styles.privacyWrapper}>
        <p className={styles.privacy}>
          By proceeding, I agree to Hata <a href={'/'}>Terms of Use</a>{' '}
        </p>
        <p className={styles.privacy}>
          and acknowledge that I have read the <a href={'/'}>Privacy Policy</a>.
        </p>
      </div>

      <div className={stylesJoint(styles.buttonWrapper)}>
        <button
          className={stylesJoint(styles.btnText)}
          onClick={prevButtonPressHandler}>
          Back
        </button>
        <button
          className={stylesJoint(
            styles.bottomBtn,
            styles.hoverArrow,
            styles.btnBlack,
            styles.btn,
            styles.yellow,
          )}
          disabled={!isEmpty(errors)}
          onClick={nextButtonPressHandler}>
          next step
        </button>
      </div>
    </div>
  );
};
