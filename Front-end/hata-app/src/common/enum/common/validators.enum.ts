export const ValidationStrings = Object.freeze({
  PHONE_NUMBER: /^[0-9]+$/,
  NUMBER: /^[0-9]+$/,
  NAME: /^[a-zA-Z]+$/,
  EMAIL: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  STRING: /^[a-zA-Z]+$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
});
