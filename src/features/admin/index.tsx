/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginAdminQuery, IAdminCredentials, ILoginAdminResponse } from 'api/admin';
import { AppThunk } from 'store';
import { headers } from 'utils/getBasicHeaders';

interface IStudentState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: IStudentState = {
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
  },
});

export const { loginAdminStart, loginAdminSuccess, loginAdminFailure } = comments.actions;
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

// /**
//  * Combined action for updating appicant info
//  * While fiering makes query to student endpoint with provided data:
//  * @param studentData
//  */
// export const verifyUserCoruseApply = (studentData: IStudentApplyData): AppThunk => async (dispatch) => {
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
