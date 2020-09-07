import fetchApi from 'utils/fetch';
import getBasicHeaders from 'utils/getBasicHeaders';

export interface IStudentData {
  about: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface IStudentApplyData extends IStudentData {
  courseId: number;
}

export interface IAppliedStudentResponse extends IStudentApplyData {
  verified: boolean;
}

const STUDENTS_URL: string = `${process.env.REACT_APP_BASIC_URL}/${process.env.REACT_APP_STUDENT_REGISTRATION}`;

/**
 * Apply student on course based on course ID
 */
export const applyOnCourseQuery = async (studentData: IStudentApplyData): Promise<IAppliedStudentResponse> => {
  const headers = getBasicHeaders();
  const response: IAppliedStudentResponse = await fetchApi(STUDENTS_URL, headers, 'POST', studentData);
  return response;
};

/**
 * Get current student info based on provided headers
 */
export const getStudentQuery = async (): Promise<any> => {
  const headers = getBasicHeaders();
  const response: any = await fetchApi(STUDENTS_URL, headers, 'GET');
  return response;
};
