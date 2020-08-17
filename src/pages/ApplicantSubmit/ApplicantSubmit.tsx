/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import classNames from 'classnames';

import Button from 'components/Button';
import FormHeader from 'components/FormHeader/FormHeader';
import FormBody from 'components/FormBody/FormBody';
import { updateCourses } from 'features/courses';

import styles from './ApplicantSubmit.module.scss';

const CreateAccount = () => {
  const dispatcher = useDispatch();

  const [applicantName, setApplicantName] = useState('');
  const [email, setEmail] = useState('');

  const handleChangeApplicantName = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\s/g, '');
    const currentValue: string = e.target.value;
    e.preventDefault();
    setApplicantName(currentValue);
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\s/g, '');
    const currentValue: string = e.target.value;
    e.preventDefault();
    setEmail(currentValue);
  };

  const submitApplicant = (e?: any) => {
    e?.preventDefault();
    // @ts-ignore
    updateCourses({ applicantName, email })(dispatcher);
  };

  return (
    <>
      <div className="form">
        <FormHeader title="Пожалуйста заполните форму регистрации участника" />
        <FormBody title="Форма регистрации участника" onSubmit={submitApplicant}>
          <p className="body_text-small">Укажите email</p>
          <label htmlFor="name" className={classNames('label', styles.form__body_label)}>
            Ваше имя
          </label>
          <input
            className={styles.form__body_input}
            type="text"
            id="name"
            name="name"
            placeholder="Введите имя"
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
            placeholder={email}
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
          />
          <label htmlFor="description" className={classNames('label', styles.form__body_label)}>
            Описание курсы
          </label>
          <textarea id="description" rows={10} cols={45} name="description" placeholder="Опишите, о чём курс" />
        </FormBody>
      </div>
      <div className="buttons">
        <Button buttonType="next" placeholder="Next" disabled={false} onClick={submitApplicant} />
      </div>
    </>
  );
};

export default CreateAccount;
