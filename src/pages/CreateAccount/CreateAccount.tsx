/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import classNames from 'classnames';

import Button from 'components/Button';
import FormHeader from 'components/FormHeader/FormHeader';
import FormBody from 'components/FormBody/FormBody';

import { updateCourses } from 'features/courses';

import styles from './CreateAccount.module.scss';

const CreateAccount = () => {
  const dispatcher = useDispatch();

  const [email, setEmail] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\s/g, '');
    const currentValue: string = e.target.value;
    e.preventDefault();
    setEmail(currentValue);
  };

  const handleChangeApplicantName = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue: string = e.target.value;
    e.preventDefault();
    setApplicantName(currentValue);
  };

  const handleChangeCourseName = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue: string = e.target.value;
    e.preventDefault();
    setCourseName(currentValue);
  };

  const handleChangeCourseDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const currentValue: string = e.target.value;
    e.preventDefault();
    setCourseDescription(currentValue);
  };

  const submitMentor = (e?: any) => {
    e?.preventDefault();
    // @ts-ignore
    updateCourses({
      email,
      applicantName,
      courseName,
      courseDescription,
    })(dispatcher);
  };

  return (
    <>
      <div className="form">
        <FormHeader title="Пожалуйста, заполните форму регистрации ментора" />
        <FormBody title="Форма регистрации участника" onSubmit={submitMentor}>
          <p className="body_text-small">Укажите email</p>
          <label htmlFor="name" className={classNames('label', styles.form__body_label)}>
            Ваше имя
          </label>
          <input
            className={styles.form__body_input}
            type="text"
            id="name"
            name="name"
            placeholder="Введите ваше имя"
            value={applicantName}
            onChange={handleChangeApplicantName}
          />
          <label htmlFor="email" className={classNames('label', styles.form__body_label)}>
            Email
          </label>
          <input
            className={styles.form__body_input}
            type="text"
            id="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <label htmlFor="courseName" className={classNames('label', styles.form__body_label)}>
            Название курса
          </label>
          <input
            className={styles.form__body_input}
            type="text"
            id="courseName"
            name="courseName"
            placeholder="Введите название курса"
            value={courseName}
            onChange={handleChangeCourseName}
          />
          <label htmlFor="description" className={classNames('label', styles.form__body_label)}>
            Описание курсы
          </label>
          <textarea
            id="description"
            rows={10}
            cols={45}
            name="description"
            placeholder="Опишите, о чём курс"
            value={courseDescription}
            onChange={handleChangeCourseDescription}
          />
        </FormBody>
      </div>
      <div className="buttons">
        <Button buttonType="next" placeholder="Next" disabled={false} onClick={submitMentor} />
      </div>
    </>
  );
};
export default CreateAccount;
