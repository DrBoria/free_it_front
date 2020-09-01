/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import Button from 'components/Button';
import FormHeader from 'components/FormHeader/FormHeader';
import FormBody from 'components/FormBody/FormBody';
import Input from 'components/Input';
import TextArea from 'components/TextArea';

import { applyOnCourse } from 'features/student';
import { RootState } from 'rootReducer';

const CreateAccount = () => {
  // Dispatcher. Used for sending actions based on action creators from 'features' folder
  const dispatcher = useDispatch();

  const match = useRouteMatch();

  // Data from store. Could be used multiple selecrots
  // For example:
  // const {student, courses} = useSelector((state: RootState) => state);
  const { success, loading, error } = useSelector((state: RootState) => state.student);

  const submitStudent = (e?: any) => {
    e?.preventDefault();
    const { about, email, firstName, lastName } = e.target;
    dispatcher(
      applyOnCourse({
        about: about.value,
        email: email.value,
        firstName: firstName.value,
        lastName: lastName.value,
        // @ts-ignore
        courseId: Number(match?.params.id),
      }),
    );
  };

  return (
    <>
      <div className="form">
        <FormHeader title="Пожалуйста заполните форму регистрации участника" />
        <FormBody title="Форма регистрации участника" onSubmit={submitStudent}>
          {/* This is content of form. You can put any component here */}
          <Input name="firstName" placeholder="Введите имя" labelText="Ваше имя" />
          <Input name="lastName" placeholder="Введите фамилию" labelText="Ваша фамилия" />
          <Input name="email" placeholder="Введите email" labelText="Email" />
          <TextArea name="about" placeholder="Расскажите о себе" labelText="О себе" />
        </FormBody>

        {success && 'Вы успешно зарегистрированы на курс'}
        {loading && 'loading...'}
        {error && 'Проверьте, правильно ли заполнены поля'}
      </div>
      <div className="buttons">
        <Button buttonType="next" placeholder="Зарегистрироваться" disabled={false} onClick={submitStudent} />
      </div>
    </>
  );
};

export default CreateAccount;
