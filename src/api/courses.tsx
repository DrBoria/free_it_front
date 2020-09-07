import fetchApi from 'utils/fetch';
import getBasicHeaders from 'utils/getBasicHeaders';

export interface ICourseFormData {
  description: string;
  id?: number;
  maxStudents: number;
  name: string;
  startDate: Date;
}

export interface ICourseData {
  description: string;
  id: number;
  maxStudents: number;
  title: string;
  startDate: string;
}

export interface ICourseResponse {
  payload: ICourseData;
}

const COURSES_URL: string = `${process.env.REACT_APP_BASIC_URL}/${process.env.REACT_APP_COURSES_ENDPOINT}`;

export const updateCoursesQuery = async (courseData: ICourseFormData): Promise<ICourseResponse> => {
  const headers = getBasicHeaders();
  const response: ICourseResponse = await fetchApi(COURSES_URL, headers, 'PUT', courseData);
  return response;
};

export const getCoursesQuery = async (): Promise<ICourseData[]> => {
  const headers = getBasicHeaders();
  const response: ICourseData[] = await fetchApi(COURSES_URL, headers, 'GET');
  return response;
};

export const createCourseQuery = async (createCourseData: ICourseFormData): Promise<ICourseResponse> => {
  const headers = getBasicHeaders();
  const response: ICourseResponse = await fetchApi(COURSES_URL, headers, 'POST', createCourseData);
  return response;
};
