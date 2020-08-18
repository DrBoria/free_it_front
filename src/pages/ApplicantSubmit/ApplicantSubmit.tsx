/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/Button';
import FormHeader from 'components/FormHeader/FormHeader';
import FormBody from 'components/FormBody/FormBody';
import Input from 'components/Input';
import TextArea from 'components/TextArea';

import { updateApplicant } from 'features/applicant';
import { RootState } from 'rootReducer';

const CreateAccount = () => {
  // Dispatcher. Used for sending actions based on action creators from 'features' folder
  const dispatcher = useDispatch();

  // Data from store. Could be used multiple selecrots
  // For example:
  // const {applicant, courses} = useSelector((state: RootState) => state);
  const { loading, error } = useSelector((state: RootState) => state.applicant);

  const submitApplicant = (e?: any) => {
    e?.preventDefault();
    const { applicantName, email, courseName, courseDescription } = e.target;
    // @ts-ignore
    updateApplicant({
      applicantName: applicantName.value,
      email: email.value,
      courseName: courseName.value,
      courseDescription: courseDescription.value,
    })(dispatcher);
  };

  // Plain page with generic form
  return (
    <>
      <div className="form">
        <FormHeader title="Пожалуйста заполните форму регистрации участника" />
        <FormBody title="Форма регистрации участника" onSubmit={submitApplicant}>
          {/* This is content of form. You can put any component here */}
          <p className="body_text-small">Укажите email</p>
          <Input name="applicantName" placeholder="Введите имя" labelText="Ваше имя" />
          <Input name="email" placeholder="Введите email" labelText="Email" />
          <Input name="courseName" placeholder="Введите название курса" labelText="Название курса" />
          <TextArea name="courseDescription" placeholder="Опишите, о чём курс" labelText="Описание курсы" />
        </FormBody>

        {loading && 'loading...'}
        {error && 'ups, something went wrong'}
      </div>
      <div className="buttons">
        <Button buttonType="next" placeholder="Next" disabled={false} onClick={submitApplicant} />
      </div>
    </>
  );
};

export default CreateAccount;
