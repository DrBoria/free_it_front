/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'rootReducer';

import { TextField } from '@material-ui/core';
import Button from 'components/Button';
import FormHeader from 'components/FormHeader/FormHeader';
import FormBody from 'components/FormBody/FormBody';
import Input from 'components/Input';
import TextArea from 'components/TextArea';

import { applyCourse } from 'features/teacher';

import styles from './TeacherSubmit.module.scss';

const TeacherSubmit = () => {
  const dispatcher = useDispatch();

  // Data from store. Could be used multiple selecrots
  // For example:
  // const {student, courses} = useSelector((state: RootState) => state);
  const { success, loading, error } = useSelector((state: RootState) => state.teacher);

  const sumitMentor = (e?: any) => {
    e?.preventDefault();
    const {
      firstName,
      lastName,
      email,
      maxStudents,
      about,
      prerequisits,
      skillsGained,
      title,
      lessonsCount,
      date,
      description,
    } = e.target;
    dispatcher(
      applyCourse({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        about: about.value,
        course: {
          prerequisits: prerequisits.value,
          skillsGained: skillsGained.value,
          title: title.value,
          maxStudents: Number(maxStudents.value),
          lessonsCount: Number(lessonsCount.value),
          startDate: new Date(date.value),
          description: description.value,
        },
      }),
    );
  };

  return (
    <>
      <div className="form">
        <FormHeader title="Форма регистрации преподавателя" />
        <FormBody onSubmit={sumitMentor}>
          <Input name="firstName" placeholder="Ваше имя" labelText="Введите ваше имя" />
          <Input name="lastName" placeholder="Ваша фамилия" labelText="Введите вашу фамилию" />
          <Input name="email" placeholder="Ваш email" labelText="Введите ваш email" />
          <TextArea name="about" placeholder="Расскажите о себе" labelText="Расскажите о себе" />
          <Input
            name="prerequisits"
            placeholder="Требования..."
            labelText="Какие базовые знания требуются для посещения курса"
          />
          <Input name="skillsGained" placeholder="Результат..." labelText="Что будет уметь выпускник" />
          <Input name="title" placeholder="Название курса" labelText="Название курса" />
          <Input
            name="maxStudents"
            placeholder="Максимальное количество студентов"
            labelText="Максимальное количество студентов"
          />
          <Input name="lessonsCount" placeholder="Количество занятий" labelText="Количество занятий в курсе" />
          <TextField
            id="date"
            label="Дата начала курсов"
            type="date"
            className={styles.formElement}
            defaultValue={new Date()}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextArea name="description" placeholder="Опишите, о чём курс" labelText="Описание курсы" />
        </FormBody>

        {success && 'Вы успешно зарегистрированы на портале'}
        {loading && 'loading...'}
        {error && 'Проверьте, правильно ли заполнены поля'}
      </div>
      <div className="buttons">
        <Button buttonType="next" placeholder="Next" disabled={false} onClick={sumitMentor} />
      </div>
    </>
  );
};
export default TeacherSubmit;
