/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchUpdateApplicant, ICourceData } from 'api/applicant';
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
  name: 'comments',
  initialState,
  reducers: {
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

export const updateApplicant = (courceData: ICourceData): AppThunk => async (dispatch) => {
  try {
    dispatch(updatedApplicantStart());
    const updatedApplicant: IUpdatedApplicant = await fetchUpdateApplicant(courceData);
    dispatch(updatedApplicantSuccess({ ...updatedApplicant }));
  } catch (err) {
    dispatch(updatedApplicantFailure(err));
  }
};
