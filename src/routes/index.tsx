import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from 'pages/Main';
import CreateAccount from 'pages/CreateAccount';
import ApplicantSubmit from 'pages/ApplicantSubmit';
import CourseInformation from 'pages/CourseInformation';

export default () => (
  <Route path="/">
    <Main>
      <Switch>
        <Route exact path="/">
          <ApplicantSubmit />
        </Route>
        <Route path="/createaccount">
          <CreateAccount />
        </Route>
        <Route path="/courseinformation">
          <CourseInformation />
        </Route>
      </Switch>
    </Main>
  </Route>
);
