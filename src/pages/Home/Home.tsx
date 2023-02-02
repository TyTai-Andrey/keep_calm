import { PhotosBlock } from '@components/PhotosBlock';
import { PhotosList } from '@components/PhotosList';
import { Title } from '@components/Title';
import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './Home.module.scss';

import img_l_1 from '@assets/images/l_1.png';
import img_s_1 from '@assets/images/s_1.png';
import img_l_2 from '@assets/images/l_2.png';
import img_s_2 from '@assets/images/s_2.png';

import img1 from '@assets/images/_1.png';
import img2 from '@assets/images/_2.png';
import img3 from '@assets/images/_3.png';
import img4 from '@assets/images/_4.png';
import img5 from '@assets/images/_5.png';
import img6 from '@assets/images/_6.png';
import img7 from '@assets/images/_7.png';
import img8 from '@assets/images/_8.png';
import img9 from '@assets/images/_9.png';
import img10 from '@assets/images/_10.png';
import img11 from '@assets/images/_11.png';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

export type HomeProps = {};

export const Home: FC<HomeProps> = () => {
  const [styleScrollHelper, setStyleScrollHelper] =
    useState<React.CSSProperties>({});
  const [styleContent, setStyleContent] = useState<React.CSSProperties>({});
  const [styleList, setStyleList] = useState<React.CSSProperties>({});

  const _root = useRef(null);
  const _list = useRef(null);

  const pointsList = [0, 765, 1465, 2150, 2865];
  const pointsRoot = [0, 355, 1495, 2345, 2715];

  useEffect(() => {
    if (_root.current && _list.current) {
      const rootHeight = (_root.current as { scrollHeight: number })
        .scrollHeight;

      const listWidth = (_list.current as { clientWidth: number }).clientWidth;

      const totalHeight = rootHeight + listWidth;

      setStyleScrollHelper({ height: totalHeight });
    }
  }, [_root.current, _list.current]);

  const getPointRoot = (scrollTop: number, listWidth: number) => {
    switch (true) {
      case scrollTop < pointsRoot[1] && scrollTop >= pointsRoot[0]:
        return pointsRoot[0];
      case scrollTop >= pointsRoot[1] && scrollTop < pointsRoot[2]:
        return pointsRoot[1];
      case scrollTop >= pointsRoot[2] && scrollTop < pointsRoot[3] + listWidth:
        return pointsRoot[2];
      case scrollTop >= pointsRoot[3] + listWidth &&
        scrollTop < pointsRoot[4] + listWidth:
        return pointsRoot[3];
      case scrollTop >= pointsRoot[4] + listWidth:
        return pointsRoot[4];
    }
  };

  const getPointList = (scrollTop: number, listWidth: number) => {
    const path = (listWidth - 100) / 4;

    switch (true) {
      case scrollTop < pointsRoot[2] + path * 1 && scrollTop >= 0:
        return pointsList[0];
      case scrollTop >= pointsRoot[2] + path * 1 &&
        scrollTop < pointsRoot[2] + path * 2:
        return pointsList[1];
      case scrollTop >= pointsRoot[2] + path * 2 &&
        scrollTop < pointsRoot[2] + path * 3:
        return pointsList[2];
      case scrollTop >= pointsRoot[2] + path * 3 &&
        scrollTop < pointsRoot[2] + path * 4:
        return pointsList[3];
      case scrollTop >= pointsRoot[2] + path * 4:
        return pointsList[4];
    }
  };

  const onScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const { scrollTop } = event.target as HTMLDivElement;

    if (_list.current && _root.current) {
      const listWidth = (_list.current as { clientWidth: number }).clientWidth;
      const pointY = getPointRoot(scrollTop, listWidth);

      if (typeof pointY === 'number') {
        setStyleContent((prev) => ({
          ...prev,
          transform: `translateY(-${pointY}px)`,
        }));
      }

      const pointX = getPointList(scrollTop, listWidth);
      if (typeof pointX === 'number') {
        setStyleList((prev) => ({
          ...prev,
          transform: `translateX(-${pointX}px)`,
        }));
      }
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.scrollHelper} onScroll={onScroll}>
        <div style={styleScrollHelper} />
      </div>
      <div className={styles.content} style={styleContent} ref={_root}>
        <Header />
        <Title text={'ut aliquip ex ea commodo consequat'} />
        <PhotosBlock longImg={img_l_1} shortImg={img_s_1} />
        <Title text={'Lorem ipsum dolor sit amet'} />
        <PhotosList
          photos={[
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
            img8,
            img9,
            img10,
            img11,
          ]}
          listRef={_list}
          style={styleList}
        />
        <Title text={'ut aliquip ex ea commodo consequat'} />
        <PhotosBlock longImg={img_l_2} shortImg={img_s_2} />
        <Footer />
      </div>
    </div>
  );
};
