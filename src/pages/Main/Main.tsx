import React, { FC } from 'react';

import { createStyles, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Footer from 'components/Footer';
import Header from 'components/Header';

type MainProps = {
  children?: React.ReactElement<any>;
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: '100vh',
      minWidth: '100%',
    },
    header: {
      height: '7vh',
    },
    content: {
      height: '86vh',
      overflow: 'auto',
      paddingTop: 10,
      paddingBottom: 10,
    },
    footer: {
      height: '7vh',
    },
  }),
);

const Main: FC<MainProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid direction="column" xs className={classes.root}>
      <Grid item className={classes.header}>
        <Header title="Free It" />
      </Grid>
      <Grid item className={classes.content}>
        {children}
      </Grid>
      <Grid item className={classes.header}>
        <Footer title="Free It Footer" />
      </Grid>
    </Grid>
  );
};

export default Main;
