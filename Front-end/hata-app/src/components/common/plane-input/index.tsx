import * as React from "react";
import { stylesJoint } from "../../../helpers";
import styles from "./styles.module.css";

interface IPlaneInputComponent
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isInvalid: (fieldName: string) => boolean;
  error: string;
  labelText: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  maxLength: number;
  autoFocus: boolean;
}
export const PlaneInputComponent = React.memo(
  ({
    isInvalid,
    name,
    value,
    error,
    onChange,
    onBlur,
    maxLength,
    autoFocus,
    placeholder,
    labelText,
    ...props
  }: IPlaneInputComponent) => {
    return (
      <div
        className={stylesJoint(styles.margin, styles.rootCustomInputWrapper)}
      >
        <p
          className={
            isInvalid(name)
              ? stylesJoint(styles.customInputLabel, styles.invalid)
              : stylesJoint(styles.customInputLabel)
          }
        >
          {isInvalid(name) ? error : labelText}
        </p>
        <div
          className={
            isInvalid(name)
              ? stylesJoint(styles.customInputWrapper, styles.invalid)
              : stylesJoint(styles.customInputWrapper)
          }
        >
          <div className={styles.inputWrapper}>
            <input
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              maxLength={maxLength}
              autoFocus={autoFocus}
              {...props}
            />
          </div>
        </div>
      </div>
    );
  }
);
