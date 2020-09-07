import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from 'pages/Main';
import TeacherSubmit from 'pages/TeacherSubmit';
import AdminLogin from 'pages/AdminLogin';
import StudentSubmit from 'pages/StudentSubmit';
import CourseInformation from 'pages/CourseInformation';
import AppliedUsers from 'pages/AppliedUsers';
import UnverifiedUsers from 'pages/UnverifiedUsers';

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
          <TeacherSubmit />
        </Route>
        <Route path="/admin">
          <AdminLogin />
        </Route>
        <Route path="/appliedUsers">
          <AppliedUsers />
        </Route>
        <Route path="/unverifiedUsers">
          <UnverifiedUsers />
        </Route>
      </Switch>
    </Main>
  </Route>
);
