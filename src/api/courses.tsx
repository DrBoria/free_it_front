import fetchApi from 'utils/fetch';
import getBasicHeaders from 'utils/getBasicHeaders';

export interface ICourseData {
  email: string;
  applicantName: string;
  courseName: string;
  courseDescription: string;
}

/**
 * Makes qeury with for updating courses info
 * @param courseData
 */
export const fetchUpdateCourses = async (courseData: ICourseData): Promise<any> => {
  const headers = getBasicHeaders();
  const response: any = await fetchApi(`${process.env.REACT_APP_COURSES_ENDPOINT}`, headers, 'POST', courseData);
  return response;
};

export const getCourses = async (): Promise<any> => {
  const headers = getBasicHeaders();
  const response: any = await fetchApi(`${process.env.REACT_APP_COURSES_ENDPOINT}`, headers, 'GET');
  return response;
};
