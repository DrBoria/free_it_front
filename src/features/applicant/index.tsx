/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchUpdateApplicant, IApplicantData } from 'api/applicant';
import { AppThunk } from 'store';

interface IUpdatedApplicant {
  name: string;
  reason: string;
  id: string;
}

interface IApplicantState {
  applicant: IUpdatedApplicant;
  loading: boolean;
  error: string | null;
}

const initialState: IApplicantState = {
  applicant: {
    name: '',
    reason: '',
    id: '',
  },
  loading: false,
  error: null,
};

const comments = createSlice({
  name: 'applicant',
  initialState,
  reducers: {
    // creates reducers and actions based on name (applicant)
    updatedApplicantStart(state) {
      state.loading = true;
      state.error = null;
    },
    updatedApplicantSuccess(state, action: PayloadAction<IUpdatedApplicant>) {
      state.applicant = action.payload;
      state.loading = false;
      state.error = null;
    },
    updatedApplicantFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { updatedApplicantStart, updatedApplicantSuccess, updatedApplicantFailure } = comments.actions;
export default comments.reducer;

/**
 * Combined action for updating appicant info
 * While fiering makes query to applicant endpoint with provided data:
 * @param applicantData
 */
export const updateApplicant = (applicantData: IApplicantData): AppThunk => async (dispatch) => {
  try {
    dispatch(updatedApplicantStart());
    const updatedApplicant: IUpdatedApplicant = await fetchUpdateApplicant(applicantData);
    dispatch(updatedApplicantSuccess({ ...updatedApplicant }));
  } catch (err) {
    dispatch(updatedApplicantFailure(err));
  }
};
