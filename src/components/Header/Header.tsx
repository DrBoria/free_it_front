import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { createStyles, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ApplicantSwitcher from 'components/ApplicantSwitcher';

type HeaderProps = {
  title: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      backgroundColor: '#2371a5',
      color: '#fff',
      height: '100%',
    },
  }),
);

const Header: FC<HeaderProps> = ({ title }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Grid item container xs justify="space-between" className={classes.header}>
      <Grid item xs={9}>
        <h4>{title}</h4>
      </Grid>
      <Grid item container xs>
        <Grid item xs>
          <Link to="/courseinformation">Список курсов</Link>
        </Grid>
        <ApplicantSwitcher pathName={location.pathname} />
      </Grid>
    </Grid>
  );
};

export default Header;
