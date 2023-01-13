import * as React from 'react';
import {PhoneNumberPrefixes} from '../../../../../../common/constants';
import {
  TFieldErrorsState,
  TFieldTouchedState,
  TFieldValueState,
} from '../../../../../../common/types';
import {
  emailValidation,
  phoneNumberValidation,
  stringNameValidation,
} from '../../../../../../common/validators';
import {isEmpty} from '../../../../../../helpers';
import {PlaneInputComponent} from '../../../../../common';
import {SelectInputComponent} from '../../../../../common/select-input';
import styles from './styles.module.css';

interface IMainInfoFormComponent {
  setView: () => void;
}

export const MainInfoFormComponent = ({setView}: IMainInfoFormComponent) => {
  //field values
  const [values, setValues] = React.useState<TFieldValueState>({});
  // field validation errors
  const [errors, setErrors] = React.useState<TFieldErrorsState>({});
  //field is touched state
  const [touched, setTouched] = React.useState<TFieldTouchedState>({});

  const fieldsNames = {
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName',
    EMAIL: 'email',
    ADDRESS: 'address',
    PHONE_NUMBER: 'phone',
  };
  const validate = {
    [`${fieldsNames.FIRST_NAME}`]: (name: string) =>
      stringNameValidation('First name', name),
    [`${fieldsNames.LAST_NAME}`]: (name: string) =>
      stringNameValidation('Last name', name),
    [`${fieldsNames.ADDRESS}`]: (name: string) =>
      stringNameValidation('Address', name),
    [`${fieldsNames.EMAIL}`]: (email: string) =>
      emailValidation('Email', email),
    [`${fieldsNames.PHONE_NUMBER}`]: (phone: string) =>
      phoneNumberValidation('Phone number', phone),
  };
  const setOnListHandler = () => {
    if (isEmpty(errors)) {
      setView();
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
    <>
      <div className={styles.fieldsWrapper}>
        <div className={styles.fieldsGroup}>
          <PlaneInputComponent
            value={values[fieldsNames.FIRST_NAME]}
            name={fieldsNames.FIRST_NAME}
            key={values[fieldsNames.FIRST_NAME]}
            placeholder={'First name'}
            autoFocus={true}
            maxLength={24}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            error={errors[`${fieldsNames.FIRST_NAME}`]}
            isInvalid={isInvalid}
            labelText={'First name'}
          />
          <PlaneInputComponent
            value={values[fieldsNames.LAST_NAME]}
            name={fieldsNames.LAST_NAME}
            key={values[fieldsNames.LAST_NAME]}
            placeholder={'Last name'}
            autoFocus={true}
            maxLength={24}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            error={errors[`${fieldsNames.LAST_NAME}`]}
            isInvalid={isInvalid}
            labelText={'Last name'}
          />
          <PlaneInputComponent
            value={values[fieldsNames.EMAIL]}
            name={fieldsNames.EMAIL}
            key={values[fieldsNames.EMAIL]}
            placeholder={'Email'}
            autoFocus={true}
            maxLength={24}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            error={errors[`${fieldsNames.EMAIL}`]}
            isInvalid={isInvalid}
            labelText={'Email'}
          />
          <PlaneInputComponent
            value={values[fieldsNames.ADDRESS]}
            name={fieldsNames.ADDRESS}
            key={values[fieldsNames.ADDRESS]}
            placeholder={'Address'}
            autoFocus={true}
            maxLength={24}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            error={errors[`${fieldsNames.ADDRESS}`]}
            isInvalid={isInvalid}
            labelText={'Address'}
          />
          <SelectInputComponent
            autoFocus={true}
            error={errors[`${fieldsNames.PHONE_NUMBER}`]}
            isInvalid={isInvalid}
            labelText={'Enter your phone number'}
            maxLength={15}
            name={fieldsNames.PHONE_NUMBER}
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
            placeholder={'Phone number'}
            selectItems={PhoneNumberPrefixes}
            value={values[`${fieldsNames.PHONE_NUMBER}`]}
          />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.btnText} onClick={setView}>
          Cancel
        </button>
        <button
          className={styles.btn}
          disabled={!isEmpty(errors)}
          onClick={setOnListHandler}>
          Save
        </button>
      </div>
    </>
  );
};
