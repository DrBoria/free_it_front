import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles, Grid } from '@material-ui/core';

type FooterProps = {
  title: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    footer: {
      backgroundColor: '#2371a5',
      color: '#fff',
      height: '100%',
    },
  }),
);

const Footer: FC<FooterProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <Grid container item className={classes.footer} justify="center">
      <Grid item>
        <h4>{title}</h4>
      </Grid>
      <Grid item>
        <a href="https://t.me/freeit_blr" target="_blank" rel="noopener noreferrer">
          наш Telegram
        </a>
      </Grid>
    </Grid>
  );
};

export default Footer;
