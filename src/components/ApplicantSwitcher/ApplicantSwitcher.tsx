import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

type ApplicantSwitcherProps = {
  pathName: string;
};

const ApplicantSwitcher: FC<ApplicantSwitcherProps> = ({ pathName }) => {
  const studentsLink = <Link to="/">Я ученик</Link>;
  const teachersLink = <Link to="/createaccount">Я преподаватель</Link>;

  return (
    <Grid item container xs>
      <Grid item>{pathName === '/createaccount' ? studentsLink : teachersLink}</Grid>
    </Grid>
  );
};

export default ApplicantSwitcher;
