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
import {LoginActionWorker} from '../../../../store/actions';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router';
import {RouteEnum} from '../../../../common/enum';

export const LogInFormComponent = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const redirect = () => {
    history.push(RouteEnum.HOME);
  };
  // field values
  const [values, setValues] = React.useState<TFieldValueState>({});
  // field validation errors
  const [errors, setErrors] = React.useState<TFieldErrorsState>({});
  // field is touched state
  const [touched, setTouched] = React.useState<TFieldTouchedState>({});
  // not corresponds to TFieldValidationFunction signature
  const fields = {
    LOGIN: 'login',
    PASSWORD: 'password',
  };
  const validate = {
    [`${fields.LOGIN}`]: (login: string) =>
      stringNameValidation('Login', login),
    [`${fields.PASSWORD}`]: (password: string) =>
      passwordValidation('Password', password),
  };
  const onRegister = () => {
    if (isEmpty(errors)) {
      dispatch(
        LoginActionWorker({
          userName: values[`${fields.LOGIN}`],
          password: values[`${fields.PASSWORD}`],
        }),
      );
      redirect();
    }
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
        labelText={'Password'}
        maxLength={32}
        name={fields.PASSWORD}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        placeholder={'Password'}
        value={values[`${fields.PASSWORD}`]}
        type={'password'}
      />

      <div className={stylesJoint(styles.buttonWrapper)}>
        <button
          className={styles.btn}
          disabled={!isEmpty(errors)}
          onClick={onRegister}>
          Log In
        </button>
      </div>
    </div>
  );
};
