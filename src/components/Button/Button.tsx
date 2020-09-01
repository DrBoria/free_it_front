/* eslint-disable react/button-has-type */
import React, { FC } from 'react';

import styles from './Button.module.scss';

type buttonProps = {
  buttonType: string;
  placeholder: string;
  disabled?: boolean;
  isSubmit?: boolean;
  onClick?: () => void;
};

const Button: FC<buttonProps> = ({ buttonType, placeholder, disabled = false, isSubmit = true, onClick }) => {
  switch (buttonType) {
    case 'next':
      return (
        <>
          <button className={styles['button-next']} type="submit" form="appForm" disabled={disabled}>
            {placeholder}
          </button>
        </>
      );
    case 'back':
      return (
        <>
          <button className={styles['button-back']} type="button" form="appForm" disabled={disabled}>
            {placeholder}
          </button>
        </>
      );
    case 'primary':
      return (
        <>
          <button
            className={styles.primary}
            type={isSubmit ? 'submit' : 'button'}
            form="appForm"
            disabled={disabled}
            onClick={onClick}
          >
            {placeholder}
          </button>
        </>
      );
    case 'alternative':
      return (
        <>
          <button
            className={styles.alternative}
            type={isSubmit ? 'submit' : 'button'}
            form="appForm"
            disabled={disabled}
            onClick={onClick}
          >
            {placeholder}
          </button>
        </>
      );
    case 'alternative-bordered':
      return (
        <>
          <button
            className={styles['alternative-bordered']}
            type={isSubmit ? 'submit' : 'button'}
            form="appForm"
            disabled={disabled}
            onClick={onClick}
          >
            {placeholder}
          </button>
        </>
      );
    default:
      return null;
  }
};

export default Button;
