import * as React from 'react';
import {stylesJoint} from '../../../helpers';
import styles from './styles.module.css';

interface IPlaneTextareaComponent
  extends React.InputHTMLAttributes<HTMLInputElement> {
  textareaRef: any;
  isInvalid: (fieldName: string) => boolean;
  error: string;
  labelText: string;
  name: string;
  placeholder: string;
  onBlur: (e: any) => void;
  maxLength: number;
  autoFocus: boolean;
}
export const PlaneTextareaComponent = React.memo(
  ({
    textareaRef,
    isInvalid,
    name,
    error,
    onBlur,
    maxLength,
    autoFocus,
    placeholder,
    labelText,
  }: IPlaneTextareaComponent) => {
    return (
      <div
        className={stylesJoint(styles.margin, styles.rootCustomInputWrapper)}>
        <p
          className={
            isInvalid(name)
              ? stylesJoint(styles.customInputLabel, styles.invalid)
              : stylesJoint(styles.customInputLabel)
          }>
          {isInvalid(name) ? error : labelText}
        </p>
        <div
          className={
            isInvalid(name)
              ? stylesJoint(styles.customInputWrapper, styles.invalid)
              : stylesJoint(styles.customInputWrapper)
          }>
          <div className={styles.inputWrapper}>
            <textarea
              ref={textareaRef}
              rows={8}
              cols={100}
              name={name}
              placeholder={placeholder}
              onBlur={onBlur}
              maxLength={maxLength}
              autoFocus={autoFocus}
            />
          </div>
        </div>
      </div>
    );
  },
);
