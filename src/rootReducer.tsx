/* eslint-disable import/no-cycle */
import { combineReducers } from '@reduxjs/toolkit';
// Used for generating type based on reducer
import coursesReducer from 'features/courses';
import studentReducer from 'features/student';
import teacherReducer from 'features/teacher';

const rootReducer = combineReducers({
  courses: coursesReducer,
  student: studentReducer,
  teacher: teacherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
