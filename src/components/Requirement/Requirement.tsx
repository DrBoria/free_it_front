import React, { FC } from 'react';

import check_mark from 'styles/icons/check_mark.svg';

import styles from './Requirement.module.scss';

type RequirementProps = {
  isValid: boolean;
  requirement: string;
  dynamic?: boolean;
};

const Requirement: FC<RequirementProps> = ({ isValid, requirement, dynamic }) => {
  const setClass = (valid: boolean, isDynamic: any) => {
    if (isDynamic === false) {
      return styles.not_dynamic;
    }
    return valid ? styles.valid : styles.invalid;
  };

  return (
    <div className={styles['check-field']}>
      <div className={setClass(isValid, dynamic)}>
        <img src={check_mark} alt="check_mark" />
      </div>
      <p className={dynamic ? 'caption' : 'body_text-small'}>{requirement}</p>
    </div>
  );
};

export default Requirement;
