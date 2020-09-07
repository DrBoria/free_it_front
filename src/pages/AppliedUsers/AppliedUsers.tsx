/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { loginAdmin, IUserCardData, approveCourseApply, rejectCourseApply } from 'features/admin';
import { RootState } from 'rootReducer';

import Button from 'components/Button';
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

  const adminStudent = (e?: any) => {
    e?.preventDefault();
    const { email, password } = e.target;
    dispatcher(
      loginAdmin({
        email: email.value,
        password: password.value,
      }),
    );
  };

  return (
    <>
      <div className="form">
        <FormHeader title="Список пользователей" />
        <FormBody>
          <div className={styles.container}>
            <div className={classNames('body_text-small', styles.text_container)}>
              {usersCards.map((userCard: IUserCardData) => (
                <AppliedUserCard
                  courseDto={userCard.courseDto}
                  user={userCard.user}
                  apply={() => dispatcher(approveCourseApply(userCard.id))}
                  reject={() => dispatcher(rejectCourseApply(userCard.id))}
                />
              ))}

              {/* Show error based on redux error field */}
              {error && <p>Error while fetching courses</p>}
              {/* Show loading indicator while fetching data */}
              {loading && <p>Loading courses...</p>}
            </div>
          </div>
        </FormBody>

        {loading && 'loading...'}
        {error && 'Проверьте, правильно ли заполнены поля'}
      </div>
      <div className="buttons">
        <Button buttonType="next" placeholder="Войти" disabled={false} onClick={adminStudent} />
      </div>
    </>
  );
};

export default AppliedUsers;
