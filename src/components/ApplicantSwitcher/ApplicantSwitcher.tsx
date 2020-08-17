import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './ApplicantSwitcher.module.scss';

type ApplicantSwitcherProps = {
  pathName: string;
};

const ApplicantSwitcher: FC<ApplicantSwitcherProps> = ({ pathName }) => (
  <div className={styles.form__header}>
    {pathName === '/createaccount' ? <Link to="/">Я ученик</Link> : <Link to="/createaccount">Я преподаватель</Link>}
  </div>
);

export default ApplicantSwitcher;
