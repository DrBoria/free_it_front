/* eslint-disable import/no-cycle */
import { combineReducers } from '@reduxjs/toolkit';
// Used for generating type based on reducer
import coursesReducer from 'features/courses';
import applicantReducer from 'features/applicant';

const rootReducer = combineReducers({
  courses: coursesReducer,
  applicant: applicantReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
