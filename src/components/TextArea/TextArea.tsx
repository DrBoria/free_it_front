import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './TextArea.module.scss';

interface TextAreaProps {
  name: string;
  placeholder: string;
  labelText: string;
  row?: number;
  cols?: number;
}

const TextArea: FC<TextAreaProps> = ({ name, placeholder, labelText, row = 10, cols = 45 }) => (
  <>
    {labelText && (
      <label htmlFor={name} className={classNames('label', styles.form__body_label)}>
        {labelText}
      </label>
    )}
    <textarea id={name} rows={row} cols={cols} name={name} placeholder={placeholder} />
  </>
);

export default TextArea;
