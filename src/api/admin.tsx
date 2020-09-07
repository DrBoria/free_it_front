import fetchApi from 'utils/fetch';
import getBasicHeaders from 'utils/getBasicHeaders';

export interface IAdminCredentials {
  email: string;
  password: string;
}

export interface ILoginAdminResponse {
  token: {
    accessToken: string;
    username: string;
  };
}

const LOGIN_URL: string = `${process.env.REACT_APP_BASIC_URL}/${process.env.REACT_APP_LOGIN}`;
const SUBSCRIPTIONS_URL: string = `${process.env.REACT_APP_BASIC_URL}/${process.env.REACT_APP_SUBSCRIPTIONS}`;

/**
 * Makes qeury with for updating student info
 * @param studentData
 */
export const loginAdminQuery = async (studentData: IAdminCredentials): Promise<ILoginAdminResponse> => {
  const headers = getBasicHeaders();
  const response: ILoginAdminResponse = await fetchApi(LOGIN_URL, headers, 'POST', studentData);
  return response;
};

/**
 * Makes qeury with for updating student info
 * @param studentData
 */
export const approveCourseApplyQuery = async (applyOnCourseId: number): Promise<ILoginAdminResponse> => {
  const headers = getBasicHeaders();
  const response: ILoginAdminResponse = await fetchApi(
    `${SUBSCRIPTIONS_URL}/${applyOnCourseId}/accept`,
    headers,
    'POST',
  );
  return response;
};

/**
 * Makes qeury with for updating student info
 * @param studentData
 */
export const rejectCourseApplyQuery = async (applyOnCourseId: number): Promise<ILoginAdminResponse> => {
  const headers = getBasicHeaders();
  const response: ILoginAdminResponse = await fetchApi(
    `${SUBSCRIPTIONS_URL}/${applyOnCourseId}/reject`,
    headers,
    'POST',
  );
  return response;
};
