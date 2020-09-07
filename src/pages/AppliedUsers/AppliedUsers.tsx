/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'rootReducer';
import classNames from 'classnames';

import { IAppliedUserCardData } from 'api/admin';
import { approveCourseApply, rejectCourseApply, getAppliedUsers } from 'features/admin';

import FormHeader from 'components/FormHeader/FormHeader';
import FormBody from 'components/FormBody/FormBody';
import AppliedUserCard from 'components/AppliedUserCard';

import styles from './AppliedUsers.module.scss';

const AppliedUsers = () => {
  // Dispatcher. Used for sending actions based on action creators from 'features' folder
  const dispatcher = useDispatch();

  // Data from store. Could be used multiple selecrots
  // For example:
  // const {student, courses} = useSelector((state: RootState) => state);
  const { loading, error, usersCards } = useSelector((state: RootState) => state.admin);

  // Same as component did mount
  useEffect(() => {
    // Fetch only if there is no loaded courses
    if (!usersCards?.length) dispatcher(getAppliedUsers());
  }, []);

  return (
    <>
      <div className="form">
        <FormHeader title="Список пользователей" />
        <FormBody>
          <div className={styles.container}>
            <div className={classNames('body_text-small', styles.text_container)}>
              {usersCards.map((userCard: IAppliedUserCardData) => (
                <AppliedUserCard
                  courseDto={userCard.courseDto}
                  user={userCard.user}
                  apply={() => dispatcher(approveCourseApply(userCard.id))}
                  reject={() => dispatcher(rejectCourseApply(userCard.id))}
                />
              ))}

              {/* Show error based on redux error field */}
              {error && <p>Error while fetching users</p>}
              {/* Show loading indicator while fetching data */}
              {loading && <p>Loading users...</p>}
            </div>
          </div>
        </FormBody>
      </div>
    </>
  );
};

export default AppliedUsers;
