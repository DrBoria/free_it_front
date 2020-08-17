import React, { FC } from 'react';

import styles from './Footer.module.scss';

type FooterProps = {
  title: string;
};

const Footer: FC<FooterProps> = ({ title }) => (
  <div className={styles.form__header}>
    <h4 className={styles.form__header_title}>{title}</h4>
    <a href="https://t.me/freeit_blr" target="_blank" rel="noopener noreferrer">
      наш Telegram
    </a>
  </div>
);

export default Footer;
