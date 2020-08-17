import React, { FC } from 'react';

import styles from './FormHeader.module.scss';

type formHeaderProps = {
  title: string;
};

const FormHeader: FC<formHeaderProps> = ({ title }) => (
  <div className={styles.form__header}>
    <h4 className={styles.form__header_title}>{title}</h4>
  </div>
);

export default FormHeader;
