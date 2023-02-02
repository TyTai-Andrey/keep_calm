import React, { FC } from 'react';
import styles from './Header.module.scss';

import logo from '@assets/images/logo.png';

export type HeaderProps = {};

export const Header: FC<HeaderProps> = (props) => {
  return (
    <header className={styles.root}>
      <img className={styles.logo} src={logo} />

      <div className={styles.phone}>+7 (495) 495-49-54</div>
    </header>
  );
};
