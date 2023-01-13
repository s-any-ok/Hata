export type TFieldValidationFunction = (
  fieldName: string,
  fieldContent: string,
) => Array<string> | null;

export type TFieldTouchedState = {
  [field: string]: boolean;
};

export type TFieldValueState = {
  [field: string]: string;
};

export type TFieldErrorsState = {
  [field: string]: string;
};
