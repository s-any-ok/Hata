import * as React from 'react';
import {
  ILocation,
  TFieldErrorsState,
  TFieldTouchedState,
  TFieldValueState,
} from '../../../../../../common/types';
import {
  stringNameValidation,
  numberValidation,
} from '../../../../../../common/validators';
import {isEmpty} from '../../../../../../helpers';
import {
  PlaneInputComponent,
  PlaneTextareaComponent,
} from '../../../../../common';
import styles from './styles.module.css';
import {
  CreateAnnouncementActionWorker,
  RegisterActionWorker,
} from '../../../../../../store/actions';
import {useDispatch} from 'react-redux';
import {CreateAnnouncementWorker} from '../../../../../../store/saga/app';

interface IInfoFormComponent {
  setView: () => void;
}

export const InfoFormComponent = ({setView}: IInfoFormComponent) => {
  const dispatch = useDispatch();
  //field values
  const [values, setValues] = React.useState<TFieldValueState>({});
  // field validation errors
  const [errors, setErrors] = React.useState<TFieldErrorsState>({});
  //field is touched state
  const [touched, setTouched] = React.useState<TFieldTouchedState>({});
  const textareaRef = React.useRef<any>();

  const fieldsNames = {
    TITLE: 'title',
    DESCRIPTION: 'description',
    PRICE_FROM: 'price from',
    PRICE_TO: 'price to',
    PEOPLE: 'people',
    FLATS: 'flats',
  };
  const validate = {
    [`${fieldsNames.TITLE}`]: (name: string) =>
      stringNameValidation('Title', name),
    [`${fieldsNames.DESCRIPTION}`]: (name: string) =>
      stringNameValidation('Description', name),
    [`${fieldsNames.PRICE_FROM}`]: (name: string) =>
      numberValidation('Price from', name),
    [`${fieldsNames.PRICE_TO}`]: (name: string) =>
      numberValidation('Price to', name),
    [`${fieldsNames.PEOPLE}`]: (name: string) =>
      numberValidation('People', name),
    [`${fieldsNames.FLATS}`]: (name: string) => numberValidation('Flats', name),
  };
  const addAnnouncement = () => {
    if (isEmpty(errors)) {
      dispatch(
        CreateAnnouncementActionWorker({
          title: values[`${fieldsNames.TITLE}`],
          description: textareaRef.current.value,
          isActive: true,
          amountOfFlats: +values[`${fieldsNames.FLATS}`],
          amountOfPeople: +values[`${fieldsNames.PEOPLE}`],
          priceFrom: +values[`${fieldsNames.PRICE_FROM}`],
          priceTo: +values[`${fieldsNames.PRICE_TO}`],
          location: {longitude: 0, latitude: 0},
          startDate: new Date(),
          endDate: new Date(),
        }),
      );
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

  const onBlurTextareaHandler = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const {value, name} = e.target;
    setErrorsHandler(name, value);
    setTouched((prevTouched: TFieldTouchedState) => ({
      ...prevTouched,
      [`${name}`]: true,
    }));
  };

  const onChangeTextareaHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
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
            value={values[fieldsNames.TITLE]}
            name={fieldsNames.TITLE}
            key={values[fieldsNames.TITLE]}
            placeholder={'Title'}
            autoFocus={true}
            maxLength={24}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            error={errors[`${fieldsNames.TITLE}`]}
            isInvalid={isInvalid}
            labelText={'Title'}
          />
          <PlaneTextareaComponent
            textareaRef={textareaRef}
            name={fieldsNames.DESCRIPTION}
            key={values[fieldsNames.DESCRIPTION]}
            placeholder={'Description'}
            autoFocus={false}
            maxLength={2000}
            onBlur={onBlurTextareaHandler}
            error={errors[`${fieldsNames.DESCRIPTION}`]}
            isInvalid={isInvalid}
            labelText={'Description'}
          />
          <div className={styles.fieldsGroupRow}>
            <PlaneInputComponent
              value={values[fieldsNames.PRICE_FROM]}
              name={fieldsNames.PRICE_FROM}
              key={values[fieldsNames.PRICE_FROM]}
              placeholder={'Price from'}
              autoFocus={true}
              maxLength={5}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              error={errors[`${fieldsNames.PRICE_FROM}`]}
              isInvalid={isInvalid}
              labelText={'Price from'}
            />
            <PlaneInputComponent
              value={values[fieldsNames.PRICE_TO]}
              name={fieldsNames.PRICE_TO}
              key={values[fieldsNames.PRICE_TO]}
              placeholder={'Price to'}
              autoFocus={true}
              maxLength={5}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              error={errors[`${fieldsNames.PRICE_TO}`]}
              isInvalid={isInvalid}
              labelText={'Price to'}
            />
          </div>
          <div className={styles.fieldsGroupRow}>
            <PlaneInputComponent
              value={values[fieldsNames.PEOPLE]}
              name={fieldsNames.PEOPLE}
              key={values[fieldsNames.PEOPLE]}
              placeholder={'People'}
              autoFocus={true}
              maxLength={2}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              error={errors[`${fieldsNames.PEOPLE}`]}
              isInvalid={isInvalid}
              labelText={'People'}
            />
            <PlaneInputComponent
              value={values[fieldsNames.FLATS]}
              name={fieldsNames.FLATS}
              key={values[fieldsNames.FLATS]}
              placeholder={'Flats'}
              autoFocus={true}
              maxLength={2}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              error={errors[`${fieldsNames.FLATS}`]}
              isInvalid={isInvalid}
              labelText={'Flats'}
            />
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.btnText} onClick={setView}>
          Cancel
        </button>
        <button
          className={styles.btn}
          disabled={!isEmpty(errors)}
          onClick={addAnnouncement}>
          Add
        </button>
      </div>
    </>
  );
};
