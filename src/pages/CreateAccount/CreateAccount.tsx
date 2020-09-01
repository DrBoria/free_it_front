/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import { useDispatch } from 'react-redux';

import Button from 'components/Button';
import FormHeader from 'components/FormHeader/FormHeader';
import FormBody from 'components/FormBody/FormBody';
import Input from 'components/Input';
import TextArea from 'components/TextArea';

import { updateCourses } from 'features/courses';

const CreateAccount = () => {
  const dispatcher = useDispatch();

  const sumitMentor = (e?: any) => {
    e?.preventDefault();
    const { maxStudents, startDate, courseName, courseDescription } = e.target;
    dispatcher(
      updateCourses({
        startDate: new Date(startDate.value),
        maxStudents: maxStudents.value,
        name: courseName.value,
        description: courseDescription.value,
      }),
    );
  };

  return (
    <>
      <div className="form">
        <FormHeader title="Пожалуйста, заполните форму регистрации ментора" />
        <FormBody title="Форма регистрации участника" onSubmit={sumitMentor}>
          <p className="body_text-small">Укажите email</p>
          <Input name="maxStudents" placeholder="Введите имя" labelText="Ваше имя" />
          <Input name="startDate" placeholder="Введите дату начала курса" labelText="Email" />
          <Input name="courseName" placeholder="Введите название курса" labelText="Название курса" />
          <TextArea name="courseDescription" placeholder="Опишите, о чём курс" labelText="Описание курсы" />
        </FormBody>
      </div>
      <div className="buttons">
        <Button buttonType="next" placeholder="Next" disabled={false} onClick={sumitMentor} />
      </div>
    </>
  );
};
export default CreateAccount;
