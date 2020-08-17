import fetchApi from 'utils/fetch';
import getBasicHeaders from 'utils/getBasicHeaders';

export interface ICourceData {
  email: string;
  applicantName: string;
  courseName: string;
  courseDescription: string;
}

export const fetchUpdateCourses = async (courceData: ICourceData): Promise<any> => {
  const headers = getBasicHeaders();
  const signInUrl: any = await fetchApi(`${process.env.REACT_APP_COURSES_ENDPOINT}`, headers, 'POST', courceData);
  return signInUrl;
};

export const getCourses = async (): Promise<any> => {
  const headers = getBasicHeaders();
  const signInUrl: any = await fetchApi(`${process.env.REACT_APP_COURSES_ENDPOINT}`, headers, 'GET');
  return signInUrl;
};
