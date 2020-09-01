import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles, Grid } from '@material-ui/core';

type FooterProps = {
  title: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    footer: {
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
    socialLink: {
      color: '#fff',
    },
  }),
);

const Footer: FC<FooterProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <Grid container item className={classes.footer} justify="center">
      <Grid item xs={9}>
        <h4 className={classes.title}>{title}</h4>
      </Grid>
      <Grid item>
        <a className={classes.socialLink} href="https://t.me/freeit_blr" target="_blank" rel="noopener noreferrer">
          мы в Telegram
        </a>
      </Grid>
    </Grid>
  );
};

export default Footer;
