import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import FormHeader from 'components/FormHeader';
import FormBody from 'components/FormBody';
import { updateCourses } from 'features/courses';

import styles from './CourseInformation.module.scss';

const BankAccountVerificationWidget = () => {
  const dispatcher = useDispatch();

  return (
    <>
      <div className="form">
        <FormHeader title="Список доступных курсовd" />
        <FormBody
          title=""
          onSubmit={(e) => {
            e.preventDefault();
            // @ts-ignore
            updateCourses({ name: 'name', description: 'descr' })(dispatcher);
          }}
        >
          <div className={styles.container}>
            <div className={classNames('subtitle-large', styles.subtitle)}>Some course descriotion</div>
            <div className={classNames('body_text-small', styles.text_container)}>
              <p>Ololo course description</p>
            </div>
          </div>
        </FormBody>
      </div>
    </>
  );
};

export default BankAccountVerificationWidget;
