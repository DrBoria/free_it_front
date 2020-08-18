import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';

interface InputProps {
  inputType?: string;
  name: string;
  placeholder: string;
  labelText: string;
}

const Input: FC<InputProps> = ({ inputType = 'text', name, placeholder, labelText }) => (
  <>
    {labelText && (
      <label htmlFor={name} className={classNames('label', styles.form__body_label)}>
        {labelText}
      </label>
    )}
    <input className={styles.form__body_input} type={inputType} id={name} name={name} placeholder={placeholder} />
  </>
);

export default Input;
