import fetchApi from 'utils/fetch';
import getBasicHeaders from 'utils/getBasicHeaders';

export interface IApplicantData {
  email: string;
  applicantName: string;
  courseName: string;
  courseDescription: string;
}

/**
 * Makes qeury with for updating applicant info
 * @param applicantData
 */
export const updateApplicantQuery = async (applicantData: IApplicantData): Promise<any> => {
  const headers = getBasicHeaders();
  const response: any = await fetchApi(`${process.env.REACT_APP_APPLICANT_ENDPOINT}`, headers, 'POST', applicantData);
  return response;
};

/**
 * Get current applicant info based on provided headers
 */
export const getApplicantQuery = async (): Promise<any> => {
  const headers = getBasicHeaders();
  const response: any = await fetchApi(`${process.env.REACT_APP_APPLICANT_ENDPOINT}`, headers, 'GET');
  return response;
};
