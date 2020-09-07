/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  loginAdminQuery,
  IAdminCredentials,
  ILoginAdminResponse,
  getAppliedUsersQuery,
  getUnverifiedUserQuery,
  approveCourseApplyQuery,
  rejectCourseApplyQuery,
  IAppliedUserCardData,
  IUserCardData,
  IUserVerificationData,
  userVerificationQuery,
} from 'api/admin';
import { AppThunk } from 'store';
import { headers } from 'utils/getBasicHeaders';

interface IUserListState {
  usersCards: IAppliedUserCardData[];
  unverifiedUsersCards: IUserCardData[];
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: IUserListState = {
  usersCards: [],
  unverifiedUsersCards: [],
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
    getAppliedUsersStart(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    getAppliedUsersSuccess(state, action: PayloadAction<IAppliedUserCardData[]>) {
      state.usersCards = action.payload || [];
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    getAppliedUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    getUnverifiedUsersStart(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    getUnverifiedUsersSuccess(state, action: PayloadAction<IUserCardData[]>) {
      state.unverifiedUsersCards = action.payload || [];
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    getUnverifiedUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    userVerificationStart(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    userVerificationSuccess(state, action: PayloadAction<IUserVerificationData>) {
      state.unverifiedUsersCards = state.unverifiedUsersCards.filter((userCard) => userCard.id !== action.payload.id);
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    userVerificationFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    courseApplyStart(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    courseApplySuccess(state, action: PayloadAction<number>) {
      state.usersCards = state.usersCards.filter((userCard) => userCard.id !== action.payload);
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
  getAppliedUsersStart,
  getAppliedUsersSuccess,
  getAppliedUsersFailure,
  getUnverifiedUsersStart,
  getUnverifiedUsersSuccess,
  getUnverifiedUsersFailure,
  userVerificationStart,
  userVerificationSuccess,
  userVerificationFailure,
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

/**
 * Combined action for updating appicant info
 * While fiering makes query to student endpoint with provided data:
 * @param adminCredentials
 */
export const getAppliedUsers = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getAppliedUsersStart());
    const usersList: IAppliedUserCardData[] = await getAppliedUsersQuery();

    dispatch(getAppliedUsersSuccess(usersList));
  } catch (err) {
    // TODO: remove setTimeout. Used just for demo of redux toolkit functionality
    setTimeout(() => {
      dispatch(getAppliedUsersFailure(err));
    }, 1000);
  }
};

/**
 * Combined action for updating appicant info
 * While fiering makes query to student endpoint with provided data:
 * @param adminCredentials
 */
export const getUnverifiedUsers = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getUnverifiedUsersStart());
    const usersList: IUserCardData[] = await getUnverifiedUserQuery();

    dispatch(getUnverifiedUsersSuccess(usersList));
  } catch (err) {
    // TODO: remove setTimeout. Used just for demo of redux toolkit functionality
    setTimeout(() => {
      dispatch(getAppliedUsersFailure(err));
    }, 1000);
  }
};

/**
 * Combined action for updating appicant info
 * While fiering makes query to student endpoint with provided data:
 * @param studentData
 */
export const approveCourseApply = (applyOnCourseId: number): AppThunk => async (dispatch) => {
  try {
    dispatch(courseApplyStart());
    await approveCourseApplyQuery(applyOnCourseId);
    dispatch(courseApplySuccess(applyOnCourseId));
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
    dispatch(courseApplySuccess(applyOnCourseId));
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
export const userVerification = (userVerificationData: IUserVerificationData): AppThunk => async (dispatch) => {
  try {
    dispatch(userVerificationStart());
    await userVerificationQuery(userVerificationData);
    dispatch(userVerificationSuccess(userVerificationData));
  } catch (err) {
    // TODO: remove setTimeout. Used just for demo of redux toolkit functionality
    setTimeout(() => {
      dispatch(userVerificationSuccess(userVerificationData));
    }, 1000);
  }
};
