import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { RootState } from 'rootReducer';

import { ICourseData } from 'api/courses';
import FormHeader from 'components/FormHeader';
import FormBody from 'components/FormBody';
import { getCourses } from 'features/courses';
import CourseCard from 'components/CourseCard';

import styles from './CourseInformation.module.scss';

const CourseInformation = () => {
  // Dispatcher. Used for sending actions based on action creators from 'features' folder
  const dispatcher = useDispatch();
  const history = useHistory();

  const { courses, loading, error } = useSelector((state: RootState) => state.courses);
  // Same ad component did mount
  useEffect(() => {
    // Fetch only if there is no loaded courses
    if (!courses?.length) dispatcher(getCourses());
  }, []);

  return (
    <>
      <div className="form">
        <FormHeader title="Список доступных курсов" />
        <FormBody title="">
          <div className={styles.container}>
            <div className={classNames('body_text-small', styles.text_container)}>
              {courses.map((course: ICourseData) => (
                <CourseCard
                  courseId={course.id}
                  title={course.title}
                  description={course.description}
                  startDate={course.startDate}
                  apply={(courseId: number) => history.push(`/courseapply/${courseId}`)}
                />
              ))}

              {/* Show error based on redux error field */}
              {error && <p>Error while fetching courses</p>}
              {/* Show loading indicator while fetching data */}
              {loading && <p>Loading courses...</p>}
            </div>
          </div>
        </FormBody>
      </div>
    </>
  );
};

export default CourseInformation;
