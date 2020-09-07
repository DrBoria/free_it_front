/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { applyCourseQuery, ITeacherData, IAppliedTeacherResponse } from 'api/teacher';
import { AppThunk } from 'store';

interface ITeacherState {
  teacher: ITeacherData;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: ITeacherState = {
  teacher: {
    about: '',
    email: '',
    firstName: '',
    lastName: '',
    course: {
      description: '',
      lessonsCount: 0,
      maxStudents: 0,
      prerequisits: '',
      skillsGained: '',
      title: '',
    },
  },
  loading: false,
  error: null,
  success: false,
};

const comments = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    // creates reducers and actions based on name (Teacher)
    applyCourseStart(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    applyCourseSuccess(state, action: PayloadAction<IAppliedTeacherResponse>) {
      state.teacher = action.payload;
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    applyCourseFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const { applyCourseStart, applyCourseSuccess, applyCourseFailure } = comments.actions;
export default comments.reducer;

/**
 * Combined action for updating appicant info
 * While fiering makes query to Teacher endpoint with provided data:
 * @param TeacherData
 */
export const applyCourse = (TeacherData: ITeacherData): AppThunk => async (dispatch) => {
  try {
    dispatch(applyCourseStart());
    const updatedTeacher: IAppliedTeacherResponse = await applyCourseQuery(TeacherData);
    dispatch(applyCourseSuccess({ ...updatedTeacher }));
  } catch (err) {
    // TODO: remove setTimeout. Used just for demo of redux toolkit functionality
    setTimeout(() => {
      dispatch(applyCourseFailure(err));
    }, 1000);
  }
};
