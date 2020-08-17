import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

type HeaderProps = {
  title: string;
};

const Header: FC<HeaderProps> = ({ title }) => (
  <div className={styles.form__header}>
    <h4 className={styles.form__header_title}>{title}</h4>
    <Link to="/courseinformation">Список курсов</Link>
  </div>
);

export default Header;
