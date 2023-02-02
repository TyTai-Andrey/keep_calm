import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Title.module.scss';

export type TitleProps = {
  text: string;
  className?: string;
};

export const Title: FC<TitleProps> = ({ text, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h1>{text}</h1>
    </div>
  );
};
