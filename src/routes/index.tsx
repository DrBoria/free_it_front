import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from 'pages/Main';
import CreateAccount from 'pages/CreateAccount';
import StudentSubmit from 'pages/StudentSubmit';
import CourseInformation from 'pages/CourseInformation';

export default () => (
  <Route path="/">
    <Main>
      <Switch>
        <Route exact path="/">
          <CourseInformation />
        </Route>
        <Route path="/courseapply/:id">
          <StudentSubmit />
        </Route>
        <Route path="/createaccount">
          <CreateAccount />
        </Route>
      </Switch>
    </Main>
  </Route>
);
