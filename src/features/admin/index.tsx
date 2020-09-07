/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  loginAdminQuery,
  IAdminCredentials,
  ILoginAdminResponse,
  approveCourseApplyQuery,
  rejectCourseApplyQuery,
} from 'api/admin';
import { AppThunk } from 'store';
import { headers } from 'utils/getBasicHeaders';

export interface IUserCardData {
  courseDto: {
    availableCount: number;
    description: string;
    id: number;
    maxStudents: number;
    startDate: Date;
    title: string;
  };
  id: number;
  user: {
    about: string;
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    verified: true;
  };
}

interface IUserListState {
  usersCards: IUserCardData[];
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: IUserListState = {
  usersCards: [
    {
      courseDto: {
        availableCount: 10,
        description: 'description',
        id: 0,
        maxStudents: 19,
        startDate: new Date(),
        title: 'Title course',
      },
      id: 0,
      user: {
        about: 'about student',
        email: 'email@email.com',
        firstName: 'Name',
        id: 0,
        lastName: 'Last Name',
        verified: true,
      },
    },
    {
      courseDto: {
        availableCount: 10,
        description: 'description 2',
        id: 0,
        maxStudents: 19,
        startDate: new Date(),
        title: 'Title course 2',
      },
      id: 0,
      user: {
        about: 'about student',
        email: 'email@email.com',
        firstName: 'Name 2',
        id: 0,
        lastName: 'Last Name 2',
        verified: true,
      },
    },
  ],
  loading: false,
  error: null,
  success: false,
};

const comments = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    // creates reducers and actions based on name (student)
    loginAdminStart(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    loginAdminSuccess(state) {
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    loginAdminFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    courseApplyStart(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    courseApplySuccess(state) {
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    courseApplyFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const {
  courseApplyStart,
  courseApplySuccess,
  courseApplyFailure,
  loginAdminStart,
  loginAdminSuccess,
  loginAdminFailure,
} = comments.actions;
export default comments.reducer;

/**
 * Combined action for updating appicant info
 * While fiering makes query to student endpoint with provided data:
 * @param adminCredentials
 */
export const loginAdmin = (adminCredentials: IAdminCredentials): AppThunk => async (dispatch) => {
  try {
    dispatch(loginAdminStart());
    const updatedStudent: ILoginAdminResponse = await loginAdminQuery(adminCredentials);

    // Set bearer after successfull login
    headers.set('bearer', `${updatedStudent.token?.accessToken}`);
    dispatch(loginAdminSuccess());
  } catch (err) {
    // TODO: remove setTimeout. Used just for demo of redux toolkit functionality
    setTimeout(() => {
      dispatch(loginAdminFailure(err));
    }, 1000);
  }
};

// /**
//  * Combined action for updating appicant info
//  * While fiering makes query to student endpoint with provided data:
//  * @param studentData
//  */
// export const verifyUser = (studentData: IStudentApplyData): AppThunk => async (dispatch) => {
//   try {
//     dispatch(loginAdminStart());
//     const updatedStudent: IAppliedStudentResponse = await loginAdminQuery(studentData);
//     dispatch(loginAdminSuccess({ ...updatedStudent }));
//   } catch (err) {
//     // TODO: remove setTimeout. Used just for demo of redux toolkit functionality
//     setTimeout(() => {
//       dispatch(loginAdminFailure(err));
//     }, 1000);
//   }
// };

/**
 * Combined action for updating appicant info
 * While fiering makes query to student endpoint with provided data:
 * @param studentData
 */
export const approveCourseApply = (applyOnCourseId: number): AppThunk => async (dispatch) => {
  try {
    dispatch(courseApplyStart());
    await approveCourseApplyQuery(applyOnCourseId);
    dispatch(courseApplySuccess());
  } catch (err) {
    // TODO: remove setTimeout. Used just for demo of redux toolkit functionality
    setTimeout(() => {
      dispatch(courseApplyFailure(err));
    }, 1000);
  }
};

/**
 * Combined action for updating appicant info
 * While fiering makes query to student endpoint with provided data:
 * @param studentData
 */
export const rejectCourseApply = (applyOnCourseId: number): AppThunk => async (dispatch) => {
  try {
    dispatch(courseApplyStart());
    await rejectCourseApplyQuery(applyOnCourseId);
    dispatch(courseApplySuccess());
  } catch (err) {
    // TODO: remove setTimeout. Used just for demo of redux toolkit functionality
    setTimeout(() => {
      dispatch(courseApplyFailure(err));
    }, 1000);
  }
};
