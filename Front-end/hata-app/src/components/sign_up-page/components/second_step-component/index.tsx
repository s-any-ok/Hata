import * as React from 'react';
import {
  TFieldErrorsState,
  TFieldTouchedState,
  TFieldValueState,
} from '../../../../common/types';
import {
  stringNameValidation,
  emailValidation,
} from '../../../../common/validators';
import {isEmpty, stylesJoint} from '../../../../helpers';
import {PlaneInputComponent} from '../../../common';
import styles from './styles.module.css';

interface IThirdStepComponent {
  nextPressHandler: () => void;
  prevPressHandler: () => void;
  setValues: any;
  values: any;
  fields: any;
  onFinish: () => void;
}

export const SecondStepComponent = ({
  nextPressHandler,
  prevPressHandler,
  fields,
  values,
  setValues,
  onFinish,
}: IThirdStepComponent) => {
  // field validation errors
  const [errors, setErrors] = React.useState<TFieldErrorsState>({});
  //field is touched state
  const [touched, setTouched] = React.useState<TFieldTouchedState>({});

  const validate = {
    [`${fields.LAST_NAME}`]: (code: string) =>
      stringNameValidation('Last name', code),
    [`${fields.FIRST_NAME}`]: (code: string) =>
      stringNameValidation('First name', code),
    [`${fields.EMAIL}`]: (code: string) => emailValidation('Email', code),
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
      <PlaneInputComponent
        autoFocus={true}
        error={errors[`${fields.FIRST_NAME}`]}
        isInvalid={isInvalid}
        labelText={'First name (required)'}
        maxLength={32}
        name={fields.FIRST_NAME}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        placeholder={'First name'}
        value={values[`${fields.FIRST_NAME}`]}
      />
      <PlaneInputComponent
        autoFocus={false}
        error={errors[`${fields.LAST_NAME}`]}
        isInvalid={isInvalid}
        labelText={'Last name (required)'}
        maxLength={32}
        name={fields.LAST_NAME}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        placeholder={'Last name'}
        value={values[`${fields.LAST_NAME}`]}
      />
      <PlaneInputComponent
        autoFocus={false}
        error={errors[`${fields.EMAIL}`]}
        isInvalid={isInvalid}
        labelText={'Email (required)'}
        maxLength={32}
        name={fields.EMAIL}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        placeholder={'Email'}
        value={values[`${fields.EMAIL}`]}
      />
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
