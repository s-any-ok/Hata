import {ValidationStrings} from '../../enum/common';
import {TFieldValidationFunction} from '../../types';

export const phoneNumberValidation: TFieldValidationFunction = (
  fieldName: string,
  fieldContent: string,
): Array<string> | null => {
  let errors: Array<string> = [];
  if (fieldContent.length === 0) {
    errors.push(`${fieldName} should not be empty`);
  }
  if (fieldContent.length < 8) {
    errors.push(`${fieldName} min phone number length 8 symbols`);
  }
  if (!fieldContent.match(ValidationStrings.PHONE_NUMBER)) {
    errors.push(`${fieldName} must contain only numbers`);
  }
  return errors.length !== 0 ? errors : null;
};

export const numberValidation: TFieldValidationFunction = (
  fieldName: string,
  fieldContent: string,
): Array<string> | null => {
  let errors: Array<string> = [];
  if (fieldContent.length === 0) {
    errors.push(`${fieldName} should not be empty`);
  }
  if (fieldContent.length > 4) {
    errors.push(`${fieldName} max length 4 symbols`);
  }
  if (!fieldContent.match(ValidationStrings.NUMBER)) {
    errors.push(`${fieldName} must contain only numbers`);
  }
  return errors.length !== 0 ? errors : null;
};

export const stringNameValidation: TFieldValidationFunction = (
  fieldName: string,
  fieldContent: string,
): Array<string> | null => {
  let errors: Array<string> = [];
  if (fieldContent.length === 0) {
    errors.push(`${fieldName} should not be empty`);
  }
  if (!fieldContent.match(ValidationStrings.NAME)) {
    errors.push(`${fieldName} must contain only letters`);
  }
  return errors.length !== 0 ? errors : null;
};
export const emailValidation: TFieldValidationFunction = (
  fieldName: string,
  fieldContent: string,
): Array<string> | null => {
  let errors: Array<string> = [];
  if (fieldContent.length === 0) {
    errors.push(`${fieldName} should not be empty`);
  }
  if (!fieldContent.match(ValidationStrings.EMAIL)) {
    errors.push(`${fieldName} must to look like plane12@gmail.com`);
  }
  return errors.length !== 0 ? errors : null;
};

export const passwordValidation: TFieldValidationFunction = (
  fieldName: string,
  fieldContent: string,
): Array<string> | null => {
  let errors: Array<string> = [];
  /*if (fieldContent.length === 0) {
        errors.push(
            `${fieldName} should not be empty`
        )
    }
    if (fieldContent.length < 8) {
        errors.push(
            `${fieldName} should be at least 8 symbols length`
        )
    }
    if (fieldContent.match(ValidationStrings.PASSWORD)) {
        errors.push(
            `${fieldName} must have minimum eight characters, at least one letter and one number:`
        )
    }*/
  return errors.length !== 0 ? errors : null;
};
