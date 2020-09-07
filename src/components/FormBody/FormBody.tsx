import React, { FC, FormEvent } from 'react';
import classNames from 'classnames';

import styles from './FormBody.module.scss';

type FormBodyProps = {
  title?: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
};

const FormBody: FC<FormBodyProps> = ({ title, onSubmit = () => {}, children }) => (
  <form className={styles.form__body} id="appForm" onSubmit={onSubmit}>
    {title && <div className={classNames(styles.form__body_subtitle, 'subtitle-large')}>{title}</div>}
    {children}
  </form>
);

export default FormBody;
