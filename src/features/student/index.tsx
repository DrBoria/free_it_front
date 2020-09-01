/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { applyOnCourseQuery, IStudentData, IStudentApplyData, IAppliedStudentResponse } from 'api/student';
import { AppThunk } from 'store';

interface IStudentState {
  student: IStudentData;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: IStudentState = {
  student: {
    about: '',
    email: '',
    firstName: '',
    lastName: '',
  },
  loading: false,
  error: null,
  success: false,
};

const comments = createSlice({
  name: 'student',
  initialState,
  reducers: {
    // creates reducers and actions based on name (student)
    applyOnCourseStart(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    applyOnCourseSuccess(state, action: PayloadAction<IAppliedStudentResponse>) {
      state.student = action.payload;
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    applyOnCourseFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const { applyOnCourseStart, applyOnCourseSuccess, applyOnCourseFailure } = comments.actions;
export default comments.reducer;

/**
 * Combined action for updating appicant info
 * While fiering makes query to student endpoint with provided data:
 * @param studentData
 */
export const applyOnCourse = (studentData: IStudentApplyData): AppThunk => async (dispatch) => {
  try {
    dispatch(applyOnCourseStart());
    const updatedStudent: IAppliedStudentResponse = await applyOnCourseQuery(studentData);
    dispatch(applyOnCourseSuccess({ ...updatedStudent }));
  } catch (err) {
    // TODO: remove setTimeout. Used just for demo of redux toolkit functionality
    setTimeout(() => {
      dispatch(applyOnCourseFailure(err));
    }, 1000);
  }
};
