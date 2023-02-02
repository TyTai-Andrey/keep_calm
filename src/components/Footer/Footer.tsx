import React, { FC } from 'react';
import styles from './Footer.module.scss';

export type FooterProps = {};

export const Footer: FC<FooterProps> = (props) => {
  return <div className={styles.root}>© TEST, 1022–2022</div>;
};
