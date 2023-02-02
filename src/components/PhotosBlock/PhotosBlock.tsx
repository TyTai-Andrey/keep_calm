import React, { FC } from 'react';
import styles from './PhotosBlock.module.scss';

export type PhotosBlockProps = {
  longImg: string;
  shortImg: string;
};

export const PhotosBlock: FC<PhotosBlockProps> = ({ longImg, shortImg }) => {
  return (
    <div className={styles.root}>
      <div className={styles.longBlock}>
        <img className={styles.longImg} src={longImg} />
        <div className={styles.text}>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <p>
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
      <div className={styles.shortBlock}>
        <div className={styles.text}>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <p>
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
        </div>
        <img className={styles.shortImg} src={shortImg} />
      </div>
    </div>
  );
};
