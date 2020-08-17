/* eslint-disable react/button-has-type */
import React, { FC } from 'react';

import arrow_left from 'styles/icons/arrow_left.svg';
import arrow_right from 'styles/icons/arrow_right.svg';

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
            <img src={arrow_right} alt="next" className={styles.arrow_right} />
          </button>
        </>
      );
    case 'back':
      return (
        <>
          <button className={styles['button-back']} type="button" form="appForm" disabled={disabled}>
            <img src={arrow_left} alt="back" className={styles.arrow_left} />
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
