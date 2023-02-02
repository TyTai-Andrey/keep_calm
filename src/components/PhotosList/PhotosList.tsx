import React, { FC } from 'react';
import styles from './PhotosList.module.scss';
import { map } from 'lodash';

export type PhotosListProps = {
  photos: string[];
  listRef: React.MutableRefObject<null>;
  style: React.CSSProperties | undefined;
};

export const PhotosList: FC<PhotosListProps> = ({ photos, style, listRef }) => {
  return (
    <div className={styles.root} ref={listRef} style={style}>
      {map(photos, (i: string) => (
        <img src={i} key={i} />
      ))}
    </div>
  );
};
