import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import ApplicantSwitcher from 'components/ApplicantSwitcher';

import styles from './Main.module.scss';

type MainProps = {
  children?: React.ReactElement<any>;
};

const Main: FC<MainProps> = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <Header title="Free It" />
      <ApplicantSwitcher pathName={location.pathname} />
      <div className={styles.main}>{children}</div>
      <Footer title="Free It Footer" />
    </>
  );
};

export default Main;
