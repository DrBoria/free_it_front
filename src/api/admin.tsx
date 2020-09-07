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
export interface IUserVerificationData {
  id: number;
}

export interface IUserCardData {
  about: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  verified: true;
}
export interface IAppliedUserCardData {
  courseDto: {
    availableCount: number;
    description: string;
    id: number;
    maxStudents: number;
    startDate: Date;
    title: string;
  };
  user: IUserCardData;
  id: number;
}

const LOGIN_URL: string = `${process.env.REACT_APP_BASIC_URL}/${process.env.REACT_APP_LOGIN}`;
const UNVERIFIED_USERS_URL: string = `${process.env.REACT_APP_BASIC_URL}/${process.env.REACT_APP_UNVERIFIED_USERS}`;
const SUBSCRIPTIONS_URL: string = `${process.env.REACT_APP_BASIC_URL}/${process.env.REACT_APP_SUBSCRIPTIONS}`;
const USER_VERIFICATION_URL: string = `${process.env.REACT_APP_BASIC_URL}/${process.env.REACT_APP_VERIFY_USER}`;

/**
 * Login admin with email and password
 * @param studentData
 */
export const loginAdminQuery = async (studentData: IAdminCredentials): Promise<ILoginAdminResponse> => {
  const headers = getBasicHeaders();
  const response: ILoginAdminResponse = await fetchApi(LOGIN_URL, headers, 'POST', studentData);
  return response;
};

/**
 * Fetch list of users who applied to courses
 */
export const getAppliedUsersQuery = async (): Promise<IAppliedUserCardData[]> => {
  const headers = getBasicHeaders();
  const response: IAppliedUserCardData[] = await fetchApi(SUBSCRIPTIONS_URL, headers);
  return response;
};

/**
 * Fetch users (teachers and students) who registred, but not verified by admin
 */
export const getUnverifiedUserQuery = async (): Promise<IUserCardData[]> => {
  const headers = getBasicHeaders();
  const response: IUserCardData[] = await fetchApi(UNVERIFIED_USERS_URL, headers);
  return response;
};

/**
 * Verify registred on portal user (teacher or student)
 */
export const userVerificationQuery = async (
  userVerificationData: IUserVerificationData,
): Promise<ILoginAdminResponse> => {
  const headers = getBasicHeaders();
  const response: ILoginAdminResponse = await fetchApi(USER_VERIFICATION_URL, headers, 'PUT', userVerificationData);
  return response;
};

/**
 * Approve student on course he was applied
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
 * Reject passing course by the student
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
