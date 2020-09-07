import fetchApi from 'utils/fetch';
import getBasicHeaders from 'utils/getBasicHeaders';

export interface ITeacherData {
  about: string;
  email: string;
  firstName: string;
  lastName: string;
  course?: {
    description: string;
    lessonsCount: number;
    maxStudents: number;
    startDate?: Date;
    prerequisits: string;
    skillsGained: string;
    title: string;
  };
}

export interface IAppliedTeacherResponse extends ITeacherData {
  about: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  verified: boolean;
}

const TeacherS_URL: string = `${process.env.REACT_APP_BASIC_URL}/${process.env.REACT_APP_TEACHER_REGISTRATION}`;

/**
 * Makes qeury with for updating Teacher info
 * @param TeacherData
 */
export const applyCourseQuery = async (TeacherData: ITeacherData): Promise<IAppliedTeacherResponse> => {
  const headers = getBasicHeaders();
  const response: IAppliedTeacherResponse = await fetchApi(TeacherS_URL, headers, 'POST', TeacherData);
  return response;
};

/**
 * Get current Teacher info based on provided headers
 */
export const getTeacherQuery = async (): Promise<any> => {
  const headers = getBasicHeaders();
  const response: any = await fetchApi(TeacherS_URL, headers, 'GET');
  return response;
};
