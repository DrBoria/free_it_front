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
 * Get current student info based on provided headers
 */
export const getStudentQuery = async (): Promise<any> => {
  const headers = getBasicHeaders();
  const response: any = await fetchApi(LOGIN_URL, headers, 'GET');
  return response;
};
