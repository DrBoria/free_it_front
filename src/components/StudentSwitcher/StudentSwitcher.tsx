import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { createStyles, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type StudentSwitcherProps = {
  pathName: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    socialLink: {
      color: '#fff',
    },
  }),
);

const StudentSwitcher: FC<StudentSwitcherProps> = ({ pathName }) => {
  const classes = useStyles();

  const studentsLink = (
    <Link className={classes.socialLink} to="/">
      Я ученик
    </Link>
  );
  const teachersLink = (
    <Link className={classes.socialLink} to="/createaccount">
      Я преподаватель
    </Link>
  );

  return (
    <Grid item container xs>
      <Grid item>{pathName === '/createaccount' ? studentsLink : teachersLink}</Grid>
    </Grid>
  );
};

export default StudentSwitcher;
