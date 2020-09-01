import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { createStyles, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import StudentSwitcher from 'components/StudentSwitcher';

type HeaderProps = {
  title: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      backgroundColor: '#3f51b5',
      color: '#fff',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '80px',
    },
    title: {
      color: '#fff',
    },
  }),
);

const Header: FC<HeaderProps> = ({ title }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Grid item container xs justify="space-between" className={classes.header}>
      <Grid item xs={9}>
        <h4 className={classes.title}>{title}</h4>
      </Grid>
      <Grid item container xs>
        <StudentSwitcher pathName={location.pathname} />
      </Grid>
    </Grid>
  );
};

export default Header;
