/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchUpdateCourses, ICourceData } from 'api/courses';
import { AppThunk } from 'store';

interface IUpdatedCourse {
  name: string;
  description: string;
  id: string;
}

interface CommentsState {
  courses: IUpdatedCourse[];
  loading: boolean;
  error: string | null;
}

const initialState: CommentsState = {
  courses: [],
  loading: false,
  error: null,
};

const comments = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    updatedCourcesStart(state) {
      state.loading = true;
      state.error = null;
    },
    updatedCourcesSuccess(state, action: PayloadAction<IUpdatedCourse>) {
      state.courses = state.courses.map((course) => (course.id === action.payload.id ? action.payload : course));
      state.loading = false;
      state.error = null;
    },
    updatedCourcesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { updatedCourcesStart, updatedCourcesSuccess, updatedCourcesFailure } = comments.actions;
export default comments.reducer;

export const updateCourses = (courceData: ICourceData): AppThunk => async (dispatch) => {
  try {
    dispatch(updatedCourcesStart());
    const updatedCourse: IUpdatedCourse = await fetchUpdateCourses(courceData);
    dispatch(updatedCourcesSuccess({ ...updatedCourse }));
  } catch (err) {
    dispatch(updatedCourcesFailure(err));
  }
};
