/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { updateCoursesQuery, getCoursesQuery, ICourseFormData, ICourseData, ICourseResponse } from 'api/courses';
import { AppThunk } from 'store';

interface CommentsState {
  courses: ICourseData[];
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
    // creates reducers and actions based on name (student)
    fetchCoursesDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    updatedCourcesSuccess(state, action: PayloadAction<ICourseData>) {
      state.courses = state.courses.map((course) => (course.id === action.payload.id ? action.payload : course));
      state.loading = false;
      state.error = null;
    },
    updatedCourcesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getCoursesSuccess(state, action) {
      state.courses = action.payload;
      state.loading = false;
      state.error = null;
    },
    getCoursesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCoursesDataStart,
  updatedCourcesSuccess,
  updatedCourcesFailure,
  getCoursesSuccess,
  getCoursesFailure,
} = comments.actions;
export default comments.reducer;

/**
 * Combined action for updating courses
 * While fiering makes query to courses endpoint with provided data:
 * @param courseData
 */
export const updateCourses = (courseData: ICourseFormData): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchCoursesDataStart());
    const updatedCourse: ICourseResponse = await updateCoursesQuery(courseData);
    dispatch(getCoursesSuccess({ ...updatedCourse }));
  } catch (err) {
    dispatch(getCoursesFailure(err));
  }
};

/**
 * Fetch list of existing courses on portal
 */
export const getCourses = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchCoursesDataStart());
    const courseList: ICourseData[] = await getCoursesQuery();
    if (!courseList.length) throw Error('no available courses');
    dispatch(getCoursesSuccess(courseList));
  } catch (err) {
    // TODO: remove setTimeout. Used just for demo of redux toolkit functionality
    setTimeout(() => {
      dispatch(updatedCourcesFailure(err));
    }, 1000);
  }
};
