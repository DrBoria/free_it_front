/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/Button';
import FormHeader from 'components/FormHeader/FormHeader';
import FormBody from 'components/FormBody/FormBody';
import Input from 'components/Input';

import { loginAdmin } from 'features/admin';
import { RootState } from 'rootReducer';
import { useHistory } from 'react-router-dom';

const AdminLogin = () => {
  // Dispatcher. Used for sending actions based on action creators from 'features' folder
  const dispatcher = useDispatch();

  // Data from store. Could be used multiple selecrots
  // For example:
  // const {student, courses} = useSelector((state: RootState) => state);
  const { success, loading, error } = useSelector((state: RootState) => state.admin);

  const history = useHistory();

  useEffect(() => {
    if (success) {
      history.push('/appliedUsers');
    }
  }, [success]);

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
        <FormHeader title="Войдите в свой профиль" />
        <FormBody onSubmit={adminStudent}>
          {/* This is content of form. You can put any component here */}
          <Input name="email" placeholder="Введите email" labelText="Ваше email" />
          <Input name="password" inputType="password" placeholder="Введите пароль" labelText="Ваш пароль" />
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

export default AdminLogin;
