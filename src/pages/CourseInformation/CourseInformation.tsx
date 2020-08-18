import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { RootState } from 'rootReducer';

import FormHeader from 'components/FormHeader';
import FormBody from 'components/FormBody';
import { getCourses } from 'features/courses';

import styles from './CourseInformation.module.scss';

const BankAccountVerificationWidget = () => {
  // Dispatcher. Used for sending actions based on action creators from 'features' folder
  const dispatcher = useDispatch();

  const { courses, loading, error } = useSelector((state: RootState) => state.courses);
  // Same ad component did mount
  useEffect(() => {
    // Fetch only if there is no loaded courses
    if (!courses.length) dispatcher(getCourses());
  }, []);

  return (
    <>
      <div className="form">
        <FormHeader title="Список доступных курсовd" />
        <FormBody title="">
          <div className={styles.container}>
            <div className={classNames('subtitle-large', styles.subtitle)}>Some course descriotion</div>
            <div className={classNames('body_text-small', styles.text_container)}>
              {courses.map((course) => (
                <p>{course.name}</p>
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

export default BankAccountVerificationWidget;
