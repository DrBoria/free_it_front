import fetchApi from 'utils/fetch';
import getBasicHeaders from 'utils/getBasicHeaders';

export interface ICourceData {
  email: string;
  applicantName: string;
  courseName: string;
  courseDescription: string;
}

export const fetchUpdateApplicant = async (courceData: ICourceData): Promise<any> => {
  const headers = getBasicHeaders();
  const signInUrl: any = await fetchApi(`${process.env.REACT_APP_APPLICANT_ENDPOINT}`, headers, 'POST', courceData);
  return signInUrl;
};

export const getApplicant = async (): Promise<any> => {
  const headers = getBasicHeaders();
  const signInUrl: any = await fetchApi(`${process.env.REACT_APP_APPLICANT_ENDPOINT}`, headers, 'GET');
  return signInUrl;
};
